import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {HeroProducts} from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import ZoroTransparent from '@/app/assets/zoro_transparent.svg'
import ZoroGrey from '@/app/assets/zoro-grey.svg'
import Link from 'next/link'


const page = () => {
  return (
    <div>
        <Header />
        <HeroProducts padding={"ml-[23.5%]"} />
        <Product />
        <Footer />
    </div>
  )
}

const Product = ()=>{
  return (
    <div className='w-full'>
        <div className=' mt-20 flex flex-col'>
          <div className='flex ml-28'>
            <div className='flex flex-col w-3/10 items-center'>
        <h1 className='font-bold text-7xl mt-10 pl-[330px]'>Your partner in service.<br/>Meet ZORO.</h1>
        <div className='mt-10 w-fit flex flex-col ml-2 gap-y-10'>
          <p className='font-medium text-2xl text-[#545454]'>ZORO is an intelligent catering and food<br/>delivery robot designed for seamless,<br/>efficient, and contactless service. Whether in<br/>restaurants, hotels, or corporate spaces, it<br/>delivers meals with speed, precision, and<br/>reliability, transforming the food service<br/>experience.</p>
          <button className='rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white'>Learn More</button>
          </div>
            </div>
<Image src={ZoroTransparent} alt='' width={504} height={864} />
          </div>
          <p className='font-medium mb-20 text-3xl text-center'>With 360° perception and athletic intelligence, we solved the tough robotics<br />challenges out of the box so you can make your operations more resilient.</p>

        </div>
        <div className='w-full bg-black h-[806px]' />
        <section className='px-10 py-20 relative flex justify-center items-center flex-col'>
            <h1 className='text-5xl px-60 font-bold w-full'>Redefine your day-to-day with ZORO.</h1>
            <p className='text-2xl text-[#545454] px-60 w-full font-medium mt-8'>ZORO helps your team focus on exceptional service by streamlining food delivery and catering. It ensures seamless meal distribution, optimized workflow, and enhanced customer experience while reducing wait times and effort in high-demand environments.</p>
            <div className='flex mt-20 ml-40 mx-60'>
              <div className='w-[25em] flex ml-20 flex-col gap-y-10'>
              <Link href={''} className='text-[#240247] text-3xl font-bold'><h1>Smart Catering</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-3xl font-bold'><h1>Human Interaction</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-3xl font-bold'><h1>Smart Routing</h1></Link>
              </div>
              <div className='flex flex-col gap-y-10'>
                <Image src={ZoroGrey} alt='' width={938} height={555} />
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-4xl font-bold'>Smart Catering</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>ZORO&apos;s smart catering system streamlines food service.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Ensures timely deliveries and seamless coordination.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Features autonomous navigation and intelligent scheduling.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Optimizes workflow in restaurants, hotels, and events.</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-4xl font-bold'>Human Interaction</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>ZENO elevates the guest experience with smart, interactive concierge service.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Offers personalized greetings, seamless navigation, and real-time assistance.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Combines advanced technology with a welcoming presence in hospitality.</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-4xl font-bold'>Smart Routing</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>ZORO is an intelligent catering and food delivery robot.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Provides seamless, efficient, and contactless service.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Delivers meals with speed, precision, and reliability.</li>
                  </ul>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default page