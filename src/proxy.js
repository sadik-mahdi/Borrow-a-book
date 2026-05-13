import { NextResponse } from 'next/server'
import { auth } from './lib/auth' 
import { headers } from 'next/headers'
 
// Named export must match the file name in Next.js 16
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.redirect(new URL('/signIn', request.nextUrl))
  }
  
  return NextResponse.next() 
}
 
export const config = {
  matcher: ['/profile', '/allBooks/:path+'],
}