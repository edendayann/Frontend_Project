import React, {useRef, useState} from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import {useSession} from "next-auth/react";
import axios from 'axios';
import { ClipLoader, PropagateLoader } from 'react-spinners';

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<File>(); 
  const { data: session, status } = useSession();  
  const fileInput = useRef<HTMLInputElement>(null);

  let email = session?.user?.email;
  
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const isVideo = video ? "true" : "";
    try {
      const body = { title, content, session, email };
      const response = await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const postData = await response.json();
      const postID = postData.id
    if (video) {
      let url = '';
      const videoFile = new FormData();
      videoFile.append('video', video, video.name);
      videoFile.append('upload_preset', 'xgg6txjv');
      await axios.post('http://localhost:3001/api/upload', videoFile, {
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
      }).then(result => 
        url = result.data.url)
      .catch(error => console.log(error))

      const videoData = new FormData();
      videoData.append('postID', postID);
      videoData.append('videoURL', url);
      videoData.append('date', new Date().toString());
      if(session && session.user && session.user.name)
        videoData.append('userName', session.user.name);
      await axios.post('http://localhost:3001/api/uploadMetaData', videoData, {
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
      })
    }
    await Router.push("/drafts");
  } catch (error) {
    console.error("errorrrr: "+error);
  }
  setLoading(false)

  };
  
  const handleUploadButtonClick =() => {
    document.getElementById('videoFile')?.click();
  }
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) 
      setVideo(files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    document.getElementById('videoFile')?.click();
    
    setLoading(false)
  };
  
  
  const Spinner = () => {  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div
            style={{
              display: 'inline-block',
              width: '50px',
              height: '50px',
              border: '3px solid #cccccc',
              borderTopColor: '#ffffff',
              borderRadius: '50%',
              animation: 'spin 1s infinite linear',
            }}
          ></div>
      </div>
    );
  };
  

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          {/* <div>
            {video ? <p>Selected Video: {video.name}</p> :
              <button disabled = {loading} onClick={handleUpload}>Upload Video</button>}
            <input type="file" id="videoFile" name="videoFile" accept="video/*" style={{ display: 'none' }} onChange={handleChange} />
          </div> */}

          <input
            type="file"
            onChange={handleChange}
            ref={fileInput}
          />
          <button
            disabled={!content || !title || loading}  // Disable button when form fields are empty or when the form is being submitted
            onSubmit={submitData}  // Call handleCreateButtonClick when the "Create" button is clicked
          >
            <div>
              {loading? <PropagateLoader color="black" loading={loading} size={15} /> : 'Create'}
            </div>
            {/* {loading ? <p><Spinner/></p> : <p>Create</p>} */}
          </button>

          {/* <input disabled={!content || !title} type="submit" value="Create" /> */}
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;
