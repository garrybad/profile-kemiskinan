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

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
})

function Donasi() {
  let dataRecomenDonations: RecomendDonations[] = DATA_RECOMEN_DONATIONS;
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
            <SwiperSlide>
              <Image className="w-full h-full object-cover cursor-pointer" sizes="100vw" src={'https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.imgix.net%2Fimages%2Fe76793ff-aea3-11ee-9b0f-6e91684a1331_68CC4EECF878A08E.jpg%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1080&q=75'} width={0} height={0} alt="Shoes" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full h-full object-cover cursor-pointer" sizes="100vw" src={'https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.imgix.net%2Fimages%2Feca3f537-aea3-11ee-9579-9e46e8a90241_823EC7986CEC95C0.jpg%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1080&q=75'} width={0} height={0} alt="Shoes" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="w-full h-full object-cover cursor-pointer" sizes="100vw" src={'https://kitabisa.com/_next/image?url=https%3A%2F%2Fgudang-prod.imgix.net%2Fimages%2Ff1a4f367-aea3-11ee-8cad-cedc830fba85_475FE3DF5E0FE288.jpg%3Fauto%3Dcompress%2Cformat%26cs%3Dtinysrgb%26fm%3Dpjpg%26fit%3Dclip%26w%3D448%26dpr%3D2%26sharp%3D15&w=1080&q=75'} width={0} height={0} alt="Shoes" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <div className='text-black font-bold mb-2 text-lg'>Rekomendai Donasi</div>
          <div className='sm:grid grid-cols-4 gap-4'>
            {dataRecomenDonations.map((x) => {
              return (
                <div key={x.id} className="card w-full bg-base-100 shadow-xl cursor-pointer hover:-translate-y-1 hover:scale-103 duration-300 rounded-lg mb-4 sm:mb-0">
                  <figure>
                    {/* <img src="https://asset.ayobantu.com/campaign/dH2by29s3q_1689335196.jpg" alt="Shoes" /> */}
                    <Image className="w-full h-[20vh] object-cover" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                  </figure>
                  <div className="card-body bg-neutral-50">
                    {/* <h2 className="card-title">Shoes!</h2> */}
                    <div className="card-title text-gray-600">{x.company}</div>
                    <div className='text-black font-bold'>{x.title}</div>
                    <div className='text-gray-600'>Tersedia <span className='text-blue-400 font-bold'>Rp{formatNumberWithComma(x.total_donations)}</span></div>
                    <progress className="progress progress-info w-full" value={x.total_donations} max={x.max_donations}></progress>
                    {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donasi