import Image from 'next/image'
import startupnews from '@/app/assets/startupnews.jpeg'
import agility from '@/app/assets/agility.jpeg'
import infoTech from '@/app/assets/infotech.jpeg'
import nvidia from '@/app/assets/nvidia.jpg'
import ostLabz from '@/app/assets/ostlabz.png'
import React from 'react'

const Partners = () => {
    const data = [
        {
            name:'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/'
        },
        {
            name:'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/'
        },
        {
            name:'InfoTech Smart Tranding LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/'
        },
        {
            name:'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/'
        },
        {
            name:'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/'
        }
    ]
    return (
        <div className='bg-black/65 w-5/6 py-6 mx-auto min-h-[163px] m-10 text-white flex flex-col justify-center items-center font-bold'>
            <h1>Trusted by industry-leading organizations around the world</h1>
            <div className='flex justify-between w-11/12 pt-5 items-center'>
                {data.map((item,index)=>(
                    <Image key={index} src={item.image} className='hover:scale-125 transform transition duration-300 ease-in-out' alt='' width={120} height={120}  />
                ))}
            </div>
        </div>
    )
}

export default Partners