import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { useSession, getSession } from "next-auth/react";
import prisma from '../lib/prisma'
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  //const session = await getSession({ req });
  const userName = query.UserName;

  if (!userName) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const response = await axios.post(`http://localhost:3001/api/posts`,{published: false, userName});
  return { props: { drafts: response.data } };

  // const drafts = await prisma.post.findMany({
  //   where: {
  //     author: { email: session.user?.email },
  //     published: false,
  //   },
  //   include: {
  //     author: {
  //       select: { name: true },
  //     },
  //   },
  // });
  
 // const postIDs = drafts.map((post) => post.id)
 // const result = await axios.post(`http://localhost:3001/api/video`,{postIDs});
  // if(Array.isArray(result.data))
  //   return { props: { drafts: drafts, videos: result.data } };
  // else
  //   return { props: { drafts: drafts, videos: [] } };
};

type Props = {
  drafts: PostProps[];
  //logged: boolean
};


const Drafts: React.FC<Props> = (props) => {
  //const logged = window.localStorage.getItem('loggedNoteappUser')
  const {drafts} = props;
  const [user, setUser] = useState<{token: string, username: string, name: string, email: string}>()
  
    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
      if (loggedUserJSON)
        setUser(JSON.parse(loggedUserJSON))
    }, [])
//check token fits drafts token?
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
          {drafts.length == 0 ? 
          <b><center>No drafts available!</center></b>
          : drafts.map((post) => {
            // const video = videos.find(tmp => tmp.postID == post.id)
            // let url ="";
            // if(video)
            //   url = video.videoURL;
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