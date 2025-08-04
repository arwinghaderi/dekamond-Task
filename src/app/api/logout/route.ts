import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const cookieStore = await cookies()
    cookieStore.set('user', '', { path: '/', expires: new Date(0) })

    return NextResponse.json({ success: true }) 
  } catch (err) {
    console.error('Logout error:', err)
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
