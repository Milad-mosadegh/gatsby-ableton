import React from "react";
import Layout from "../components/Layout";

import { graphql } from "gatsby";

import Card from "../components/Card";

import * as styles from "../styles/card.module.css";

export default function About({ data }) {
  const allData = data.allMarkdownRemark.nodes;
  console.log(allData);

  return (
    <Layout>
      <div style={{marginTop:"200px"}}>
        <div className="container text-center mt-5">
          <h1 className="display-4 border-bottom p-4">What is our Products...</h1>
          <div>
            <p>
              {/* <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren,
            </p>
          </div>
          <div className={styles.cardBox}>
            {allData.map((p) => (
              <Card
                title={p.frontmatter.title}
                key={p.frontmatter.id}
                btnText={p.frontmatter.btnText}
                src={p.frontmatter.src}
                content={p.html}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/aboutCards/" } }) {
      nodes {
        frontmatter {
          slug
          title
          id
          btnText
          src
        }
        html
      }
    }
  }
`;
