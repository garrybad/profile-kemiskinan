import React from 'react'
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
})

export default function DetailBerita() {
    return (
        <div className={`${inter.className} bg-neutral-50 py-10 px-[50vh]`}>
            <div className='text-center mb-4'>
                <div className='font-bold text-black text-2xl mb-2'>Pemotor Masuk Tol Jagorawi Hendak ke Puncak, Tersasar karena Ikuti Peta</div>
                <div className='font-normal text-black text-base mb-2'>Rizky Adha Mahendra</div>
                <div className='font-light text-black text-sm'>Sabtu, 13 Jan 2024 22:36 WIB</div>
            </div>

            <div>
                <Image className="w-full h-[50vh] object-cover rounded-lg" sizes="100vw" src={'https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D'} width={0} height={0} alt="Shoes" />
                <div className='font-normal text-black text-xs'>Calon presiden Taiwan William Lai dari Partai Progresif Demokratik (DPP) yang juga menjabat Wakil Presiden Taiwan saat ini, ketika berkampanye di Taoyuan pada 16 November 2023.</div>
            </div>

            <div className='py-4 font-normal text-black'>
                <p className='mb-3'>Jakarta - Video memperlihatkan motor nyelonong masuk jalan Tol Jagorawi viral di media sosial.</p>
                <p className='mb-3'>Pemotor tersebut ternyata tersasar karena mengikuti aplikasi peta.</p>
                <p className='mb-3'>"(Motor) dari arah Leuwiliang menuju ke Puncak," ujar Kepala Induk Patroli Jalan Raya (PJR) Jagorawi AKP Budi Hermawan, dalam keterangannya kepada wartawan, Sabtu (13/1/2024).</p>
                <p className='mb-3'>Pengemudi motor bernama Rendi Ardiansah (22) berboncengan dengan temannya. Rendi mengaku dirinya masuk ke tol setelah mengikuti petunjuk pada Google Maps.</p>
                <p className='mb-3'>"Menurut keterangan pengemudi mengikuti Google Maps lanjut masuk ke dalam tol melalui gerbang Bogor," jelas Budi.</p>
                <p className='mb-3'>Pengendara motor tersebut akhirnya diberhentikan oleh petugas saat melintas di Gerbang Tol (GT) Ciawi 1.</p>
                <p className='mb-3'>"Kemudian diberhentikan satpam di Gerbang Tol Ciawi 1," katanya.</p>
                <p className='mb-3'>Budi mengatakan peristiwa ini terjadi sekitar pukul 09.10 WIB. Pengemudi motor tersebut akhirnya ditindak.</p>
                <p className='mb-3'>"Tindak tilang, tahan STNK," tuturnya.</p>
                <p className='mb-3'>Diketahui, dalam rekaman video yang viral, terlihat motor melaju di lajur kiri. Peristiwa itu terjadi pada Sabtu (13/1/2024) pagi.</p>
                <p className='mb-3'>Pemotor yang berboncengan itu terekam video amatir pengemudi mobil di belakangnya. Arus lalu lintas di jalan tol terlihat lancar.</p>
            </div>

            <div>
                <div className='font-bold text-black text-xl mb-2'>Rekomendasi Berita</div>
                <div className='sm:grid grid-cols-3 gap-4'>
                    <div className='mb-3 sm:m-0 cursor-pointer'>
                        <div className='w-full h-[20vh] overflow-hidden'>
                            <Image className="w-full h-full object-cover mb-2 rounded-lg ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D'} width={0} height={0} alt="Shoes" />
                        </div>
                        <div className='text-black text-sm'>Rumah Super Mewah Ustaz Solmed, Ada Pom Bensin, Gym, dan Mini Sirkuit</div>
                        <div className='text-red-600 text-sm'>Nasional</div>
                    </div>
                    <div className='mb-3 sm:m-0 cursor-pointer'>
                        <div className='w-full h-[20vh] overflow-hidden'>
                            <Image className="w-full h-full object-cover mb-2 rounded-lg ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D'} width={0} height={0} alt="Shoes" />
                        </div>
                        <div className='text-black text-sm'>Rumah Super Mewah Ustaz Solmed, Ada Pom Bensin, Gym, dan Mini Sirkuit</div>
                        <div className='text-red-600 text-sm'>Nasional</div>
                    </div>
                    <div className='mb-3 sm:m-0 cursor-pointer'>
                        <div className='w-full h-[20vh] overflow-hidden'>
                            <Image className="w-full h-full object-cover mb-2 rounded-lg ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D'} width={0} height={0} alt="Shoes" />
                        </div>
                        <div className='text-black text-sm'>Rumah Super Mewah Ustaz Solmed, Ada Pom Bensin, Gym, dan Mini Sirkuit</div>
                        <div className='text-red-600 text-sm'>Nasional</div>
                    </div>
                    <div className='mb-3 sm:m-0 cursor-pointer'>
                        <div className='w-full h-[20vh] overflow-hidden'>
                            <Image className="w-full h-full object-cover mb-2 rounded-lg ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D'} width={0} height={0} alt="Shoes" />
                        </div>
                        <div className='text-black text-sm'>Rumah Super Mewah Ustaz Solmed, Ada Pom Bensin, Gym, dan Mini Sirkuit</div>
                        <div className='text-red-600 text-sm'>Nasional</div>
                    </div>
                    <div className='mb-3 sm:m-0 cursor-pointer'>
                        <div className='w-full h-[20vh] overflow-hidden'>
                            <Image className="w-full h-full object-cover mb-2 rounded-lg ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D'} width={0} height={0} alt="Shoes" />
                        </div>
                        <div className='text-black text-sm'>Rumah Super Mewah Ustaz Solmed, Ada Pom Bensin, Gym, dan Mini Sirkuit</div>
                        <div className='text-red-600 text-sm'>Nasional</div>
                    </div>
                    <div className='mb-3 sm:m-0 cursor-pointer'>
                        <div className='w-full h-[20vh] overflow-hidden'>
                            <Image className="w-full h-full object-cover mb-2 rounded-lg ease-in-out duration-300 hover:scale-125" sizes="100vw" src={'https://images.unsplash.com/photo-1494832944834-a08818c634b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHx8MA%3D%3D'} width={0} height={0} alt="Shoes" />
                        </div>
                        <div className='text-black text-sm'>Rumah Super Mewah Ustaz Solmed, Ada Pom Bensin, Gym, dan Mini Sirkuit</div>
                        <div className='text-red-600 text-sm'>Nasional</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
