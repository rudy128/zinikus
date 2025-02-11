import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {HeroProducts} from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import ZenoTransparent from '@/app/assets/zeno_transparent.svg'
import Link from 'next/link'
import ZenoGrey from '@/app/assets/zeno-grey.svg'


const page = () => {
  return (
    <div>
        <Header />
        <HeroProducts padding={"ml-[24%]"} />
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
        <h1 className='font-bold text-7xl mt-10 pl-[330px]'>A Smarter Welcome,<br/>Introducing ZENO</h1>
        <div className='mt-10 w-fit flex flex-col ml-40 gap-y-10'>
          <p className='font-medium text-2xl text-[#545454]'>ZENO is a smart, interactive concierge that<br />elevates the guest experience. With<br />personalized greetings, seamless navigation,<br />and real-time service assistance, ZENO blends<br/>cutting-edge technology with a warm, welcoming<br/>presence, redefining the future of hospitality.</p>
          <button className='rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white'>Learn More</button>
          </div>
            </div>
<Image src={ZenoTransparent} alt='' width={366} height={716} />
          </div>
          <p className='font-medium pt-20 mb-20 text-3xl text-center'>With 360° perception and athletic intelligence, we solved the tough robotics<br />challenges out of the box so you can make your operations more resilient.</p>

        </div>
        <div className='w-full bg-black h-[806px]' />
        <section className='px-10 py-20 relative flex justify-center items-center flex-col'>
            <h1 className='text-5xl px-60 font-bold w-full'>Redefine Customer Service with ZENO</h1>
            <p className='text-2xl text-[#545454] px-60 w-full font-medium mt-8'>ZENO is a smart, interactive ambassador designed to enhance customer experiences in stores, showrooms, and corporate spaces. It guides, informs, and assists seamlessly, reducing wait times and human effort. With ZENO, your team can focus on customer engagement while ensuring smooth, efficient operations. Take your brand&apos;s interaction to the next level with ZENO.</p>
            <div className='flex mt-20 ml-40 mx-60'>
              <div className='w-[25em] flex ml-20 flex-col gap-y-10'>
              <Link href={''} className='text-[#240247] text-3xl font-bold'><h1>Versatile Operation Management</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-3xl font-bold'><h1>Human Interaction</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-3xl font-bold'><h1>Multi-Lingual System</h1></Link>
              </div>
              <div className='flex flex-col gap-y-10'>
                <Image src={ZenoGrey} alt='' width={938} height={555} />
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-4xl font-bold'>Versatile Operation Management</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Advanced AI for precise operation management.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Adapts to various environments.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Optimizes workflows and tasks.</li>
                    <li className='text-2xl text-[#545454] mr-16 font-medium'>Real-time decisions and adjustments.</li>
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
                  <h1 className='text-4xl font-bold'>Multi-Lingual System</h1>
                  <ul className='ml-5'>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Multi-lingual AI for seamless communication.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Adapts to diverse audiences.</li>
                    <li className='text-2xl mr-16 text-[#545454] font-medium'>Personalized, optimized interactions.</li>
                  </ul>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default page