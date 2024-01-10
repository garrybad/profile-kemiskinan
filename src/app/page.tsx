import Image from 'next/image'
import { Jost } from 'next/font/google' 
import { Poppins } from 'next/font/google' 
import Card from './components/card'
import styles from  '../app/styles/home.module.css'
import { useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

export default function Home() {

  // const [data, setData] = useState('')
  // const childToParent = (childData: string) => {
  //   setData(childData)
  // }

  return (
    <main>
      <div className='bg-neutral-50'>
        <div className="w-full h-[85vh]">
          <Image className="w-full h-[85vh] object-cover absolute brightness-50" sizes='100vw' width={0} height={0} alt='background' src="https://images.unsplash.com/photo-1528194764949-125c374c41af?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="w-full z-[1] absolute h-[85vh] p-10 flex flex-col justify-center sm:w-full sm:flex-wrap text-center">
            <div className={`${poppins.className} font-bold text-5xl text-white mb-3`}>Mengungkap Realitas, Menginspirasi Perubahan: Profil Kemiskinan Indonesia</div>
            <div className={`${poppins.className} font-light text-1xl text-white`}>Profile Kemiskinan adalah sumber informasi terkini dan mendalam mengenai realitas kemiskinan di Indonesia. Kami berkomitmen untuk menggambarkan secara akurat tantangan yang dihadapi oleh masyarakat yang kurang beruntung, sambil mendorong kesadaran dan aksi positif. Temukan cerita yang menginspirasi, data yang mengungkap, dan langkah-langkah nyata menuju perubahan. Bersama-sama, mari kita menjadi suara bagi mereka yang terpinggirkan dan membangun jalan menuju keadilan sosial.</div>
          </div>
        </div>
        <div className="py-4 px-20">
          <div className='mb-4'>
            <div className='flex justify-between items-center mb-4'>
              <div className={`${poppins.className} font-bold text-3xl text-black`}>
                Berita Terbaru
              </div>
              <div className={`${poppins.className} font-light text-lg underline text-black cursor-pointer`}>
                Berita Lainnya
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:flex sm:justify-between">
              <Card 
                title="2 hari lalu" 
                image="https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D" 
                description="Angka Kemiskinan Meningkat: Tantangan Besar Bagi Pemerintah dalam Mengatasi Ketidaksetaraan Ekonomi"
              />
              <Card 
                title="4 hari lalu" 
                image="https://images.unsplash.com/photo-1635929114944-8bab23b98e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
                description="Pendidikan dan Kemiskinan: Bagaimana Akses Pendidikan Berkualitas Dapat Menjadi Kunci Keluar dari Lingkaran Kemiskinan"
              />
              <Card 
                title="7 hari lalu" 
                image="https://images.unsplash.com/photo-1529520161780-2573a0926b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdmVydHl8ZW58MHx8MHx8fDA%3D"
                description="Program Bantuan Sosial dan Efektivitasnya: Menilai Upaya Pemerintah dalam Mengentaskan Kemiskinan"
              />
            </div>
          </div>
          <div>
            <div className={`${poppins.className} font-bold text-3xl text-black`}>
              Ayo Berbagi
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
