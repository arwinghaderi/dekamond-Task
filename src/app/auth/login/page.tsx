'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { loginSchema } from '@/lib/validation'
import { z } from 'zod'
import Button from '@/components/template/Login/Button/Button'
import Input from '@/components/template/Login/input/Input'
import styles from './auth.module.scss'
import { FaSignInAlt } from 'react-icons/fa'

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

const onSubmit = async (data: LoginForm) => {
  setLoading(true)
  setError('')
  try {
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us')
    if (!res.ok) throw new Error('fetch error')
    const json = await res.json()
    const user = json.results[0]
    localStorage.setItem('user', JSON.stringify(user))
    router.push('/dashboard')
  } catch (err) {
    setError('خطایی رخ داد! لطفاً دوباره امتحان کنید.')
  } finally {
    setLoading(false)
  }
}


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.card}>
        <h2>ورود به حساب</h2>
        <Input
          type="text"
          placeholder="شماره موبایل مثال (09124657898)"
          {...register('phone')}
          error={errors.phone?.message}
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button
          text={loading ? 'در حال ورود...' : 'ورود'}
          icon={<FaSignInAlt />}
          type="submit"
          disabled={loading}
        />{' '}
      </form>
    </div>
  )
}
