import React, {CSSProperties, useEffect, useRef, useState} from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import {useSession} from "next-auth/react";
import axios from 'axios';
import { BarLoader, ClipLoader, PropagateLoader } from 'react-spinners';


const NewUser: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  //ZOHAR

 // const titleInputRef = useRef<HTMLInputElement>(null);
 // useEffect(() => {titleInputRef.current?.focus()}, []) 

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); //ZOHAR

    const userData = new FormData();
    userData.append('fullName', fullName);
    userData.append('email', email);
    userData.append('userName', userName);
    userData.append('password', password);
    
    //ZOHAR
    try{
      await axios.post('http://localhost:3001/api/signUp', userData, {
          headers: {
            'Content-Type' : 'multipart/form-data',
          },
      })
      setLoading(false)
      await Router.push("/");
    }
    catch (error: any) {
      setLoading(false);
      (error.response && error.response.status === 402) ?
        setErrorMessage('email is not in a proper format  or already exist') :
      (error.response && error.response.status === 403) ?
        setErrorMessage('Email already exists. Please choose a different email.') :
      (error.response && error.response.status === 400) ?
        setErrorMessage('UserName already exists. Please choose a different user name.') :
      console.error('Error:', error);
    }
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
                    //ref={titleInputRef}  
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    type="text"
                    value={fullName}
                />
            </div>
            <div>
            <label>Email: </label>
                <input
                  //  ref={titleInputRef}  
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="text"
                    value={email}
                />
            </div>
            <div>
            <label>User Name: </label>
                <input
                  //  ref={titleInputRef}  
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="User Name"
                    type="text"
                    value={userName}
                />
            </div>
            <div>
            <label>Password: </label>
                <input
                  //  ref={titleInputRef}  
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="text"
                    value={password}
                />
            </div>
          <div>
          <button
            disabled={!fullName || !email || !userName || !password || loading}  // Disable button when form fields are empty or when the form is being submitted
            onSubmit={submitData}  // Call handleCreateButtonClick when the "Create" button is clicked
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

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }
        
          input[type="text"] {
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
