import React, {CSSProperties, useEffect, useRef, useState} from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import Cookies from 'js-cookie';

const NewUser: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  //ZOHAR
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<File>(); 

  const imageInput = useRef<HTMLInputElement>(null);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); //ZOHAR

    const userData = new FormData();
    userData.append('fullname', fullname);
    userData.append('email', email);
    userData.append('username', username);
    userData.append('password', password);

    if (profileImage) {
      let url = '';
      const imageFile = new FormData();
      imageFile.append('image', profileImage, profileImage.name);
      await axios.post('http://localhost:3001/api/uploadPicture', imageFile, {
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
      }).then(result =>  url = result.data.url)
        .catch(error => console.log(error)) 
      userData.append('imageURL', url);
    }
    try{
      await axios.post('http://localhost:3001/api/signUp', userData, {
          headers: {
            'Content-Type' : 'multipart/form-data',
          },
      })
      const user = (await axios.post('http://localhost:3001/api/login',{username, password})).data
      Cookies.set('loggedNoteappUser', JSON.stringify(user)); // Store user data in a cookie
      setLoading(false)
      await Router.push("/");
    }
    catch (error: any) {
      setLoading(false);
      setErrorMessage('Error: ' + error.response?.data?.message);
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) 
      setProfileImage(files[0]);
  };
  
  const override: CSSProperties = {
    display: "block",
    margin: "10 auto",
    borderColor: "red",
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData} className="myform">
          <h1>Sign Up</h1>
            <div>
                <label>Full Name: </label>
                <input
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Full Name"
                    type="text"
                    value={fullname}
                />
            </div>
            <div>
            <label>Email: </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    value={email}
                />
            </div>
            <div>
            <label>User Name: </label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="User Name"
                    type="text"
                    value={username}
                />
            </div>
            <div>
            <label>Password: </label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                />
              <input
                    type= "checkbox"
                    onChange={(e) => setShowPassword(e.target.checked)}
                    checked={showPassword}
                />
              <label>display password</label>
            </div>
          
          <div>
          <label>Add profile image: </label>
            <input
              type="file"
              disabled = {profileImage ? true : false}
              id="imageUpload"
              name="imageUpload"
              onChange={handleImage}
              ref={imageInput}
              accept="image/*"
            />
            <button
              disabled = {!profileImage}
              onClick={() => {setProfileImage(undefined); if(imageInput.current) imageInput.current.value = ""}}
            >
              Reset Image
            </button>
        </div>
        <div>

          <button
            disabled={!fullname || !email || !username || !password || loading}  // Disable button when form fields are empty or when the form is being submitted
            onSubmit={submitData}
            type= "submit"  // Call handleCreateButtonClick when the "Create" button is clicked
          >
            <div>
              {loading? <BarLoader color="black" loading={loading} cssOverride={override} /> : 'Sign Me Up!'}
            </div>
          </button>
          <a className="back" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
          </div>
           {/* zohar */}
           {errorMessage? <a className="alert"> {errorMessage} </a> : ""} 
        </form>
      </div>
      <style jsx>{`
        .myform {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 60vh;
        }
        
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        input[type="text"], input[type="password"], input[type="email"], input[type="file"]{
          padding: 0.5rem;
          margin: 0.5rem 0;
          display: flex;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
          justify-content: center;
          align-items: center;
        }
        
        .lable{
          padding: 5px;
          margin-right: 20px;
          border: 10;
          background: black;
          justify-content: center;
          align-items: center;
        }
        
        button + button {
          margin-left: 1rem;
        }

        .back {
          margin-left: 1rem;
        }
        
        .alert {
          background-color: #f44336;
          color: white;
          padding: 5px;
          margin: 0.5rem 0;
          display: flex;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
          width: 400px;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
};

export default NewUser;
