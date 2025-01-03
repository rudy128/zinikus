import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import ZiniTransparent from '@/app/assets/zini-transparent.svg'

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
        <h1 className='font-bold text-7xl 2xl:mx-12'>Your teammate, your tool.<br />Meet Spot</h1>
          <div className='flex justify-evenly'>
            <div className='mt-20 w-2/3 flex flex-col gap-y-20'><p className='font-medium text-3xl'>We are dedicated to creating cutting-edge technology that pushes 
the boundaries of what&apos;s possible in the world of automation.
Our team is composed of experts in various fields.</p>
<button className='rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white'>Learn More</button>
</div>
<Image src={ZiniTransparent} alt='' width={416} height={600} />
          </div>
          <p className='font-medium pt-40 mb-20 text-3xl pl-40'>With 360° perception and athletic intelligence, we solved the tough robotics<br />challenges out of the box so you can make your operations more resilient.</p>
        </div>
        {/* <Image className='bg-black w-full' src={''} alt='' height={806} width="100%" /> */}
        <div className='w-full bg-black h-[806px]' />
        <div className='px-20 my-20'>
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
        </div>
    </div>
  )
}

export default page