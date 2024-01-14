"use client"
import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Dialog from '../components/dialog';
import { Data6 } from '../model/model';
import { DATA_DUMMY6 } from '../dummy/dummy_data_statistik';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
})

function Galeri() {
    let dataGallery: Data6[] = DATA_DUMMY6;

    return (
        <div className='bg-neutral-50 p-10'>
            <div className='mb-4'>
                <div className={`${inter.className} text-black font-bold text-2xl text-center`}>Halaman Galeri</div>
                <div className={`${inter.className} font-normal text-base text-center sm:mx-40 text-black`}>Galeri ini bukan sekadar kumpulan gambar, melainkan jendela empati untuk melihat dunia dari perspektif yang mungkin jarang terjamah. Melalui setiap gambar, kami berusaha menyampaikan pesan tentang keberanian, tekad, dan keindahan yang dapat ditemukan di tengah-tengah kesulitan.</div>
            </div>

            <div className='sm:grid grid-cols-4 gap-4'>
                {dataGallery.map((x) => {
                    return (
                        <div key={x.id} className='mb-4 sm:m-0'>
                            <Image className="w-full h-[30vh] object-cover cursor-zoom-in rounded-lg" onClick={() => {
                                if (document) {
                                    (document.getElementById(x.imgId) as HTMLFormElement).showModal();
                                }
                            }} sizes="100vw" src={x.src} width={0} height={0} alt="Shoes" />
                            <Dialog id={x.imgId} img={x.src} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Galeri