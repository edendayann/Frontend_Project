import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Cookies from "js-cookie";

const Profile: React.FC = () => {
  const [user, setUser] = useState<{ username: string, name: string, email: string,  imageURL: string } >({ username: '', name: '', email: '', imageURL: '' })
  const [profileImage, setProfileImage] = useState<File>(); 
  const imageInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loggedUserJSON = Cookies.get("loggedNoteappUser");
    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON))
      
    }
  }, [])

  useEffect(() => {
    Cookies.set("loggedNoteappUser", JSON.stringify(user));
  }, [user]);

  if (!user) {
    return (
      <Layout>
        <h1>My Profile</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) 
       setProfileImage(files[0]);
  };

  const handleReset = async () => {
    await axios.post(`http://localhost:3001/api/resetPicture/${user.email}`);
    setProfileImage(undefined);
    if(imageInput.current)
      imageInput.current.value = "";
    setUser((prevUser) => ({
        ...prevUser,
        imageURL: ""
      }));
  };
  
  const handleSubmit = async () => {
    if (profileImage) {
      const imageFile = new FormData();
      imageFile.append('image', profileImage, profileImage.name);
      imageFile.append('email', user.email)
      await axios.post('http://localhost:3001/api/uploadPicture',imageFile, {
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
      }).then(result => {
        console.log(result.data)
        setUser((prevUser) => ({
          ...prevUser,
          imageURL: result.data
        }));
      })
        .catch(error => console.log(error.response?.data?.message)) 
    }
  }

  return (
    <Layout>
      <div>
        <h2>Welcome {user.name}!</h2>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        {user.imageURL === "" ? "" : <img src={user.imageURL} alt="" className="image"></img>}
      </div>
      <div>
          {user.imageURL != "" ? 
            <button
                onClick={handleReset}
              >
                Add or Reset Image
            </button> :
            <div> 
              <label>Add profile image: </label>
              <input
                type="file"
                id="imageUpload"
                name="imageUpload"
                onChange={handleImage}
                ref={imageInput}
                accept="image/*"
              />
              <button
                disabled={!profileImage}  // Disable button when form fields are empty or when the form is being submitted
                onClick={handleSubmit}  // Call handleCreateButtonClick when the "Create" button is clicked
              >Upload</button>
            </div>}
      </div>
      <style jsx>{`
        div {
          background: #e1fbf2;
          transition: box-shadow 0.1s ease-in;
          box-shadow: 1px 1px 3px #aaa;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 350px;
          margin: auto;
        }
        .page {
          background: white;
          padding: 2rem;
        }
        .image{
          width: 200px; 
          height: auto;
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

export default Profile;

