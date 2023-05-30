import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { useSession, getSession } from "next-auth/react";
import prisma from '../lib/prisma'
import axios from "axios";
import { BiCameraMovie } from 'react-icons/bi';


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [], videos: [] } };
  }
  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user?.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  
  const postIDs = drafts.map((post) => post.id)
  const result = await axios.post(`http://localhost:3001/api/video`,{postIDs});
  if(Array.isArray(result.data))
    return { props: { drafts: drafts, videos: result.data } };
  else
    return { props: { drafts: drafts, videos: [] } };
};

type Props = {
  drafts: PostProps[];
  videos: any[];
};

const Drafts: React.FC<Props> = (props) => {
  const {data: session}= useSession();
  const {drafts, videos} = props;

  if (!session) {
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
          {drafts.map((post) => {
            const video = videos.find(tmp => tmp.postID == post.id)
            let url ="";
            if(video)
              url = video.videoURL;
            return (
              <div key={post.id} className="post">
                <Post post={post}  video={url}  />
              </div>
            )
          }
            )}
        </main>
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

export default Drafts;