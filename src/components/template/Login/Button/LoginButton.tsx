// templates/Login/Button/LoginButton.tsx
import React from 'react'
import styles from './LoginButton.module.scss'

interface LoginButtonProps {
  onClick: () => void
  disabled?: boolean
  children?: React.ReactNode
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  disabled = false,
  children = 'ورود',
}) => {
  return (
    <button
      className={styles.loginButton}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default LoginButton
