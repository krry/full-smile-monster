import React from 'react'
import Poem from './poem'

import styles from './poematrix.module.css'

function Poematrix (props) {
  return (
    <div className={styles.root}>
      {props.name && (
        <h2 className={styles.title}>
          props.name
        </h2>
      )}
      <ul className={styles.list}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <Poem {...node} />
            </li>
          )) }
      </ul>
    </div>
  )
}

Poematrix.defaultProps = {
  name: '',
  nodes: []
}

export default Poematrix
