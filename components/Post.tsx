import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { BiCameraMovie } from "react-icons/bi";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
    token: string;
    imageURL: string;
  } | null;
  content: string;
  published: boolean;
  video: string | undefined;
};

const Post: React.FC<{ post: PostProps, video: any}> = ({ post, video }) => {
  const authorName = post.author ? post.author.name : "Unknown author";

    return (
    <div onClick={() => Router.push(`/p/${post.id}`)}>
      <div>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content}/>
      {video ? (
                    <a href={video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                      <BiCameraMovie style={{ fontSize: '30px' , color: 'black'}} />
                    </a>
                ) : "No video"}
      {post.author?.imageURL && post.author?.imageURL != "" ? (<img src={post.author?.imageURL} alt="cannot to load photo" className="image"></img>) : ""}
      </div>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
        .image{
          width: auto; 
          height: 150px;
          margin-left: auto;
          float: right;
          margin-top: -8rem;
        }
        .a {
          text-decoration: none;
          color: #000;
          background: transpparent;
          display: inline-block;
        }
        a + a {
          margin-left: 1rem;
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default Post;