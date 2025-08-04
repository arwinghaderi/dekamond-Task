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
