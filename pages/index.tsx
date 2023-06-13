import React from "react";
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import Pagination from "../components/Pagination";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const page = parseInt(query.page as string, 10) || 1;
  const take = 10;
  const skip = (page - 1) * take;
  const response = await axios.post(`http://localhost:3001/api/posts`,{skip, take, published: true});

  return {
    props: {
      feed: response.data.posts,
      page,
      pageCount: Math.ceil(response.data.count / take),
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
          {feed.map((post) => {
            return (
              <div key={post.id} className="post">
                <Post post={post}  video={post.video}  />
              </div>
            )
          } )}
        </main>
        <b><center>{pageCount === 0 ? "No posts available!" : ""}</center></b>
        <div>
          <Pagination page={page} pageCount={pageCount} />
        </div>
      </div>
     <style jsx>{`
  .post {
    background: rgba(238, 251, 245, 0.685);
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

export default Blog;