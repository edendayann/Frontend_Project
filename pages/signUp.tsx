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

 // const titleInputRef = useRef<HTMLInputElement>(null);
 // useEffect(() => {titleInputRef.current?.focus()}, []) 

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    // const body = { fullName, email, userName, password };
    // const response = await fetch(`/api/uploadUserData`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    const userData = new FormData();
    userData.append('fullName', fullName);
    userData.append('email', email);
    userData.append('userName', userName);
    userData.append('password', password);
    
    await axios.post('http://localhost:3001/api/uploadUserData', userData, {
        headers: {
          'Content-Type' : 'multipart/form-data',
        },
    })
    setLoading(false)
    await Router.push("/");
  };

  const override: CSSProperties = {
    display: "block",
    margin: "10 auto",
    borderColor: "red",
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
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

export default NewUser;