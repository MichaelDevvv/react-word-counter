import React from 'react'
import styles from './Stats.module.scss';

const Stats = ({characters, words}) => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.stat}>{words} words</span>
        <span className={styles.stat}>{characters} characters</span>
    </div>
  )
}

export default Stats