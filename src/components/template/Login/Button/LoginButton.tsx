import React from 'react'
import styles from './Button.module.scss'

type Props = {
  text: string
  type?: 'button' | 'submit'
}

export default function Button({ text, type = 'button' }: Props) {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  )
}
