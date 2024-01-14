import React from 'react'
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import { DATA_RECOMEN_DONATIONS } from '@/app/dummy/dummy_data_statistik';
import { RecomendDonations } from '@/app/model/model';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
})

export default function DetailDonasi({ params }: { params: { donasiId: string } }) {
    // let rawDesc = 'FUN Run For Humanity merupakan sebuah event lari amal yang bermakna dengan tema "Charity Fun Run for Palestine" Event ini bertujuan untuk meningkatkan kepedulian sesama dimasyarakat melalui kegiatan kemanusiaan yang  fun dan sehat. Kami mengajak Anda untuk bergabung dalam gerakan solidaritas ini, di mana setiap langkah yang Anda ambil akan memberikan dukungan nyata untuk kemanusiaan di Palestina. Dalam Fun Run For Humanity, bukan hanya tentang berlari dan fun, tetapi juga memberikan harapan dan solidaritas kepada saudara-saudara kita di Palestina yang menghadapi tantangan yang luar biasa. Bagai tak ada habisnya, konflik dan ketidakstabilan telah membawa penderitaan yang tidak terbayangkan kepada masyarakat Palestina, kerusakan fasilitas-fasilitas penting masyarakat pun turut menjadi sasaran. Pada tahun ini, Run for Humanity dan Radeyah Run bekerjasama dengan Musawarah Peduli dengan dukungan Pemerintah Kota Tangerang Selatan dan B Clinic akan menyalurkan donasi untuk bantuan kemanusiaan Palestina. Melalui aksi ini, mari bersama-sama kita bantu ringankan kesedihan dan duka warga Palestina. Setiap langkah yang diambil memiliki arti, karena semua dana yang terkumpul dari partisipasi Anda akan didonasikan untuk bantuan kemanusiaan Palestina.'
    // let descSplit = rawDesc.split('.').filter(item => item.trim() !== '').map(item => item + '.');
    // console.log('tess', params.donasiId);

    let formatNumberWithComma = (number: number): string => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    let formatDesc = (data: string) => {
        return data.split('.').filter(item => item.trim() !== '').map(item => item + '.');
    }

    let rawData = DATA_RECOMEN_DONATIONS.filter(item => item.id == Number(params.donasiId));
    let dataDonations:RecomendDonations = Object.assign({}, ...rawData);
    // console.log(dataDonations);

    return (
        <div className={`${inter.className} bg-neutral-50 py-10 px-[35vh]`}>
            <div className='font-bold text-black text-4xl mb-4'>{dataDonations.title}</div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-8' style={{ height: 'inherit' }}>
                    <div>
                        <Image className="w-full h-[50vh] object-cover rounded-lg" sizes="100vw" src={dataDonations.img_detail} width={0} height={0} alt="Shoes" />
                    </div>
                    <div>
                        <div className='flex items-center border-b border-gray-300 py-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#000000" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div className='ml-2 font-normal text-black'>{dataDonations.company} membuka donasi ini.</div>
                        </div>

                        <div className='border-b border-gray-300 py-4 font-normal text-black'>Dibuat {dataDonations.created} • <span>Sosial</span></div>

                        <div className='py-4 font-normal text-black'>
                            {formatDesc(dataDonations.description).map((x) => {
                                return (
                                    <p className='mb-3'>{x}</p>
                                )
                            })}
                            {/* {descSplit.map((x) => {
                                return (
                                    <p className='mb-3'>{x}</p>
                                )
                            })} */}
                            <button className="btn btn-outline w-full text-black">Donasi</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-4' style={{ height: 'inherit' }}>
                    <div className='shadow-md rounded-lg p-6 sticky top-[8vh] z-50'>
                        <div className='font-bold text-black text-lg'>Dana Terkumpul</div>
                        <div className='font-normal text-black text-xl'>{formatNumberWithComma(dataDonations.total_donations)} <span className='text-xs'>dari {formatNumberWithComma(dataDonations.max_donations)} </span></div>
                        <progress className="progress progress-success w-full" value={dataDonations.total_donations} max={dataDonations.max_donations}></progress>
                        <div className='flex justify-around'>
                            <div className='text-center'>
                                <div className='font-bold'>{dataDonations.people_donations}</div>
                                <div className='text-black'>Donasi</div>
                            </div>
                            <div className='text-center'>
                                <div className='font-bold'>{dataDonations.remaining_time_donations}</div>
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
                                    <div className='text-black'>Oleh Orang Baik</div>
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
                                    <div className='text-black'>Oleh Orang Baik</div>
                                    <div className='mx-2 text-black'>•</div>
                                    <div className='text-black'>3 hari yang lalu</div>
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
                                    <div className='text-black'>Oleh Orang Baik</div>
                                    <div className='mx-2 text-black'>•</div>
                                    <div className='text-black'>4 hari yang lalu</div>
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
