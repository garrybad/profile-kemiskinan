import Link from 'next/link'
import React from 'react'
import { Lacquer } from 'next/font/google' 
import { Jost } from 'next/font/google' 

const lacquer = Lacquer({ 
    subsets: ['latin'],
    weight: ['400']
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700']
})

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
        <div className="flex-1">
          <a className={`${lacquer.className} btn btn-ghost text-2xl`}>Profile Kemiskinan</a>
        </div>
        <div className="flex-none">
          <ul className={`${jost.className} menu menu-horizontal px-1`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/event">Forum</Link></li>
            <li><Link href="/member">About</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar