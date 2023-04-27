import React, { useState } from "react";
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = parseInt(query.page as string, 10) || 1;
  const perPage = 10;
  const skip = (page - 1) * perPage;

  const feed = await prisma.post.findMany({
    take: perPage,
    skip: skip,
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  
  const count = await prisma.post.count({ where: { published: true } });

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
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(page);

  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
        <div className="pagination">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              className={`pagination__item${currentPage === i + 1 ? " pagination__item--active" : ""}`}
              onClick={() => {
                router.push(`/?page=${i + 1}`)
                setCurrentPage(i + 1)
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }

        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .pagination__item {
          background-color: #fff;
          border: 1px solid #ddd;
          color: #666;
          cursor: pointer;
          font-size: 1.6rem;
          padding: 0.5rem;
          text-align: center;
          text-decoration: none;
          transition: background-color 0.3s ease-in-out;
          margin: 0 0.5rem;
        }

        .pagination__item:hover {
          background-color: #eee;
        }

        .pagination__item--active {
          background-color: #0070f3;
          color: #fff;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;