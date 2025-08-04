import React, { forwardRef } from 'react'
import styles from './Input.module.scss'

type Props = {
  type: string
  placeholder: string
  error?: string
}

const Input = forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(({ type, placeholder, error, ...rest }, ref) => (
  <div className={styles.wrapper}>
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      {...rest}
      className={styles.input}
    />
    {error && <span className={styles.error}>{error}</span>}
  </div>
))

export default Input
