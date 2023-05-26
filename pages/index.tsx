import React from "react";
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
import Pagination from "../components/Pagination";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const page = parseInt(query.page as string, 10) || 1;
  const perPage = 10;
  const skip = (page - 1) * perPage;
  const session = await getSession({ req });

  const feed = await prisma.post.findMany({
    take: perPage,
    skip: skip,
    where: !session ? { published: true } :
    {      
    OR: [
      { published: true },
      { published: false,
        author: { email: session.user?.email },
      },
    ],
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  const count = await prisma.post.count({ where: !session ? { published: true } :
    {      
    OR: [
      { published: true },
      { published: false,
        author: { email: session.user?.email },
      },
    ],
    }
  });

  return {
    props: {
      feed,
      page,
      pageCount: Math.ceil(count / perPage),
    },
  };
};

type Props = {
  feed: PostProps[];
  page: number;
  pageCount: number;
};

const Blog: React.FC<Props> = (props) => {
  const { feed, page, pageCount } = props;

  return (
    <Layout>
      <div className="page">
        <h1><center>Public Feed</center></h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
        <b><center>{pageCount === 0 ? "No posts available!" : ""}</center></b>
        <div>
        <Pagination page={page} pageCount={pageCount} />
        </div>
      </div>
     <style jsx>{`
  .post {
    background: rgba(238, 251, 245, 0.550);
    transition: box-shadow 0.1s ease-in;
  }
  .post:hover {
    background-color: #e1fbf2;
    box-shadow: 1px 1px 3px #aaa;
  }

  .post + .post {
    margin-top: 2rem;
  }
`}</style>
    </Layout>
  );
};

export default Blog;