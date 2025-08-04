import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const user = await request.json()
  const response = NextResponse.json({ success: true })

  response.cookies.set('user', JSON.stringify(user), {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  })

  return response
}
