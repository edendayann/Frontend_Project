import React, { useEffect, useState } from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import axios from "axios";

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

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const [video, setVideo] = useState("");
  //const isVideo = true;

  useEffect(() => {
    try{
      axios.get(`http://localhost:3001/api/video`,  {
        params: {postID: post.id}
      }).then(res => {
          console.log("res.data")
          setVideo(res.data)
      })
    } catch {(() => console.log("error"))}
  });


  return (
    // <div onClick={() => Router.push({
    //   pathname: "/p/[id]",
    //   query: {video: video}},
    //   `/p/${post.id}`
    //   )}>
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>

      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content} />
      {video ? <small>video!</small> : ""}
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
