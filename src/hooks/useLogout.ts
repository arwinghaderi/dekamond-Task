'use client'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext.tsx'
import { useState } from 'react'

export const useLogout = () => {
  const router = useRouter()
  const { setUser } = useUser()
  const [loading, setLoading] = useState(false)

  const logout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/logout', { method: 'GET' })
      if (res.ok) {
        setUser(null)
        window.location.href = '/auth/login'
        router.refresh() 
      } else {
        console.error('Logout failed:', res.status)
      }
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      setLoading(false)
    }
  }

  return { logout, loading }
}
