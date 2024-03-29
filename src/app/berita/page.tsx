import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { Headlines, OtherNews, PopularNews } from '../model/model';
import { DATA_HEADLINES, DATA_NEWS_POPULAR, DATA_OTHER_NEWS } from '../dummy/dummy_data_statistik';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
})

function Berita() {
  let dataPopularNews: PopularNews[] = DATA_NEWS_POPULAR;
  let dataHeadlines: Headlines[] = DATA_HEADLINES;
  let dataOtherNews: OtherNews[] = DATA_OTHER_NEWS;

  return (
    <div className={`${inter.className} bg-neutral-50 p-10`}>
      <div className='mb-4'>
        <div className={`text-black font-bold text-2xl text-center`}>Halaman Berita</div>
        <div className={`font-normal text-base text-center sm:mx-40 text-black`}>Dari cerita inspiratif hingga analisis mendalam, kami menghadirkan berita terkini untuk memberi Anda gambaran yang akurat tentang tantangan dan perjuangan yang dihadapi oleh individu dan komunitas yang terpinggirkan.</div>
      </div>

      <div className='sm:mx-[40vh]'>
        <div className='grid grid-cols-12 gap-4 h-[75vh] border-solid border border-gray-300 mb-4 rounded-lg'>
          <div className='col-span-8 pt-4 pl-4 pb-4 cursor-pointer' style={{ height: 'inherit' }}>
            <Link href={`/berita/1`}>
              <div className='w-full h-[50vh] rounded-lg overflow-hidden'>
                <Image className="w-full h-full object-cover mb-4 ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://akcdn.detik.net.id/visual/2022/06/23/kemiskinan-di-jakarta-7_169.jpeg?w=650&q=90'} width={0} height={0} alt="Shoes" />
              </div>
              <div className={`text-black font-bold text-2xl mb-2`}>RI Keukeuh Pakai Standar Lama Demi Kemiskinan Ekstrem Nol Persen 2024</div>
              <div className={`text-black`}>
              Jakarta, CNN Indonesia - Pemerintah bakal tetap menggunakan ambang batas kemiskinan ekstrem dengan penghasilan US$1,9 atau Rp29.461 per hari demi mencapai target nol persen kemiskinan ekstrem di 2024.
              Patokan Bank Dunia itu merupakan standar lama lantaran sudah ada ambang batas terbaru, yakni penghasilan US$2,15 per atau Rp32.035 per orang per hari.
              </div>
            </Link>
          </div>
          <div className='col-span-4 pt-4 pr-4 pb-4' style={{ height: 'inherit' }}>
            <div className={`text-black font-bold h-[5%]`}>TERPOPULER</div>
            <div className='h-[95%] overflow-y-scroll'>
              {dataPopularNews.map((x) => {
                return (
                  <div key={x.id}>
                    <Link href={`/berita/1`}>
                      <div className='flex mb-2 cursor-pointer'>
                        <div className={`text-gray-400 font-normal`}>{x.number}</div>
                        <div className='ml-3'>
                          <div className={`text-black font-bold`}>{x.title}</div>
                          <div className={`text-red-600`}>{x.area}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className='mb-4'>
          <div className={`text-black font-bold`}>Berita Utama</div>
          <div className='sm:grid grid-cols-6 gap-4'>
            {dataHeadlines.map((x) => {
              return (
                <div key={x.id}>
                  <Link href={`/berita/1`}>
                    <div key={x.id} className='mb-3 sm:m-0 cursor-pointer'>
                      <div className='w-full rounded-lg h-[20vh] sm:h-[12vh] overflow-hidden'>
                        <Image className="w-full h-full object-cover mb-2 ease-in-out duration-300 hover:scale-125" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                      </div>
                      <div className={`text-black text-sm`}>{x.title}</div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <div className={`text-black font-bold`}>Berita Lainya</div>
          <div className='sm:grid grid-cols-3 gap-4'>
            {dataOtherNews.map((x) => {
              return (
                <div key={x.id}>
                  <Link href={`/berita/1`}>
                    <div className='mb-3 sm:m-0 cursor-pointer'>
                      <div className='w-full rounded-lg h-[20vh] overflow-hidden'>
                        <Image className="w-full h-full object-cover mb-2 ease-in-out duration-300 hover:scale-125" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                      </div>
                      <div className={`text-black text-sm`}>{x.title}</div>
                      <div className={`text-red-600 text-sm`}>{x.area}</div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Berita