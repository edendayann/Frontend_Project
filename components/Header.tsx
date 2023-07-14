import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Header: React.FC = () => {
  const [user, setUser] = useState<{ username: string, name: string, email: string,  imageURL: string}>()
  
  useEffect(() => {
    const loggedUserJSON = Cookies.get("loggedNoteappUser");
    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON))
    }
  }, [])

  const logout = () => {
    Cookies.remove("loggedNoteappUser");
    setUser(undefined);
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
  if (!user) {
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

  if (user) {
    left = (
      <div className="left">
        <Link href="/" legacyBehavior>
          <a className="feed" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href="/drafts" as={`/drafts?username=${user.username}`} legacyBehavior>
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
          {user.name} ({user.email})
        <Link href={`/profile?name=${user.name}&email=${user.email}&username=${user.username}&imageURL=${user.imageURL}`} legacyBehavior>
          <button>
            <a>My Profile</a>
          </button>
        </Link>
        <Link href="/create" legacyBehavior>
          <button>
            <a>New post</a>
          </button>
        </Link>
        <Link href={`/`} legacyBehavior>
          <button onClick={() => logout()}>
            <a>Log out</a>
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

  return (
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

  );
};

export default Header;