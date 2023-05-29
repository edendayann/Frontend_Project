import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
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

const Post: React.FC<{ post: PostProps, video: any }> = ({ post, video }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  //const [video, setVideo] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/api/video`, {
  //     params: {
  //       postID: post.id
  //     }
  //   })
  //     .then(response => {
  //       console.log(response.data)
  //       if (response.data !== "")
  //         setVideo(response.data.videoURL)
  //     })
  //     .catch(error => console.error('Error fetching video:', error))});

  

  // useEffect(()=>{
  //   const getVideo=async()=>{
  //     try{
  //       const result = await axios.get(`http://localhost:3001/api/video/${post.id}`)
  //       if(result.data !== "")
  //         setVideo(result.data.videoURL)
  //     }
  //     catch(e){
  //       console.error('Error fetching video:',e)
  //     }}
  //   getVideo();},[])

    return (
    <div onClick={() => Router.push(`/p/${post.id}`)}>
    {/* <div onClick={() => Router.push({
      pathname: "/p/[id]",
      query: {video: video}},
      `/p/${post.id}`
      )}> */}
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={post.content}/>
      {/* MAYA: */}
      {video ? (
        <p>
          <a href={video} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
            Watch Video
          </a>
        </p>
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