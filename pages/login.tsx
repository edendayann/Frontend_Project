import axios from 'axios'
import Router from "next/router";
import { useState, useEffect, CSSProperties } from 'react'
import Layout from '../components/Layout';
import { BarLoader } from 'react-spinners';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('');  //ZOHAR
  const [showPassword, setShowPassword] = useState(false);


//   let token = null

//   const setToken = (newToken: string) => {
//     token = `Bearer ${newToken}`
//   }
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
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
    //ZOHAR 
    catch (error : any) {
      setLoading(false);
      setErrorMessage('Error: ' + error.response.data.message); 
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
        <form onSubmit={handleLogin} className="myform">
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
        input[type="text"] {
          padding: 0.5rem;
          margin: 0.5rem 0;
          display: flex;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
          justify-content: center;
          align-items: center;
        }
        input[type="password"] {
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
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
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
