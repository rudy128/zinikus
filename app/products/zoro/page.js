import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import ZoroTransparent from '@/app/assets/zoro_transparent.svg'
import ZoroGrey from '@/app/assets/zoro-grey.svg'
import Link from 'next/link'


const page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Product />
        <Footer />
    </div>
  )
}

const Product = ()=>{
  return (
    <div className='w-full'>
        <div className='px-10 mt-20'>
        <h1 className='font-bold text-7xl 2xl:mx-12'>Your partner in service. Meet ZORO.</h1>
          <div className='flex justify-evenly'>
            <div className='mt-20 w-2/3 flex flex-col gap-y-20'><p className='font-medium text-3xl'>ZORO is an intelligent catering and food delivery robot designed for seamless, efficient, and contactless service. Whether in restaurants, hotels, or corporate spaces, it delivers meals with speed, precision, and reliability, transforming the food service experience.</p>
<button className='rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white'>Learn More</button>
</div>
<Image className='self-start' src={ZoroTransparent} alt='' width={416} height={600} />
          </div>
          <p className='font-medium pt-20 mb-20 text-3xl pl-40'>With 360° perception and athletic intelligence, we solved the tough robotics<br />challenges out of the box so you can make your operations more resilient.</p>
        </div>
        {/* <Image className='bg-black w-full' src={''} alt='' height={806} width="100%" /> */}
        <div className='w-full bg-black h-[806px]' />
        <section className='px-10 py-20'>
            <h1 className='text-6xl font-bold'>Redefine your day-to-day with ZORO.</h1>
            <p className='text-3xl font-medium mt-8'>From bustling restaurants to hotel dining and  corporate events, ZORO works so your team can  focus on delivering exceptional service. As a smart  food delivery and catering assistant, ZORO ensures  seamless meal distribution, optimized workflow, and  enhanced customer experience. It navigates  efficiently, reduces wait times, and minimizes human  effort in high-demand environments. With ZORO,  your team can prioritize guest satisfaction while  ensuring smooth and hassle-free operations.</p>
            <div className='flex mt-20 gap-x-20'>
              <div className='w-1/2 flex flex-col gap-y-10'>
              <Link href={''} className='text-[#240247] text-5xl font-bold'><h1>Smart Catering</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-5xl font-bold'><h1>Human Interaction</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-5xl font-bold'><h1>Smart Routing</h1></Link>
              </div>
              <div className='flex flex-col gap-y-10'>
                <Image src={ZoroGrey} alt='' width={938} height={555} />
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Smart Catering</h1>
                  <p className='text-2xl font-medium'>ZORO&apos;s smart catering system streamlines  food service with precision and efficiency, ensuring timely  deliveries and seamless coordination. Equipped with  autonomous navigation and intelligent scheduling, it  optimizes workflow in restaurants, hotels, and events.</p>
                </div>
                {/* <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Human</h1>
                  <p className='text-2xl font-medium'>Basic Text info self-produced</p>
                </div>
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Ad Analytics</h1>
                  <p className='text-2xl font-medium'>ZEPHYR&apos;s Ads Analytics feature tracks and analyzes customer  interactions, providing real-time insights to optimize your  advertising strategy. With smart data collection and  analysis, it helps boost engagement and measure campaign  success with precision</p>
                </div> */}
              </div>
            </div>
        </section>
    </div>
  )
}

export default page