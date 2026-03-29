import { NextResponse } from 'next/server'

export function middleware(request) {
  // Pass through all requests
  return NextResponse.next()
}
