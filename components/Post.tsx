import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { BiCameraMovie } from "react-icons/bi";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps, video: any}> = ({ post, video }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const router = useRouter();

    return (
    <div onClick={() => Router.push(`/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content}/>
      {video != "" ? (
                    <a href={video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                      <BiCameraMovie style={{ fontSize: '30px' , color: 'black'}} />
                    </a>
                ) : "No video"}
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;