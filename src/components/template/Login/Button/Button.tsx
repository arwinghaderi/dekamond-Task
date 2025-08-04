import React from 'react'
import styles from './Button.module.scss'

type Props = {
  text: string
  type?: 'button' | 'submit'
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  onClick?: () => void | Promise<void>
}

export default function Button({
  text,
  type = 'button',
  loading = false,
  disabled = false,
  icon,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled || loading}
      onClick={onClick}
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
