import React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          {/* <Img fixed={document.node.image.childImageSharp.fixed} /> */}

          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          title
          content
          id
        }
      }
    }
  }
`
