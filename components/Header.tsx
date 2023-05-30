import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { FC, useContext } from 'react';
import { ThemeContext } from "../theme-contexs";

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
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
        <Link href="/api/auth/signin" legacyBehavior>
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
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
        <Link href="/create" legacyBehavior>
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
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

let myTheme = (
  <header className="myTheme">
        <a>Light/Dark mode</a>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'} />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
    </header>
)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <nav>
        {left}
        {right}
        {myTheme}
        <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
      </nav>
      </ThemeContext.Provider>

  );
};

export default Header;