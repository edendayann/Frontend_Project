import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from '../../lib/prisma'
import { useSession } from "next-auth/react";
import axios from "axios";

// This function retrieves the post data from the database based on the provided id.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post ?? { author: { name: "Me" }}
  };
};

// This function is used to publish a post by making a PUT request to the server.
async function publishPost(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

// The Post component displays the details of a blog post.
const Post: React.FC<PostProps> = (props) => {
  const [isDeleted, setDeleted] = useState(false); // Maya - added in purpose of refresh after delete
  const [finished, setFinished] = useState(false);
  const [video, setVideo] = useState(null);
  useEffect(()=>{
    const getVideo=async()=>{
      try{
        const result = await axios.get(`http://localhost:3001/api/video/${props.id}`)
        if(result.data !== "")
          setVideo(result.data.videoURL)
      }
      catch(e){
        console.error('Error fetching video:',e)
      }}
    getVideo();},[])

  async function deletePost(id: number): Promise<void> {
    await fetch(`/api/post/${id}`, {  //MAYA - the function was out of the component
      method: "DELETE",
    });
    setDeleted(!isDeleted); // Maya - added in purpose of refresh after delete
    await Router.push("/drafts");
  }

  // This function is used to publish a post by making a PUT request to the server.
async function publishPost(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  setFinished(!finished);
  await Router.push("/");
}
  // useSession is a custom hook provided by the next-auth/react package
  // It returns the session data and status (loading, authenticated, or unauthenticated)
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }

  // Check if the user has a valid session
  const userHasValidSession = Boolean(session);
  // Check if the post belongs to the currently authenticated user
  const postBelongsToUser = session?.user?.email === props.author?.email;

  // Append "(Draft)" to the title if the post is not published
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown children={props.content} />
        {video && (
        <p>
          <a href={video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
            Watch Video
          </a>
        </p>
      )}
        {/* Display the Publish button if the post is a draft and the user is authenticated and owns the post */}
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(props.id)}>Publish</button>
        )}

        {/* Display the Delete button if the user is authenticated and owns the post */}
        {userHasValidSession && postBelongsToUser && (
          <button onClick={() => deletePost(props.id)}>Delete</button>
        )}
      </div>

      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Post;