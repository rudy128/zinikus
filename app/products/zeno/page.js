import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import ZenoTransparent from '@/app/assets/zeno_transparent.svg'
import Link from 'next/link'
import ZenoGrey from '@/app/assets/zeno-grey.svg'


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
        <h1 className='font-bold text-7xl 2xl:mx-12'>A Smarter Welcome,<br/>Introducing ZENO</h1>
          <div className='flex justify-evenly'>
            <div className='mt-20 w-2/3 flex flex-col gap-y-20'><p className='font-medium text-3xl'>ZENO is a smart, interactive concierge that<br />elevates the guest experience. With<br />personalized greetings, seamless navigation,<br />and real-time service assistance, ZENO blends cutting-edge technology with a warm, welcoming presence, redefining the future of hospitality.</p>
<button className='rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white'>Learn More</button>
</div>
<Image src={ZenoTransparent} alt='' width={512} height={724} />
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
            <h1 className='text-6xl font-bold'>Redefine Customer Service with ZENO</h1>
            <p className='text-3xl font-medium mt-8'>From vibrant stores to high-end showrooms and  corporate spaces, ZOD is here to let your team focus on  delivering outstanding service. As a smart, interactive  ambassador, ZOD enhances every customer experience  by guiding, informing, and assisting with ease. It  navigates seamlessly, ensuring optimal flow while  reducing wait times and human effort. With ZOD, your  team can prioritize customer engagement and  satisfaction, all while ensuring smooth, efficient  operations. Let ZOD take your brand&apos;s interaction to the  next level.</p>
            <div className='flex mt-20 gap-x-20'>
              <div className='w-1/2 flex flex-col gap-y-10'>
              <Link href={''} className='text-[#240247] text-5xl font-bold'><h1>Versatile Operation Management</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-5xl font-bold'><h1>Human Interaction</h1></Link>
              <Link href={''} className='text-[#B4AEBA] text-5xl font-bold'><h1>Multi-Lingual System</h1></Link>
              </div>
              <div className='flex flex-col gap-y-10'>
                <Image src={ZenoGrey} alt='' width={938} height={555} />
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Versatile Operation Management</h1>
                  <p className='text-2xl font-medium'>ZENO&apos;s advanced AI powers versatile operation management  with precision. It effortlessly adapts to various environments,  optimizing workflows and ensuring seamless interaction  across different tasks. With intelligent decision-making and  real-time adjustments.</p>
                </div>
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Human</h1>
                  <p className='text-2xl font-medium'>Basic Text info self-produced</p>
                </div>
                <div className='flex flex-col gap-y-7'>
                  <h1 className='text-6xl font-bold'>Multi-Lingual System</h1>
                  <p className='text-2xl font-medium'>ZENO&apos;s advanced AI powers a multi-lingual system that  ensures seamless communication with every guest, no matter  their language. It effortlessly adapts to diverse audiences,  providing personalized, interactive experiences in multiple  languages. ZENO optimizes every interaction, making it easier  to engage with people.</p>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default page