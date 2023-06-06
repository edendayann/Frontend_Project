import React, { createContext, useEffect, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
//import { ThemeContext } from './ThemeContext';

export const getStyle = (isDark: boolean) => 
  isDark ?
    {
    background: 'black',
    color: 'white',
    } : {
    background: 'rgba(238, 251, 245, 0.864)',
    color: '#000',
    }

const Header: React.FC = () => {
 // const [isDark, setIsDark] = useState(false);
  const [session, setSession] = useState<{token: string, username: string, name: string}>()
// const {data: session, status} = useSession();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      setSession(JSON.parse(loggedUserJSON))
      if(session)
        console.log("user is logged11 in:  " +session.name)
    }
  }, [])

  const logout = () => {
    window.localStorage.removeItem('loggedNoteappUser');
    setSession(undefined);
  }

  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  let left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="feed" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: gray;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: black;
          font-weight: bold;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;
  if (!session) {
    right = (
      <div className="right">
         <Link href="/signUp" legacyBehavior>
          <button>
          <a data-active={isActive("/signup")}>Sign Up</a>
          </button>
        </Link>

        <Link href="/login" legacyBehavior>
          <button>
          <a data-active={isActive("/signup")}>Log in</a>
          </button>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            background: rgba(238, 251, 245, 0.864);
            display: inline-block;
          }

          p {
            background: transparent;
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          a + a {
            margin-left: 1rem;
            background: transparent;
          }

          .right {
            background: transparent;
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 5px;
          }

          .right a:hover {
            background-color: #e1fbf2;
            box-shadow: 1px 1px 3px #aaa;
          }

          button {
            background: transparent;
            border: none;
          }
        `}</style>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/" legacyBehavior>
          <a className="feed" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href="/drafts" legacyBehavior>
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: gray;
            display: inline-block;
          }

          .left a[data-active="true"] {
            color: black;
            font-weight: bold;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );

    const objectParams = {
      param1: session.name,
      param2: session.username,
    };
    
    const queryString = new URLSearchParams(objectParams).toString();
    console.log(queryString)
    right = (
      <div className="right">
        <b>
        {/*TODO eden email*/}
          {session.name} 
        </b>
        <Link href={`/profile/:${session.name}`} legacyBehavior>
            <a>My Profile</a>
        </Link>
        {/* <button onClick={() => setIsDark(!isDark)}>
          <a style={getStyle(isDark)}>{isDark ? "Light Mode" : "Dark Mode"}</a>
        </button> */}
        <Link href="/create" legacyBehavior>
          <button>
            <a /*style={getStyle(isDark)}*/>New post</a>
          </button>
        </Link>
        <button onClick={() => logout()}>
          <a /*style={getStyle(isDark)}*/>Log out</a>
        </button>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            background: rgba(238, 251, 245, 0.864);
            display: inline-block;
          }

          p {
            background: transparent;
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          a + a {
            margin-left: 1rem;
            background: transparent;
          }

          .right {
            background: transparent;
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 5px;
          }

          .right a:hover {
            background-color: #e1fbf2;
            box-shadow: 1px 1px 3px #aaa;
          }

          button {
            background: transparent;
            border: none;
          }
        `}</style>
      </div>
    );
  }

  return (
    // <ThemeContext.Provider value={isDark}>
      <nav>
        {left}
        {right}
        <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
      </nav>
    // </ThemeContext.Provider>

  );
};

export default Header;