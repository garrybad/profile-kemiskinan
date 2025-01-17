"use client"

import Link from 'next/link'
import React from 'react'
import { Poppins, Inter, Jost, Lacquer } from 'next/font/google' 
import Login from './login'

const lacquer = Lacquer({ 
    subsets: ['latin'],
    weight: ['400']
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
})

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-200 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className={`${poppins.className} font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/data_statistik">Data & Statistik</Link></li>
            <li><Link href="/solusi_pemerintah">Solusi Pemerintah</Link></li>
            <li><Link href="/berita">Berita</Link></li>
            <li><Link href="/donasi">Donasi</Link></li>
            <li><Link href="/galeri">Galeri</Link></li>
            <li><Link href="/tentang_kami">Tentang Kami</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-black">PKDI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`${poppins.className} menu menu-horizontal px-1 text-black`}>
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/data_statistik">Data & Statistik</Link></li>
          <li><Link href="/solusi_pemerintah">Solusi Pemerintah</Link></li>
          <li><Link href="/berita">Berita</Link></li>
          <li><Link href="/donasi">Donasi</Link></li>
          <li><Link href="/galeri">Galeri</Link></li>
          <li><Link href="/tentang_kami">Tentang Kami</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className={`${poppins.className} btn btn-sm font-normal bg-neutral-50 border-none text-black hover:bg-gray-200`} onClick={() => {if (document) {(document.getElementById('modal_login') as HTMLFormElement).showModal();}}}>Sign In</a>
        <Login />
      </div>
    </div>
  )
}

export default Navbar