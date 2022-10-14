import React from "react";
import styles from "./Stats.module.scss";

const Stats = ({ characters, wordsNum, text, setText }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.stat}>{wordsNum} words</span>
        <span className={styles.stat}>{characters} characters</span>
      </div>
      <div>
          <button onClick={() => navigator.clipboard.writeText(text)}>Copy</button>
        <button onClick={() => setText('')}>Reset</button>
      </div>
    </div>
  );
};

export default Stats;
