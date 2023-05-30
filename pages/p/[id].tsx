import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from '../../lib/prisma'
import { useSession } from "next-auth/react";
import axios from "axios";
import { BiCameraMovie } from "react-icons/bi";

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
  const postID = params?.id
  let video = ""
  const result = await axios.get(`http://localhost:3001/api/video/${postID}`);
  console.log("data: "+result.data)
  if(result.data!="")
    video = result.data.videoURL
  return {
    props: {post: post ?? { author: { name: "Me" }}, video},
  };
};

type Props = {
  post: PostProps;
  video: any;
};



// // The Post component displays the details of a blog post.
const Post: React.FC<Props> = (props) => {
  const {post, video} = props;

  async function deletePost(id: number): Promise<void> {
    await fetch(`/api/post/${id}`, {  
      method: "DELETE",
    });
    await Router.push("/drafts");
  }

  // This function is used to publish a post by making a PUT request to the server.
async function publishPost(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
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
  const postBelongsToUser = session?.user?.email === post.author?.email;

  // Append "(Draft)" to the title if the post is not published
  let title = post.title;
  if (!post.published) {
    title = `${title} (Draft)`;
  }
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {post?.author?.name || "Unknown author"}</p>
        <ReactMarkdown children={post.content} />
        {video != "" ? (
                <p><a href={video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                  <BiCameraMovie style={{ fontSize: '30px' , color: 'black'}} />
                </a></p>
            ) : "No video"}
        {/* Display the Publish button if the post is a draft and the user is authenticated and owns the post */}
        {!post.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(post.id)}>Publish</button>
        )}

        {/* Display the Delete button if the user is authenticated and owns the post */}
        {userHasValidSession && postBelongsToUser && (
          <button onClick={() => deletePost(post.id)}>Delete</button>
        )}
      </div>

      <style jsx>{`

div {
  background: #e1fbf2;
  transition: box-shadow 0.1s ease-in;
  box-shadow: 1px 1px 3px #aaa;
  padding: 1rem;
}
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }
        a {
          text-decoration: none;
          color: #000;
          background: transpparent;
          display: inline-block;
        }
        
        a + a {
          margin-left: 1rem;
          background: transparent;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Post;

