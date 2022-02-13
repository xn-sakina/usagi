import React from 'react'
import styles from './index.module.scss'

export const Title: React.FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.first}>🐰 USAGI</div>
      <div className={styles.desc}>avatar image cropper</div>
    </div>
  )
}
