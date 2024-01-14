"use client"

import Image from 'next/image'
import { Inter, Jost } from 'next/font/google'
import Card from './components/card'
import styles from '../app/styles/home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { DATA_OTHER_NEWS, DATA_RECOMEN_DONATIONS } from './dummy/dummy_data_statistik'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { OtherNews } from './model/model'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
})

export default function Home() {
  let topData = DATA_RECOMEN_DONATIONS.filter(item => item.id >= 5 && item.id <= 7);
  let dataOtherNews: OtherNews[] = DATA_OTHER_NEWS.filter(item => item.id <= 3);

  // const [data, setData] = useState('')
  // const childToParent = (childData: string) => {
  //   setData(childData)
  // }

  return (
    <div className='bg-neutral-50'>
      <div className="w-full h-[85vh]">
        <Image className="w-full h-[85vh] object-cover absolute brightness-50" sizes='100vw' width={0} height={0} alt='background' src="https://images.unsplash.com/photo-1528194764949-125c374c41af?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="w-full z-[1] absolute h-[85vh] p-10 flex flex-col justify-center sm:w-full sm:flex-wrap text-center">
          <div className={`${inter.className} font-bold text-5xl text-white mb-3`}>Mengungkap Realitas, Menginspirasi Perubahan: Profil Kemiskinan Indonesia</div>
          <div className={`${inter.className} font-light text-1xl text-white`}>Profile Kemiskinan Di Indonesia adalah sumber informasi terkini dan mendalam mengenai realitas kemiskinan di Indonesia. Kami berkomitmen untuk menggambarkan secara akurat tantangan yang dihadapi oleh masyarakat yang kurang beruntung, sambil mendorong kesadaran dan aksi positif. Temukan cerita yang menginspirasi, data yang mengungkap, dan langkah-langkah nyata menuju perubahan. Bersama-sama, mari kita menjadi suara bagi mereka yang terpinggirkan dan membangun jalan menuju keadilan sosial.</div>
        </div>
      </div>
      <div className="py-4 px-20">
        <div className='mb-12'>
          <div className='flex justify-between items-center mb-2'>
            <div className={`${inter.className} font-bold text-3xl text-black`}>
              Berita Terbaru
            </div>
            <div className={`${inter.className} font-light text-lg underline text-black cursor-pointer`}>
              <Link href="/berita">Berita Lainya</Link>
            </div>
          </div>
          <div className='sm:grid grid-cols-3 gap-4'>
            {dataOtherNews.map((x) => {
              return (
                <div key={x.id} className='mb-3 sm:m-0 cursor-pointer'>
                  <div className='w-full rounded-lg h-[35vh] overflow-hidden mb-2'>
                    <Image className="w-full h-full object-cover ease-in-out duration-300 hover:scale-125" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                  </div>
                  <div className=' text-gray-400'>2 Hari yang lalu</div>
                  <div className={`text-black text-lg`}>{x.title}</div>
                  <div className={`text-red-600 text-lg`}>{x.area}</div>
                </div>
              )
            })}
          </div>
          {/* <div className="grid grid-cols-1 gap-4 sm:flex sm:justify-between">
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
          </div> */}
        </div>
        <div>
          <div className={`${inter.className} font-bold text-3xl text-black mb-2`}> Ayo Berbagi</div>
          <div className='mb-4'>
              <Swiper spaceBetween={30}
                // centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full sm:h-[80vh]">
                {topData.map((x) => {
                  return (
                    <SwiperSlide key={x.id}>
                      <Link href={`/donasi/${x.id}`}>
                        <Image className="w-full h-full object-cover cursor-pointer rounded-lg" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                      </Link>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
        </div>
      </div>
    </div>
  )
}
