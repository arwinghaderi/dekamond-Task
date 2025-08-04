// templates/Login/Input/PhoneInput.tsx
import React, { forwardRef } from 'react'
import styles from './PhoneInput.module.scss'

interface PhoneInputProps {
  label?: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder?: string
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      label = 'شماره موبایل',
      value,
      onChange,
      error,
      placeholder = 'مثلاً 09123456789',
    },
    ref
  ) => {
    return (
      <div className={styles.inputWrapper}>
        <label className={styles.label}>{label}</label>
        <input
          ref={ref}
          type="tel"
          className={`${styles.inputField} ${error ? styles.errorBorder : ''}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={11}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    )
  }
)

export default PhoneInput
