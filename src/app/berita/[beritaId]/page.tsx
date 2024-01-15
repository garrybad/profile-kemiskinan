import React from 'react'
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { DATA_HEADLINES } from '@/app/dummy/dummy_data_statistik';
import { Headlines } from '@/app/model/model';
import Link from 'next/link';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
})

export default function DetailBerita() {
    let dataHeadlines: Headlines[] = DATA_HEADLINES.filter(item => item.id <= 6);

    return (
        <div className={`${inter.className} bg-neutral-50 py-10 px-[50vh]`}>
            <div className='text-center mb-4'>
                <div className='font-bold text-black text-2xl mb-2'>RI Keukeuh Pakai Standar Lama Demi Kemiskinan Ekstrem Nol Persen 2024</div>
                <div className='font-normal text-black text-base mb-2'>CNN Indonesia</div>
                <div className='font-light text-black text-sm'>Kamis, 14 Des 2023 15:57 WIB</div>
            </div>

            <div>
                <Image className="w-full h-[50vh] object-cover rounded-lg" sizes="100vw" src={'https://akcdn.detik.net.id/visual/2022/06/23/kemiskinan-di-jakarta-7_169.jpeg?w=650&q=90'} width={0} height={0} alt="Shoes" />
                <div className='font-normal text-black text-xs'>Pemerintah kukuh memakai ambang batas kemiskinan ekstrem yang lama untuk mencapai target nol persen kemiskinan ekstrem di 2024. (Foto: CNN Indonesia/Adhi Wicaksono)</div>
            </div>

            <div className='py-4 font-normal text-black'>
                <p className='mb-3'>Jakarta, CNN Indonesia - Pemerintah bakal tetap menggunakan ambang batas kemiskinan ekstrem dengan penghasilan US$1,9 atau Rp29.461 per hari demi mencapai target nol persen kemiskinan ekstrem di 2024.</p>
                <p className='mb-3'>Patokan Bank Dunia itu merupakan standar lama lantaran sudah ada ambang batas terbaru, yakni penghasilan US$2,15 per atau Rp32.035 per orang per hari.</p>
                <p className='mb-3'>Deputi Bidang Dukungan Kebijakan Pembangunan Manusia dan Pemerataan Pembangunan Sekretariat Wakil Presiden Suprayoga Hadi menyebut pihaknya dan Badan Pusat Statistik (BPS) sepakat tetap menggunakan angka US$1,9 untuk batas kemiskinan ekstrem.</p>
                <p className='mb-3'>Ia menjelaskan saat ini pun tak ada sanksi bagi negara yang tetap menggunakan ambang batas lama, US$1,9 per hari. Oleh karena itu, data angka kemiskinan ekstrem pun tetap valid.</p>
                <p className='mb-3'>"Bank Dunia, benar, mengubah jadi US$2,15. Tapi kami sepakat untuk target 0 persen ini tetap menggunakan US$1,9, sampai 2024," kata dia dalam media briefing di Kantor Setwapres, Jakarta Pusat, Kamis (14/12).</p>
                <p className='mb-3'>Berdasarkan data BPS, jumlah kemiskinan ekstrem di Indonesia mencapai 1,2 persen atau 3,1 juta orang per Maret 2023. Angka itu turun dibandingkan Maret 2022, yang mencapai 1,74 persen atau 4,79 juta orang.</p>
                <p className='mb-3'>Sementara untuk tingkat kemiskinan nasional, per Maret 2023 angkanya baru mencapai 9,36 persen. Padahal, target Rencana Pembangunan Jangka Menengah Nasional (RPJMN) 2020-2024 adalah 6,5 persen hingga 7,5 persen.</p>
                <p className='mb-3'>Budi mengatakan peristiwa ini terjadi sekitar pukul 09.10 WIB. Pengemudi motor tersebut akhirnya ditindak.</p>
                <p className='mb-3'>Suprayoga menuturkan jika pemerintah menggunakan acuan US$2,15 untuk batas kemiskinan ekstrem, maka jumlahnya bakal dua kali lipat dari yang saat ini 3,1 juta orang.</p>
                <p className='mb-3'>"Dari 1,12 persen bisa balik ke 2 persen lagi kita," ucapnya.</p>
                <p className='mb-3'>Dalam kesempatan yang sama, Ketua Policy Working Group Tim Nasional Percepatan Penanggulangan Kemiskinan (TNP2K) Elan Satriawan menjelaskan angka yang digunakan pemerintah adalah paritas daya beli atau Purchasing Power Parities (PPP) US$1,9 per hari. Artinya, angkanya tidak langsung mengacu pada nilai tukar rupiah terhadap dolar AS.</p>
                <p className='mb-3'>Tapi, kata dia, PPP sudah disesuaikan standar biaya hidup antar negara. Sehingga, US$1,9 di Indonesia akan sama dengan US$1,9 di negara-negara lain.</p>
            </div>

            <div>
                <div className='font-bold text-black text-xl mb-2'>Rekomendasi Berita</div>
                <div className='sm:grid grid-cols-3 gap-4'>
                    {dataHeadlines.map((x) => {
                        return (
                            <Link key={x.id} href={`/berita/1`}>
                                <div className='mb-3 sm:m-0 cursor-pointer'>
                                    <div className='w-full h-[20vh] overflow-hidden rounded-lg '>
                                        <Image className="w-full h-full object-cover mb-2 ease-in-out duration-300 hover:scale-125" sizes="100vw" src={x.img} width={0} height={0} alt="Shoes" />
                                    </div>
                                    <div className='text-black text-sm'>{x.title}</div>
                                    <div className='text-red-600 text-sm'>{x.area}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
