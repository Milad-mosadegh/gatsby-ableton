import { Link, graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Login from "../../components/Login";

export default function Signin({ data }) {
  const { email,password } = data.site.siteMetadata;
  const [state,setState] = useState({email,password})
  return (
    <Layout>
      <Login
        myData={state}
        connectLink={<Link to="/form/signup">Register here!</Link>}
      />
    </Layout>
  );
}

export const query = graphql`
  query Login {
    site {
      siteMetadata {
        email
        password
      }
    }
  }
`;
