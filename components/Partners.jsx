import Image from 'next/image'
import startupnews from '@/app/assets/startupnews.svg'
import agility from '@/app/assets/agility.svg'
import infoTech from '@/app/assets/infotech.svg'
import nvidia from '@/app/assets/nvidia.svg'
import React from 'react'

const Partners = () => {
    const data = [
        {
            name:'StartupNews.fyi',
            image: startupnews,
            link: ''
        },
        {
            name:'Agility',
            image: agility,
            link: ''
        },
        {
            name:'InfoTech Smart Tranding LLC',
            image: infoTech,
            link: ''
        },
        {
            name:'Nvidia',
            image: nvidia,
            link: ''
        }
    ]
    return (
        <div className='bg-black/60 w-3/4 mx-auto h-[163px] m-10 text-white flex flex-col justify-center items-center font-bold'>
            <h1>Trusted by industry-leading organizations around the world</h1>
            <div className='flex justify-around w-2/3 pt-5 items-center'>
                {data.map((item,index)=>(
                    <Image key={index} src={item.image} alt='' width={120} height={120}  />
                ))}
            </div>
        </div>
    )
}

export default Partners