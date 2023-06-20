import React, {CSSProperties, useEffect, useRef, useState} from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import axios from 'axios';
import { BarLoader } from 'react-spinners';

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<File>(); 
  const [user, setUser] = useState<{token: string, username: string, name: string, email: string, imageURL: string}>() 
  
  const videoInput = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) 
      setUser(JSON.parse(loggedUserJSON))
  }, [])
  
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    if(!user){ 
      setLoading(false)
      console.error("user is not signed in")
      return;
    }
    try {
      const metaData = new FormData();
      metaData.append('username', user.username);
      metaData.append('title', title);
      metaData.append('content', content);
      if (video) {
        let url = '';
        const videoFile = new FormData();
        videoFile.append('video', video, video.name);
        // videoFile.append('upload_preset', 'xgg6txjv');
        await axios.post('http://localhost:3001/api/upload', videoFile, {
          headers: {
            'Content-Type' : 'multipart/form-data',
          },
        }).then(result => url = result.data.url)
          .catch(error => console.log(error))
        metaData.append('videoURL', url);
        metaData.append('date', new Date().toString());
      }
      await axios.post('http://localhost:3001/api/uploadMetaData', metaData, {
          headers: {
            'Content-Type' : 'multipart/form-data',
            Authorization: user.token
          },
        })
      await Router.push(`/drafts?username=${user.username}`);
    } catch (error) { console.error(error) }
    setLoading(false)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) 
      setVideo(files[0]);
  };
  
  useEffect(() => {titleInputRef.current?.focus()}, []) 

  const override: CSSProperties = {
    display: "block",
    margin: "10 auto",
    borderColor: "red",
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            ref={titleInputRef}  
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
          <input
            type="file"
            disabled = {video ? true : false}
            id="videoUpload"
            name="videoUpload"
            onChange={handleChange}
            ref={videoInput}
            accept="video/*"
          />
          <div>
          <button
            disabled = {!video}
            onClick={() => {setVideo(undefined); if(videoInput.current) videoInput.current.value = ""}}
            >
              Reset Video
          </button>
          <button
            disabled={!content || !title || loading}  // Disable button when form fields are empty or when the form is being submitted
            onSubmit={submitData}  // Call handleCreateButtonClick when the "Create" button is clicked
          >
            <div>
              {loading? <BarLoader color="black" loading={loading} cssOverride={override} /> : 'Create'}
            </div>
          </button>
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
          </div>
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

        button + button {
          margin-left: 1rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;