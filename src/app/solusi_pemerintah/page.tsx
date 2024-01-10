import React from 'react';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import { GovernmentSolution } from '../model/model';
import { DATA_SOLUTION } from '../dummy/dummy_data_statistik';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
})

function SolusiPemerintah() {
  let dataSolution: GovernmentSolution[] = DATA_SOLUTION;

  return (
    <div className={`${inter.className} bg-neutral-50 p-10`}>
      <div className='mb-4'>
        <div className='text-black font-bold text-2xl text-center'>Halaman Solusi Pemerintah</div>
        <div className='font-normal text-base text-center sm:mx-40 text-gray-600'>Kami mengeksplorasi langkah-langkah yang diambil oleh pemerintah untuk mengatasi kemiskinan di Indonesia dengan menyajikan informasi tentang kebijakan, program, dan inisiatif yang dirancang untuk memberdayakan masyarakat dan mengurangi kesenjangan ekonomi.</div>
      </div>

      <div className='sm:grid grid-cols-12 gap-4 sm:mx-[20vh]'>
        <div className='hidden col-span-4 sm:flex items-center'>
          <div className='w-full h-[90vh]'>
            <Image className="w-full h-full object-cover" sizes="100vw" src={'https://images.unsplash.com/photo-1612401133613-045125f0aa7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHBvdmVydHl8ZW58MHx8MHx8fDA%3D'} width={0} height={0} alt="Shoes" />
          </div>
        </div>
        <div className='col-span-8'>
          <div className='sm:grid grid-cols-2 gap-4'>
            {dataSolution.map((x) => {
              return (
                <div className='shadow-md rounded p-6 min-h-[30vh] whitespace-normal mb-4 sm:mb-0' key={x.id}>
                  <div className='text-black font-bold mb-1'>{x.title}</div>
                  <div className='text-gray-600 font-normal text-base'>{x.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolusiPemerintah