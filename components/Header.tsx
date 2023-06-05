import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const [isDark, setIsDark] = useState(false);

  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const {data: session, status} = useSession();

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

  if (status === 'loading') {
    left = (
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
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        {/* <button onClick={() => setIsDark(!isDark)}>
          <a style={getStyle(isDark)}>{isDark ? "Light Mode" : "Dark Mode"}</a>
        </button> */}
        <Link href="/api/auth/signin" legacyBehavior>
          <a /*style={getStyle(isDark)}*/ data-active={isActive("/signup")}>Log in</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            background: rgba(238, 251, 245, 0.864);
            display: inline-block;
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
    right = (
      <div className="right">
        <p>
          {session.user?.name} ({session.user?.email})
        </p>
        {/* <button onClick={() => setIsDark(!isDark)}>
          <a style={getStyle(isDark)}>{isDark ? "Light Mode" : "Dark Mode"}</a>
        </button> */}
        <Link href="/create" legacyBehavior>
          <button>
            <a /*style={getStyle(isDark)}*/>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
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