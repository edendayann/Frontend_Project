import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import axios from "axios";
import Cookies from "js-cookie";

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const username = query.username;
  if (!username) {
    res.statusCode = 403;
    return { props: { drafts: [], count: 0 } };
  }
  const response = await axios.post(`http://localhost:3001/api/posts`,{published: false, username});
  return { props: { drafts: response.data.posts, count: response.data.count} };
};

type Props = {
  drafts: PostProps[];
  count: number;
};

const Drafts: React.FC<Props> = (props) => {
  const {drafts, count} = props;
  const [user, setUser] = useState<{token: string, username: string, name: string, email: string, imageURL: string}>()
  
  useEffect(() => {
    const loggedUserJSON = Cookies.get("loggedNoteappUser");
    if (loggedUserJSON)
      setUser(JSON.parse(loggedUserJSON))
  }, [])

  if (!user) {
    return (
      <Layout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page">
        <h1><center>My Drafts</center></h1>
        <main>
          {count == 0 ? 
          <b><center>No drafts available!</center></b>
          : drafts.map((post) => {
            if(user.email == post.author?.email)
              return (
                <div key={post.id} className="post">
                  <Post post={post}  video={post.video}  />
                </div>
              )
            }
          )}
        </main>
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

export default Drafts;