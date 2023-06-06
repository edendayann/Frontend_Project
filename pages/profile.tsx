import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";

// This function retrieves the post data from the database based on the provided id.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log("serversideprops:"+params)
  return {
    props: {username: params?.userName, name: params?.name},
  };
};



// // The Post component displays the details of a blog post.
const Profile: React.FC<{username: string, name: string}> = (user) => {


  return (
    <Layout>
      <div>
        <h2>{"hi "+user.name}</h2>
        <h2>{user.username}</h2>
      </div>

      <style jsx>{`

div {
  background: #e1fbf2;
  transition: box-shadow 0.1s ease-in;
  box-shadow: 1px 1px 3px #aaa;
  padding: 1rem;
}
        .page {
          background: white;
          padding: 2rem;
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

