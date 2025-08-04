import React from 'react'
import styles from './Button.module.scss'

type Props = {
  text: string
  type?: 'button' | 'submit'
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
}

export default function Button({
  text,
  type = 'button',
  loading = false,
  disabled = false,
  icon,
}: Props) {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className={styles.loader}></span>
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{text}</span>
        </>
      )}
    </button>
  )
}
