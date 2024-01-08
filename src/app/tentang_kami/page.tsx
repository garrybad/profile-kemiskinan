import React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import aboutImg from '../../../public/about.jpg';
import { Member } from '../model/model';
import { DATA_MEMBER } from '../dummy/dummy_data_statistik';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '700']
})

function TentangKami() {
    let dataMember: Member[] = DATA_MEMBER;

    return (
        <div className='bg-neutral-50 py-10 px-[40vh]'>
            <div className='mb-4'>
                <div className={`${poppins.className} text-black font-bold text-3xl mb-1`}>Tentang PKDI</div>
                <div className={`${poppins.className} text-black font-normal text-4xl mb-2`}>Mengubah Persepsi, Membangun Kesempatan, Bersama-Sama Melawan Kemiskinan.</div>

                <div className='mb-2'>
                    <Image className="w-full h-[70vh] object-cover mt-4 rounded-xl" sizes="100vw" src={aboutImg} width={0} height={0} alt='Poverty' />
                </div>

                <div className={`${poppins.className} font-light text-xl text-black mb-10`}>
                    Kami adalah tim yang berkomitmen untuk menyajikan profil kemiskinan dengan akurat dan berkelanjutan
                    melalui platform ini. Melalui informasi yang kami sajikan, kami bertujuan untuk meningkatkan pemahaman
                    dan kesadaran masyarakat tentang tantangan yang dihadapi oleh mereka yang berjuang melawan kemiskinan.
                    Dengan tekad kuat, kami berupaya memberikan gambaran yang komprehensif, menggambarkan realitas
                    kehidupan, serta menginspirasi langkah-langkah nyata menuju perubahan positif.
                </div>

                <div>
                    <div className={`${poppins.className} text-black text-center font-bold text-3xl mb-4`}>Project Members</div>
                    <div className='sm:grid grid-cols-4 gap-4'>
                        {dataMember.map((x) => {
                            return (
                                <div key={x.id} className='flex flex-col justify-center items-center'>
                                    <Image className="w-[15vh] h-[15vh] object-cover rounded-full mb-2" sizes="100vw" src={x.profile} width={0} height={0} alt='Poverty' />
                                    <div className={`${poppins.className} text-black text-center`}>{x.name}</div>
                                    <div className={`${poppins.className} text-black text-center`}>{x.role}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TentangKami