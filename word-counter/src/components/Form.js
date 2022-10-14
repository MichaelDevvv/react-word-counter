import React, { useState, useEffect } from 'react'
import TextField from './TextField'
import styles from './Form.module.scss'
import Stats from './Stats'

const Form = () => {
  const [text, setText] = useState('')
  const [words, setWords] = useState([])
  const [wordsNum, setWordsNum] = useState(0)
  const characters = text.length


  useEffect(() => {
    if(text.length > 0) {
      setWords(text.split(' '))
      setWordsNum(words.length)
      setWords(prevState => prevState.filter(word => word != ''))
      console.log(words)
      console.log(wordsNum)
    }
  }, [text])
  
  return (
    <div>
      <Stats characters={characters} words={wordsNum} />
      <form action="#" className={styles.form}>
        <TextField setText={setText} text={text} />
      </form>
    </div>
  )
}

export default Form
