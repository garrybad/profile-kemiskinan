import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google' 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

interface Props {
    title: string,
    image: string,
    description: string
}

const Card = (props: Props) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-md cursor-pointer">
        <figure>
            <Image className="w-full h-[25vh] object-cover" sizes="100vw" src={props.image} width={0} height={0} alt="Shoes"/>
            {/* <img className="w-full h-[45vh] object-cover" src={props.image} alt="Shoes" /> */}
        </figure>
        <div className="card-body bg-neutral-50">
            {/* <h2 className="card-title">{props.title}</h2> */}
            <p className={`${poppins.className} font-light text-black`}>{props.title}</p>
            <p className={`${poppins.className} font-normal text-black`}>{props.description}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
    </div>
  )
}

export default Card