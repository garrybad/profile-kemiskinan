import Image from 'next/image'
import { Jost } from 'next/font/google' 
import Card from './components/card'
import styles from  '../app/styles/home.module.css'
import { useState } from 'react'

const jost = Jost({ 
  subsets: ['latin'],
  // weight: ['400', '700']
})

export default function Home() {

  // const [data, setData] = useState('')
  // const childToParent = (childData: string) => {
  //   setData(childData)
  // }

  return (
    <main>
      <div className="mb-4 w-full h-[85vh]">
        <Image className="w-full h-[85vh] object-cover absolute brightness-50" sizes='100vw' width={0} height={0} alt='background' src="https://images.unsplash.com/photo-1528194764949-125c374c41af?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="w-full z-[1] absolute h-[85vh] p-10 flex flex-col justify-center sm:w-full sm:flex-wrap text-center">
          <div className={`${jost.className} font-bold text-5xl text-white mb-3`}>Mengungkap Realitas, Menginspirasi Perubahan: Profil Kemiskinan Indonesia</div>
          <div className={`${jost.className} font-normal text-1xl text-white`}>Profile Kemiskinan adalah sumber informasi terkini dan mendalam mengenai realitas kemiskinan di Indonesia. Kami berkomitmen untuk menggambarkan secara akurat tantangan yang dihadapi oleh masyarakat yang kurang beruntung, sambil mendorong kesadaran dan aksi positif. Temukan cerita yang menginspirasi, data yang mengungkap, dan langkah-langkah nyata menuju perubahan. Bersama-sama, mari kita menjadi suara bagi mereka yang terpinggirkan dan membangun jalan menuju keadilan sosial.</div>
        </div>
      </div>
      <div className="pl-3.5 pr-3.5 mb-4">
        <div className={`${jost.className} font-bold text-center text-3xl mb-4`}>
          Penggalangan Dana
        </div>
        <div className="grid grid-cols-1 gap-4 sm:flex sm:justify-between">
          <Card 
            title="Terangi Hidup Mereka" 
            image="https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D" 
            description="Dengan kontribusi Anda, kita bisa memberikan cahaya bagi mereka yang tengah berjuang dalam kegelapan kemiskinan. Bergabunglah dalam program donasi ini untuk menerangi hidup mereka dengan harapan, pendidikan, dan peluang baru."
          />
          <Card 
            title="Langkah Kecil, Perubahan Besar" 
            image="https://images.unsplash.com/photo-1635929114944-8bab23b98e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
            description="Setiap langkah kecil kita dapat menjadi perubahan besar dalam kehidupan mereka yang kurang beruntung. Sumbangkan sebagian dari yang Anda miliki untuk mendukung program donasi ini dan bersama-sama kita wujudkan perubahan positif."
          />
          <Card 
            title="Berbagi Berkah, Mengubah Takdir" 
            image="https://images.unsplash.com/photo-1529520161780-2573a0926b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdmVydHl8ZW58MHx8MHx8fDA%3D"
            description="Berbagi berkah dengan mereka yang membutuhkan adalah langkah awal menuju perubahan takdir. Program donasi ini memungkinkan kita semua menjadi agen perubahan positif dalam kehidupan mereka yang terkena dampak kemiskinan"
          />
        </div>
      </div>
    </main>
  )
}
