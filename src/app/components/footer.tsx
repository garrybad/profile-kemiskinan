import React from 'react'
import Image from 'next/image'
import { Jost } from 'next/font/google' 
import { Poppins } from 'next/font/google' 

import sponsor1 from '../../../public/sponsor1.png'
import sponsor2 from '../../../public/sponsor2.png'
import sponsor3 from '../../../public/sponsor3.png'

import social1 from '../../../public/fb.svg'
import social2 from '../../../public/ig.svg'
import social3 from '../../../public/yt.svg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral-200 text-base-content">
      <div className="grid sm:flex sm:gap-4">
        {/* <div className="w-full mb-5 sm:m-0">
          <div className={`${jost.className} font-bold text-3xl text-center mb-2.5`}>Official Sponsor</div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <Image className="w-[80%]" alt='sponsor 1' src={sponsor1} sizes='100vw' width={0} height={0} />
            <Image className="w-[80%]" alt='sponsor 2' src={sponsor2} sizes='100vw' width={0} height={0} />
            <Image className="w-[80%]" alt='sponsor 3' src={sponsor3} sizes='100vw' width={0} height={0} />
          </div>
        </div> */}
        <div className="w-full mb-5 sm:m-0">
          <div className={`${poppins.className} font-bold text-3xl text-center mb-2.5 text-black`}>Contact Us</div>
          <div className={`${poppins.className} font-normal text-sm text-black`}>
            Kami selalu tertarik untuk mendengar cerita anda serta menerima tanggapan anda. Jika anda memiliki penawaran kerjasama atau perlu sesuatu dari komunitas kami, dipersilakan untuk menghubungi kami melalui <span className="text-[#25D366] cursor-pointer underline">whatsapp</span>, terima kasih.
          </div>
        </div>
        <div className="w-full mb-5 sm:m-0">
          <div className={`${poppins.className} font-bold text-3xl text-center mb-2.5 text-black`}>Social</div>
          <div className="flex justify-center gap-4 items-center">
            <Image className="cursor-pointer brightness-75 hover:brightness-100" alt='sponsor 1' src={social1} sizes='100vw' width={0} height={0} />
            <Image className="cursor-pointer brightness-75 hover:brightness-100" alt='sponsor 1' src={social2} sizes='100vw' width={0} height={0} />
            <Image className="cursor-pointer brightness-75 hover:brightness-100" alt='sponsor 1' src={social3} sizes='100vw' width={0} height={0} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer