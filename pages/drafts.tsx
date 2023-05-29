import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { useSession, getSession } from "next-auth/react";
import prisma from '../lib/prisma'
import axios from "axios";


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
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
  return {
    props: { drafts },
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  const {data: session}= useSession();
  const {drafts} = props;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      for (const post of drafts) {
        try {
          const result = await axios.get(`http://localhost:3001/api/video/${post.id}`);
          if (result.data !== "") 
            setVideo(result.data.videoURL);
          else 
            setVideo(null)
        } catch (e) {
          console.error(`Error fetching video for post ${post.id}:`, e);
        }
      }
    };
    fetchVideos();
  }, [drafts]);

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
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post}  video={video}  />
              {video ? (
                <p>
                  <a href={video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                    Watch Video
                  </a>
                </p>
              ) : ""}
            </div>
          ))}
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