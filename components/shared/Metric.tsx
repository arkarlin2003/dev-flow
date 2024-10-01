import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface MetricProps{
    imgURL:string,
    alt:string,
    value:number,
    title:string,
    href:string,
    className?:string
}

const Metric = ({imgURL,alt,value,title,href,className}:MetricProps) => {
  return (
    <Link href={href} className={`flex gap-1 items-center text-sm ${className}`}>
        <Image src={imgURL} alt={alt} width={20} height={20}/>
        <p className='dark:text-gray-400'>{value}</p>
        <p className='dark:text-gray-400'>{title}</p>
    </Link>
  )
}

export default Metric