import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import styles from './dashboard.module.scss'
import LogoutButton from '../../components/template/dashbord/Button/LogoutButton'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const userCookie = cookieStore?.get('user')
  console.log(userCookie)

  if (!userCookie?.value) {
    redirect('/auth/login')
  }

  const user = JSON.parse(userCookie.value)

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <LogoutButton />
        <img
          src={user.picture.large}
          alt={user.name.first}
          className={styles.avatar}
        />
        <h1 className={styles.title}>
          خوش آمدی {user.name.first} {user.name.last} 🎉
        </h1>
        <p className={styles.email}>📧 {user.email}</p>
        <p className={styles.location}>📍 {user.location?.city ?? 'ناشناس'}</p>
      </div>
    </div>
  )
}
