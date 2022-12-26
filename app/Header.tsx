import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='p-5 bg-blue-500'>
        <Link href="/" className='text-blue-500 bg-white px-2 py-1 rounded-lg m-1'>
            Home
        </Link>
        <Link href="/todos" className='text-blue-500 bg-white px-2 py-1 rounded-lg m-1'>
            Todos
        </Link>
        <Link href="/search" className='text-blue-500 bg-white px-2 py-1 rounded-lg m-1'>
            Search
        </Link>
    </header>
  )
}

export default Header