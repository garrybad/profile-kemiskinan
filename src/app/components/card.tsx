import Image from 'next/image'
import React from 'react'

interface Props {
    title: string,
    image: string,
    description: string
}

const Card = (props: Props) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-md">
        <figure>
            <Image className="w-full h-[45vh] object-cover" sizes="100vw" src={props.image} width={0} height={0} alt="Shoes"/>
            {/* <img className="w-full h-[45vh] object-cover" src={props.image} alt="Shoes" /> */}
        </figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
    </div>
  )
}

export default Card