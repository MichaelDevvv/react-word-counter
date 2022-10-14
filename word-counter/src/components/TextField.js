import React from 'react'
import styles from './TextField.module.scss'

const TextField = ({setText, text}) => {
  return (
    <textarea
      className={styles.textField} 
      id="textField"
      name="textField" 
      cols="30" 
      rows="10" 
      placeholder='Start typing, or paste your document here...'
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  )
}

export default TextField
