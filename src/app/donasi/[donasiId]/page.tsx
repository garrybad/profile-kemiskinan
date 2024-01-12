import React from 'react'
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
})

export default function DetailDonasi() {
    return (
        <div className={`${inter.className} bg-neutral-50 py-10 px-[35vh]`}>
            <div className='font-bold text-black text-4xl mb-4'>FUN RUN FOR HUMANITY "Charity Fun Run for Palestine"</div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-8' style={{ height: 'inherit' }}>
                    <div>
                        <Image className="w-full h-[50vh] object-cover rounded-lg" sizes="100vw" src={'https://asset.ayobantu.com/campaign/zLNcafSUtp_1701176203.jpg'} width={0} height={0} alt="Shoes" />
                    </div>
                    <div>
                        <div className='flex items-center border-b border-gray-300 py-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#000000" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className='ml-2 font-normal text-black'>Klaus Kalinski membuka donasi ini.</div>
                        </div>

                        <div className='border-b border-gray-300 py-4 font-normal text-black'>Dibuat 22 jam yang lalu • <span>Sosial</span></div>

                        <div className='py-4 font-normal text-black'>
                            <p className='mb-3'>FUN Run For Humanity merupakan sebuah event lari amal yang bermakna dengan tema "Charity Fun Run for Palestine" Event ini bertujuan untuk meningkatkan kepedulian sesama dimasyarakat melalui kegiatan kemanusiaan yang  fun dan sehat.</p>
                            <p className='mb-3'>Kami mengajak Anda untuk bergabung dalam gerakan solidaritas ini, di mana setiap langkah yang Anda ambil akan memberikan dukungan nyata untuk kemanusiaan di Palestina.</p>
                            <p className='mb-3'>Dalam Fun Run For Humanity, bukan hanya tentang berlari dan fun, tetapi juga memberikan harapan dan solidaritas kepada saudara-saudara kita di Palestina yang menghadapi tantangan yang luar biasa. Bagai tak ada habisnya, konflik dan ketidakstabilan telah membawa penderitaan yang tidak terbayangkan kepada masyarakat Palestina, kerusakan fasilitas-fasilitas penting masyarakat pun turut menjadi sasaran.</p>
                            <p className='mb-3'>Pada tahun ini, Run for Humanity dan Radeyah Run bekerjasama dengan Musawarah Peduli dengan dukungan Pemerintah Kota Tangerang Selatan dan B Clinic akan menyalurkan donasi untuk bantuan kemanusiaan Palestina.</p>
                            <p className='mb-3'>Melalui aksi ini, mari bersama-sama kita bantu ringankan kesedihan dan duka warga Palestina.</p>
                            <p className='mb-3'>Setiap langkah yang diambil memiliki arti, karena semua dana yang terkumpul dari partisipasi Anda akan didonasikan untuk bantuan kemanusiaan Palestina.</p>

                            <button className="btn btn-outline w-full text-black">Donasi</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4' style={{ height: 'inherit' }}>
                    <div className='shadow-md rounded-lg p-6 sticky top-[8vh] z-50'>
                        <div className='font-bold text-black text-lg'>Dana Terkumpul</div>
                        <div className='font-normal text-black text-xl'>Rp. 251.455.000 <span className='text-xs'>dari Rp. 300.000.000</span></div>
                        <progress className="progress progress-success w-full" value={80} max={100}></progress>
                        <div className='flex justify-around'>
                            <div className='text-center'>
                                <div className='font-bold'>1094</div>
                                <div className='text-black'>Donasi</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-bold'>136</div>
                                <div className='text-black'>hari lagi</div>
                            </div>
                        </div>

                        <button className="btn btn-outline w-full my-4 text-black">Donasi</button>

                        <div className='font-bold text-black'>Donasi terakhir</div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#000000" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>

                            <div className='ml-2'>
                                <div className='font-bold text-black'>Rp. 100.000</div>
                                <div className='flex'>
                                    <div className='text-black'>Oleh Garry</div>
                                    <div className='mx-2 text-black'>•</div>
                                    <div className='text-black'>2 hari yang lalu</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#000000" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <div className='ml-2'>
                                <div className='font-bold text-black'>Rp. 100.000</div>
                                <div className='flex'>
                                    <div className='text-black'>Oleh Garry</div>
                                    <div className='mx-2 text-black'>•</div>
                                    <div className='text-black'>2 hari yang lalu</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#000000" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <div className='ml-2'>
                                <div className='font-bold text-black'>Rp. 100.000</div>
                                <div className='flex'>
                                    <div className='text-black'>Oleh Garry</div>
                                    <div className='mx-2 text-black'>•</div>
                                    <div className='text-black'>2 hari yang lalu</div>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-outline w-full mt-4 text-black">See all</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
