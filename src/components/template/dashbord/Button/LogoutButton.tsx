'use client'
import { useLogout } from '@/hooks/useLogout'
import Button from '@/components/template/Login/Button/Button'

export default function LogoutButton() {
  const { logout, loading } = useLogout() 

  return (
    <Button
      text="خروج از حساب"
      onClick={logout}
      loading={loading}
      icon={<i className="ri-logout-box-line" />} 
    />
  )
}
