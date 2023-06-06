import axios from 'axios'
import Router from "next/router";
import { useState, useEffect, CSSProperties } from 'react'
import Layout from '../components/Layout';
import { BarLoader } from 'react-spinners';

const App = () => {
    const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const [userName, setUserName] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
//   let token = null

//   const setToken = (newToken: string) => {
//     token = `Bearer ${newToken}`
//   }
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      //console.log("user is logged in:  " +user.name)
      //setToken(user.token)
    }
  }, [])


  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const user = (await axios.post('http://localhost:3001/api/login',{userName, password})).data
      //setToken(user.token)
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user)) 
      //TODO- check if needed
      setUser(user)
    //   setUsername('')
    //   setPassword('')
      setLoading(false)
      await Router.push("/");
    } 
    catch (exception) {
        //we dont lieke this error
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
  }

  const override: CSSProperties = {
    display: "block",
    margin: "10 auto",
    borderColor: "red",
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
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
            disabled={ !userName || !password || loading}  // Disable button when form fields are empty or when the form is being submitted
            onSubmit={handleLogin}  // Call handleCreateButtonClick when the "Create" button is clicked
          >
            <div>
              {loading? <BarLoader color="black" loading={loading} cssOverride={override} /> : 'Log Me In!'}
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

export default App