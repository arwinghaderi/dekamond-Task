export const metadata = {
  title: 'پنل احراز هویت  ',
  description: 'احراز هویت با شماره موبایل و ریدایرکت به داشبورد',
  icons: {
    icon: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f512.svg',
  },
}

import { UserProvider } from '@/context/UserContext.tsx'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
