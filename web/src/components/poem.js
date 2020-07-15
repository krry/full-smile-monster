import { graphql } from 'gatsby'
import React from "react"

import styles from './poem.module.css'

export const query = graphql`
  query PoemPageQuery {
    poems: allSanityPoem {
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

const PoemsPage = props => {
  const data = props

  return (
    <ul className={styles.root}>
      {data.nodes && props.nodes.map(node => (
      <li key={node.id}>
        {props.title && (
          <h3 className={styles.title}>props.title</h3>
        )}
        {props.verse && (
          <p className={styles.verse}>props.verse</p>
        )}
      </li>
    ))}
    </ul>
  )
}

PoemsPage.propTypes = {
  title: '',
  verse: '',
}

export default PoemsPage
