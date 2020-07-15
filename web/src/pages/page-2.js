import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Poematrix from "../components/poematrix"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query PoemQuery {
    poems: allSanityPoem {
      totalCount
      nodes {
        _id
        title
        verse
        author {
          id
          name
        }
      }
    }
  }
`


const SecondPage = props => {

  const {data, errors} = props

  if (errors) {
    return (
      <Layout>{errors}</Layout>
    )
  }

  const poemNodes = data && data.poems

  return (
    <Layout>
      <SEO title="Poems" />
      <h1>Our Poems</h1>
      <p>We have some</p>
      {poemNodes && poemNodes.length > 0 && <Poematrix nodes={poemNodes} />}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
