'use client'
import Link from 'next/link'
import styles from './page.module.scss'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaTelegramPlane, FaLinkedin } from 'react-icons/fa'

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <div className={styles.overlay}>
        <section className={styles.card}>
          <div className={styles.brand}>
            <h1 className={styles.brandName}>دکاموند</h1>
          </div>

          <p className={styles.subtitle}>
            این صفحه به منظور ارائه‌ی تسک مصاحبه‌ای شرکت دکاموند طراحی شده است و
            هدف آن نمایش توانایی بنده در پیاده‌سازی رابط کاربری حرفه‌ای با
            استفاده از Next.js می‌باشد.
          </p>

          <div className={styles.buttons}>
            <Link href="/auth/login" className={styles.primaryBtn}>
              ورود به سیستم
            </Link>
          </div>

          <footer className={styles.signature}>
            طراحی و توسعه توسط <strong>آروین قادری</strong> با ❤️
            <div className={styles.socialLinks}>
              <a
                href="mailto:arwinghaderi81@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
              <a
                href="https://github.com/arwinghaderi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://t.me/arvin81"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://www.linkedin.com/in/arvinghaderi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </footer>
        </section>
      </div>
    </main>
  )
}
