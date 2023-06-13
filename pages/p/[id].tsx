import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import axios from "axios";
import { BiCameraMovie } from "react-icons/bi";

async function deletePost(id: number): Promise<void> {
  await axios.post(`http://localhost:3001/api/post/delete/${id}`);
  await Router.push("/");
}

// This function is used to publish a post by making a PUT request to the server.
async function publishPost(id: number): Promise<void> {
  await axios.post(`http://localhost:3001/api/post/publish/${id}`);
  await Router.push("/");
}

// This function retrieves the post data from the database based on the provided id.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try{
    const result = await axios.get(`http://localhost:3001/api/post/${params?.id}`);
    return {
      props: { post: result.data },
    };
  } catch(err){
    console.error(err)
  }
  return {
    props: { post: "" },
  };
  
};

type Props = {
  post: PostProps;
};
// // The Post component displays the details of a blog post.
const Post: React.FC<Props> = (props) => {
  const { post } = props;
  const [user, setUser] = useState<{token: string, username: string, name: string, email: string}>()
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON)
      setUser(JSON.parse(loggedUserJSON))
  }, [])

  const postBelongsToUser = user?.token == post.author?.token
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
        {post.video ? (
                    <a href={post.video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                      <BiCameraMovie style={{ fontSize: '30px' , color: 'black'}} />
                    </a>
                ) : "No video"}
        <p>
          {!post.published && user && postBelongsToUser && (
            <button onClick={() => publishPost(post.id)}>Publish</button>
          )}

          {user && postBelongsToUser && (
            <button onClick={() => deletePost(post.id)}>Delete</button>
          )}
        </p>
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

