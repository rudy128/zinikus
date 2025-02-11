import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ZephyrTransparent from '@/app/assets/zephyr-transparent.svg'
import ZephyrGrey from '@/app/assets/zephyr-grey.svg'


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
        <h1 className='font-bold text-7xl 2xl:mx-12'>Your Brand&apos;s Best Ambassador.<br/>Meet ZEPHYR</h1>
          <div className='flex justify-evenly'>
            <div className='mt-20 w-2/3 flex flex-col gap-y-20'><p className='font-medium text-3xl'>ZEPHYR is an advanced robot designed to<br/>enhance customer interactions. With<br/>AI-powered precision, it welcomes guests,<br/>and provides information, ensuring a<br/>seamless and unforgettable experience<br/>every time.</p>
<button className='rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white'>Learn More</button>
</div>
<Image src={ZephyrTransparent} alt='' width={512} height={724} />
          </div>
          <p className='font-medium pt-40 mb-20 text-3xl pl-40'>With 360° perception and athletic intelligence, we solved the tough robotics<br />challenges out of the box so you can make your operations more resilient.</p>
        </div>
        {/* <Image className='bg-black w-full' src={''} alt='' height={806} width="100%" /> */}
        <div className='w-full bg-black h-[806px]' />
        {/* <div className='px-20 my-20'>
          <h1 className='font-bold text-6xl'>Solutions for the real world</h1>
          <p className='text-[#5F697C] text-xl'>Give your team the toold to make work better: find solutions to keep your operations<br />productive and keep your perople safe.</p>
          <div className='flex gap-x-10 justify-center'>
          <div className='w-[440.33px] h-[380px] bg-[#0f001e] flex flex-col justify-evenly items-center text-white'>
            <Image src={''} alt='' width={375} className='bg-[#5F697C]' height={230} />
            <div className='w-full px-8 space-y-2'>
            <h3 className='font-bold text-4xl'>Inspection</h3>
            <button className='font-bold'>Learn More</button>
            </div>
          </div>
          <div className='w-[440.33px] h-[380px] bg-[#0f001e] flex flex-col justify-evenly items-center text-white'>
            <Image src={''} alt='' width={375} className='bg-[#5F697C]' height={230} />
            <div className='w-full px-8 space-y-2'>
            <h3 className='font-bold text-4xl'>Inspection</h3>
            <button className='font-bold'>Learn More</button>
            </div>
          </div>
          <div className='w-[440.33px] h-[380px] bg-[#0f001e] flex flex-col justify-evenly items-center text-white'>
            <Image src={''} alt='' width={375} className='bg-[#5F697C]' height={230} />
            <div className='w-full px-8 space-y-2'>
            <h3 className='font-bold text-4xl'>Inspection</h3>
            <button className='font-bold'>Learn More</button>
            </div>
          </div>
          </div>
        </div>
        <div className='bgProduct text-white font-bold w-full px-28 pt-12 h-[642px]'>
          <div className='flex justify-between items-center w-full'>
          <h1 className='text-4xl font-bold'>Featured Resources</h1>
          <button>View All Resources</button>
          </div>
          <div className='flex justify-center items-center w-full gap-x-10 pt-20'>
            <div className='w-[405.33px] h-[343.82px]'>
              <Image className='bg-black' src={""} alt='' width={405} height={230} />
              <div className='w-full flex gap-x-4 py-2'>
                <p className='text-[#8428E0] font-bold text-xs'>Blog</p>
                <p className='text-[#98999D] font-bold text-xs'>7 min read</p>
              </div>
              <h4 className='font-bold text-[#24.9px]'>Making Every step Count with<br />Spot</h4>
            </div>
            <div className='w-[405.33px] h-[343.82px]'>
              <Image className='bg-black' src={""} alt='' width={405} height={230} />
              <div className='w-full flex gap-x-4 py-2'>
                <p className='text-[#8428E0] font-bold text-xs'>Blog</p>
                <p className='text-[#98999D] font-bold text-xs'>7 min read</p>
              </div>
              <h4 className='font-bold text-[#24.9px]'>Making Every step Count with<br />Spot</h4>
            </div>
            <div className='w-[405.33px] h-[343.82px]'>
              <Image className='bg-black' src={""} alt='' width={405} height={230} />
              <div className='w-full flex gap-x-4 py-2'>
                <p className='text-[#8428E0] font-bold text-xs'>Blog</p>
                <p className='text-[#98999D] font-bold text-xs'>7 min read</p>
              </div>
              <h4 className='font-bold text-[#24.9px]'>Making Every step Count with<br />Spot</h4>
            </div>
          </div>
        </div> */}
        <section className='px-10 py-20'>
            <h1 className='text-6xl font-bold'>Redefine door-to-door with ZEPHYR</h1>
            <p className='text-3xl font-medium mt-8'>From vibrant stores to high-end showrooms and  corporate spaces, ZEPHYR is here to let your team focus on  delivering outstanding service. As a smart, interactive  ambassador, ZEPHYR enhances every customer experience  by guiding, informing, and assisting with ease. It  navigates seamlessly, ensuring optimal flow while  reducing wait times and human effort. With ZEPHYR, your  team can prioritize customer engagement and  satisfaction, all while ensuring smooth, efficient  operations. Let ZEPHYR take your brand&apos;s interaction to the  next level.</p>
            <div className='flex mt-20 gap-x-20'>
              <div className='w-1/2 flex flex-col gap-y-10'>
              <Link href={''} className='text-[#240247] text-5xl font-bold'><h1>Next-Level</h1><h1>Ads</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-5xl font-bold'><h1>Human</h1><h1>Attractions</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-5xl font-bold'><h1>Ad</h1><h1>Analytics</h1></Link>
              </div>
              <div className='flex flex-col gap-y-10'>
                <Image src={ZephyrGrey} alt='' width={938} height={555} />
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Next-Level Ads</h1>
                  <p className='text-2xl font-medium'>ZEPHYR&apos;s advanced AI delivers personalized, interactive  advertisements with precision. It seamlessly integrates into  any space, optimizing ad placement and timing to boost  brand visibility. Enhance customer engagement and drive  impact effortlessly with ZEPHYR.</p>
                </div>
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Human</h1>
                  <p className='text-2xl font-medium'>Basic Text info self-produced</p>
                </div>
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Ad Analytics</h1>
                  <p className='text-2xl font-medium'>ZEPHYR&apos;s Ads Analytics feature tracks and analyzes customer  interactions, providing real-time insights to optimize your  advertising strategy. With smart data collection and  analysis, it helps boost engagement and measure campaign  success with precision</p>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default page