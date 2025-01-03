import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
// import Zini from '@/app/assets/zini.svg'
// import Zeno from '@/app/assets/zeno.svg'
// import Zoro from '@/app/assets/zoro.svg'

const page = () => {
  const data = [
    {
      name: 'ZINI',
      image: '',
      dark: false
    },
    {
      name: 'ZENO',
      image: '',
      dark: true
    },
    {
      name: 'ZORO',
      image: '',
      dark: false
    }
  ]
  return (
    <div>
      <Header />
      <Hero />
      {data.map((item, index) => (
        <Products key={index} {...item} />
      ))}
      <Footer />
    </div>
  )
}

const Products = ({name, image, dark}) => {
  return (
    <div className={`h-[730px] flex ${dark==true?`flex-row-reverse bg-[#0F001E] text-white`:``}`}>
      <div className='w-1/2 flex flex-col px-20 py-24 xl:px-40 gap-y-12 justify-start'>
        <h1 className={`text-7xl font-bold ${dark==true?`text-shadow-white`:`text-shadow-black`}`}>{name}</h1>
        <p className='text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
        <button className={`rounded-3xl px-6 py-2 w-fit font-semibold drop-shadow-lg ${dark==true?`bg-white text-black`:`bg-black text-white`}`}>Learn More</button>
      </div>
      <div className='w-1/2 flex justify-center relative'>
        <div className={`w-[254px] h-[447px] rounded-full absolute self-center ${dark==true?`bg-[#d3a6ffab] blur-[150px]`:`bg-[#1e013ac2] blur-3xl`}`} />
        <Image src={image} alt='zini' className='z-10' />
      </div>
    </div>
  )

}

export default page