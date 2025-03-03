import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {HeroProducts} from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ZephyrTransparent from '@/app/assets/zephyr-transparent.svg'
import ZephyrGrey from '@/app/assets/zephyr-grey.svg'


const page = () => {
  return (
    <div>
        <Header />
        <HeroProducts padding={"ml-[18%]"} />
        <Product />
        <Footer />
    </div>
  )
}

const Product = ()=>{
  return (
    <div className='w-full'>
        <div className=' mt-20 flex flex-col'>
          {/* <div className='flex ml-28'> */}
            
        <h1 className='font-bold text-7xl mt-10 pl-[330px]'>Your Brand&apos;s Best Ambassador.<br/>Meet ZEPHYR</h1>
        <div className='flex gap-x-96'>
          <div className='mt-10 w-fit flex flex-col ml-[335px] gap-y-10'>
            <p className='font-medium text-2xl text-[#545454]'>ZEPHYR is an advanced robot designed to<br/>enhance customer interactions. With AI-<br/>powered precision, it welcomes guests,<br/> and provides information, ensuring a<br/>seamless and unforgettable experience<br/>every time.</p>
            <button className='rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white'>Learn More</button>
          </div>
          <Image src={ZephyrTransparent} alt='' width={400} height={716} className='-mt-20' />
        </div>
          {/* </div> */}
          <p className='font-medium pt-10 mb-20 text-3xl text-center'>With 360° perception and athletic intelligence, we solved the tough robotics<br />challenges out of the box so you can make your operations more resilient.</p>

        </div>
        <div className='w-full bg-black h-[806px]' />
        <section className='px-10 py-20 relative flex justify-center items-center flex-col'>
            <h1 className='text-5xl px-60 font-bold w-full'>Redefine door-to-door with ZEPHYR</h1>
            <p className='text-2xl text-[#545454] px-60 w-full font-medium mt-8'>ZEPHYR enhances customer experiences in stores, showrooms, and corporate spaces. As a smart, interactive ambassador, it guides, informs, and assists seamlessly, reducing wait times and human effort. ZEPHYR helps your team focus on customer engagement while ensuring smooth operations.</p>
            <div className='flex mt-20 ml-40 mx-60'>
              <div id='scroll-container' className='w-[25em] ml-20 relative'>
                <div id='link-container' className='flex flex-col gap-y-10 sticky top-32 h-fit'>
                  <Link href={'#next-level-ads'} className='text-[#240247] text-3xl font-bold'><h1>Next-Level Ads</h1></Link>
                  <Link href={'#human-attraction'} className='text-[#B4AEBA] text-3xl font-bold'><h1>Human Attraction</h1></Link>
                  <Link href={'#ad-analytics'} className='text-[#B4AEBA] text-3xl font-bold'><h1>Ad Analytics</h1></Link>
                </div>
              </div>
              <div className='flex flex-col gap-y-10'>
                <Image src={ZephyrGrey} alt='' width={938} height={555} />
                <div id='next-level-ads' className='flex flex-col gap-y-7'>
                  <h1 className='text-4xl font-bold'>Next-Level Ads</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Personalized, interactive ads powered by ZEPHYR&apos;s AI.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Seamless integration into any space.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Optimized ad placement and timing.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Boosts brand visibility and customer engagement.</li>
                  </ul>
                </div>
                <div id='human-attraction' className='flex flex-col gap-y-7'>
                  <h1 className='text-4xl font-bold'>Human Attraction</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>ZEPHYR is an advanced robot that enhances customer interactions.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Powered by AI, it greets guests and provides information.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Ensures a seamless and unforgettable experience every time.</li>
                  </ul>
                </div>
                <div id='ad-analytics' className='flex flex-col gap-y-7'>
                  <h1 className='text-4xl font-bold'>Ad Analytics</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Racks and analyzes customer interactions.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Provides real-time insights to optimize strategies.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Smart data collection and analysis for better engagement.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Measures campaign success with precision.</li>
                  </ul>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default page