"use client"

import React, { useRef, useState } from 'react';
import { Inter } from 'next/font/google';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { RecomendDonations } from '../model/model';
import { DATA_RECOMEN_DONATIONS } from '../dummy/dummy_data_statistik';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
})

function Donasi() {
  let dataRecomenDonations: RecomendDonations[] = DATA_RECOMEN_DONATIONS.filter(item => item.id < 5);
  let topData = DATA_RECOMEN_DONATIONS.filter(item => item.id >= 5 && item.id <= 7);
  // Function to format number with comma separator
  let formatNumberWithComma = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={`${inter.className} bg-neutral-50 p-10`}>
      <div className='mb-4'>
        <div className='text-black font-bold text-2xl text-center'>Halaman Donasi</div>
        <div className='font-normal text-base text-center sm:mx-40 text-gray-600'>Donasi ini tidak sekadar memberikan bantuan finansial, tetapi juga merupakan bentuk investasi dalam masa depan yang lebih baik. Dana yang terkumpul digunakan untuk mendukung program-program pemerintah yang dirancang untuk meningkatkan kesejahteraan, menyediakan akses ke pendidikan, layanan kesehatan, dan pelatihan keterampilan.</div>
      </div>

      <div className='sm:mx-[20vh]'>
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

        <div>
          <div className='text-black font-bold mb-2 text-lg'>Rekomendasi Donasi</div>
          <div className='sm:grid grid-cols-4 gap-4'>
            {dataRecomenDonations.map((x) => {
              return (
                <Link key={x.id} href={`/donasi/${x.id}`}>
                  <div className="card w-full h-full bg-neutral-50 rounded-lg shadow-xl cursor-pointer hover:-translate-y-1 hover:scale-103 duration-300 mb-4 sm:mb-0">
                    <figure>
                      <Image className="w-full h-[20vh] object-cover" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <div className="card-title text-gray-600">{x.company}</div>
                      <div className='text-black font-bold'>{x.title}</div>
                      <div className='text-gray-600'>Tersedia <span className='text-blue-400 font-bold'>Rp{formatNumberWithComma(x.total_donations)}</span></div>
                      <progress className="progress progress-info w-full" value={x.total_donations} max={x.max_donations}></progress>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donasi