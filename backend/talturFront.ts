// import React, {useRef, useState} from "react";
// import Layout from "../components/Layout";
// import Router from "next/router";
// import {useSession} from "next-auth/react";
// import axios from 'axios';

// const Draft: React.FC = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const {data: session, status} = useSession();
//   let email = session?.user?.email;
//   const [file, setFile] = useState(null);
//   const [isSubmit, setIsSubmit] = useState(false);
//   const fileInput = useRef<HTMLInputElement>(null);


//   const handleFileChange = (e: React.BaseSyntheticEvent) => {
//     const f = e.target.files[0];
//     setFile(f);
//   }

//   const handleFileReset = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     if (fileInput.current) {
//       fileInput.current.value = '';
//       setFile(null);
//     }
//   };


//   const submitData = async (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     setIsSubmit(true);
//     // Now create a new post
//     try {
//       const body = {title, content, session, email};
//       const response = await fetch(`/api/post`, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(body),
//       });
//       const uploadDate = new Date().toISOString();

//       //Extract the newly created post ID
//       const data = await response.json();
//       const postId = data.id;

//       // Upload file to Cloudinary
//       if (file) {
//         let cloudinaryURL = ''
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('upload_preset', 'video_uploader');
//         await axios.post('http://localhost:3001/api/uploadVideo', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }).then(res => {
//           cloudinaryURL = res.data.url
//         });

//         const metadata = new FormData()
//         metadata.append('url', cloudinaryURL)
//         metadata.append('post_id', postId)
//         if (session && session.user && session.user.name) {
//           metadata.append('user', session.user.name)
//         }
//         metadata.append('date', uploadDate)
//         await axios.post("http://localhost:3001/api/uploadMetaData", metadata, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }).then(res => {
//           console.log("Video uploaded to database: " + res)
//           Router.push("/drafts");
//         }).catch(err => {
//           console.log("Error uploading video to database: " + err)
//         });
//       }
//       await Router.push("/drafts");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCreateButtonClick = (e: React.SyntheticEvent) => {
//     e.preventDefault();
//     setIsSubmit(true);  // Set isSubmitting to true when the "Create" button is clicked
//     submitData(e);
//   }


//   return (
//     <Layout>
//       <div>
//         <form onSubmit={submitData}>
//           <h1>New Draft</h1>
//           <input
//             autoFocus
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//             type="text"
//             value={title}
//           />
//           <textarea
//             cols={50}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Content"
//             rows={8}
//             value={content}
//           />
//           <input
//             type="file"
//             onChange={handleFileChange}
//             ref={fileInput}
//           />
//           <button onClick={handleFileReset}>Reset File</button>
//           <button
//             disabled={!content || !title || isSubmit}  // Disable button when form fields are empty or when the form is being submitted
//             onSubmit={handleCreateButtonClick}  // Call handleCreateButtonClick when the "Create" button is clicked
//           >
//             {isSubmit ? 'Creating...' : 'Create'}
//           </button>

//           <a className="back" href="#" onClick={() => Router.push("/")}>
//             or Cancel
//           </a>
//         </form>
//       </div>
//       <style jsx>{`
//         .page {
//           background: white;
//           padding: 3rem;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         input[type="text"],
//         textarea {
//           width: 100%;
//           padding: 0.5rem;
//           margin: 0.5rem 0;
//           border-radius: 0.25rem;
//           border: 0.125rem solid rgba(0, 0, 0, 0.2);
//         }

//         input[type="submit"] {
//           background: #ececec;
//           border: 0;
//           padding: 1rem 2rem;
//         }

//         .back {
//           margin-left: 1rem;
//         }
//       `}</style>
//     </Layout>
//   );
// };

// export default Draft;