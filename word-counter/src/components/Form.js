import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import styles from "./Form.module.scss";
import Stats from "./Stats";

const Form = () => {
  const [text, setText] = useState("");
  const [wordsNum, setWordsNum] = useState(0);
  const characters = text.length;
  const words = text.split(' ')
  
  // useEffect(() => {
  //   if (text.length > 0) {
  //     setWords(text.split(" "));
  //     setWordsNum(words.length);
  //     setWords((prevState) => prevState.filter((word) => word !== ""));
  //     console.log(words);
  //     console.log(wordsNum);
  //   }
  // }, [text]);

  return (
    <form
      action="#"
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField setText={setText} text={text} />
      <Stats characters={characters} words={words.length} setText={setText} />
    </form>
  );
};

export default Form;
