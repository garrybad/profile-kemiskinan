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
                <Image className="w-full h-full object-cover mb-4 ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://images.unsplash.com/photo-1608342381036-15657da6bf58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdmVydHl8ZW58MHx8MHx8fDA%3D'} width={0} height={0} alt="Shoes" />
              </div>
              <div className={`text-black font-bold text-2xl mb-2`}>Atikoh Pastikan Ganjar-Mahfud Md Berantas Kemiskinan dan Stabilkan Harga Pangan</div>
              <div className={`text-black`}>
                &quot;Nah, apa program Ganjar-Mahfud menurunkan kemiskinan? Pertama kalau kita bicara kemiskinan, penanggulangan
                kemiskinan yang harus diselesaikan dari akar ialah pendidikan. Wajib belajar 12 tahun. Ketika ada wajib di sini, berarti
                UU harus berpihak bahwa pendidikan dari SD sampai SMA gratis,&quot; ungkap dia.
              </div>
            </Link>
          </div>
          <div className='col-span-4 pt-4 pr-4 pb-4' style={{ height: 'inherit' }}>
            <div className={`text-black font-bold h-[5%]`}>TERPOPULER</div>
            <div className='h-[95%] overflow-y-scroll'>
              {dataPopularNews.map((x) => {
                return (
                  <Link href={`/berita/1`}>
                    <div key={x.id} className='flex mb-2 cursor-pointer'>
                      <div className={`text-gray-400 font-normal`}>{x.number}</div>
                      <div className='ml-3'>
                        <div className={`text-black font-bold`}>{x.title}</div>
                        <div className={`text-red-600`}>{x.area}</div>
                      </div>
                    </div>
                  </Link>
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
                <Link href={`/berita/1`}>
                  <div key={x.id} className='mb-3 sm:m-0 cursor-pointer'>
                    <div className='w-full rounded-lg h-[20vh] sm:h-[12vh] overflow-hidden'>
                      <Image className="w-full h-full object-cover mb-2 ease-in-out duration-300 hover:scale-125" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                    </div>
                    <div className={`text-black text-sm`}>{x.title}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <div className={`text-black font-bold`}>Berita Lainya</div>
          <div className='sm:grid grid-cols-3 gap-4'>
            {dataOtherNews.map((x) => {
              return (
                <Link href={`/berita/1`}>
                  <div key={x.id} className='mb-3 sm:m-0 cursor-pointer'>
                    <div className='w-full rounded-lg h-[20vh] overflow-hidden'>
                      <Image className="w-full h-full object-cover mb-2 ease-in-out duration-300 hover:scale-125" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                    </div>
                    <div className={`text-black text-sm`}>{x.title}</div>
                    <div className={`text-red-600 text-sm`}>{x.area}</div>
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

export default Berita