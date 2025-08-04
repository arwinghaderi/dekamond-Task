'use client'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

import { User } from '@/types/user'

type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
