import React, { useState } from 'react'
import TextField from './TextField'
import styles from './Form.module.scss'
import Stats from './Stats'

const Form = () => {
  const [text, setText] = useState('')
  const characters = text.length

  const specialSymbols = ['',"!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",']',"^","_","`","{","|","}","~"]

  let words = text.split(' ')
  words = words.filter(word => specialSymbols.indexOf(word) < 0);

  const wordsNum = words.length

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField setText={setText} text={text} />
      <Stats characters={characters} wordsNum={wordsNum} setText={setText} />
    </form>
  )
}

export default Form
