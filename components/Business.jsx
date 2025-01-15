import Image from 'next/image'
import React from 'react'
import Zini from '@/app/assets/zini.svg'
import Zoro from '@/app/assets/zoro.svg'
import Zeno from '@/app/assets/zeno.svg'


const Business = () => {
  return (
    <>
        <div className='space-y-10 pl-24 relative py-24'>
            <h1 className='text-7xl font-bold'>ZENO</h1>
            <h4 className='font-bold text-2xl'>Introducing ZENO, the robot revolutionizing<br/>customer engagement! With ZENO, gone are<br/>the days of lackluster lobby experiences.<br/>Say hello to a robotic marvel designed to<br/>dazzle your clientele while streamlining<br/>operations.</h4>
            <button className='border border-black px-4 py-3 rounded-3xl text-lg font-bold'>Learn About Zeno</button>
        </div>
        <div className='h-[1425px] relative flex justify-start p-10 pb-0 items-center bg-gradient-to-br from-[#27272d] to-85% to-[#8428e0]'>
            <Image src={Zeno} alt='' width={500} height={720} className='absolute z-10 bottom-3/4 left-[60%]' />
            <div className='flex gap-x-10 w-full'>
                <div className='flex flex-col gap-y-40 ml-[8%]'>                
                <Image src={Zoro} alt='' width={460} height={900} />
                </div>
                <div className='w-1/2 mx-auto self-center text-white space-y-10'>
                    <h1 className='text-6xl font-bold'>ZORO</h1>
                    <p className='text-2xl'>ZORO isn&apos;t just a telepresence; it&apos;s an<br/>embodiment of progress, sophistication, and<br/>streamlined operations. Elevate your<br/>workplace experience, captivate visitors,<br/>and embark on a journey of innovation with<br/>ZORO by your side.</p>
                    <button className='text-lg font-bold border rounded-full px-4 py-2'>Learn About ZORO</button>
                </div>
            </div>
            <Image src={Zini} alt='' width={520} height={900} className='absolute -bottom-full xl:-bottom-[20rem] right-5 xl:right-[15rem]' />
        </div>
        <div className='space-y-10 ml-[10%] relative py-12'>
            <h1 className='text-6xl my-auto font-bold'>The Future of<br/>Warehouse</h1>
            <h4 className='font-bold text-2xl'>ZINI isn&apos;t just a receptionist; it&apos;s an embodiment of<br/>progress, sophistication, and streamlined<br/>operations. Elevate your workplace experience,<br/>captivate visitors, and embark on a journey of<br/>innovation with ZINI by your side.</h4>
            <button className='bg-[#0f0e1733] px-4 py-3 rounded-3xl font-bold'>Learn About Zini</button>
        </div>
        <div className='px-12 space-y-5 mt-32'>
            <h1 className='text-7xl font-bold'>Solutions for the real world</h1>
            <p className='text-[#5F697C] text-xl'>Give your team the tools to make work better: find solutions to keep your operations<br/>productive and keep your people safe.</p>
            <div className='space-y-4'>
                <div className='flex gap-x-4'>
                    <div className='h-[344px] w-[406px] bg-black'></div>
                    <div className='h-[344px] w-[406px] bg-black'></div>
                    <div className='h-[344px] w-[406px] bg-black'></div>
                </div>
                <div className='flex gap-x-4'>
                    <div className='h-[344px] w-[406px] bg-black'></div>
                    <div className='h-[344px] w-[406px] bg-black'></div>
                    <div className='h-[344px] w-[406px] bg-black'></div>
                </div>
            </div>
        </div>
        <div className='bg-[#CDE9F4] p-10 mx-5 my-10'>
            <h1 className='text-4xl font-bold'>Autonomous Reality Capture for Industrial<br/>Facilities</h1>
            <h4 className='text-xl text-[#5F697C] font-bold'>December 11, 2024 - 11AM ET</h4>
            <p className='text-[#5F697C]'>Join experts from Boston Dynamics and Leica to learn how Spot automates<br/>routine reality capture so you can free up resources, increase frequency, and<br/>reduce costs.</p>
        </div>
        <div className='h-[704px] flex flex-col justify-center gap-y-5 px-20 pl-[46rem] bg-black text-white my-20'>
            <h1 className='text-7xl font-bold'>Redefining<br/>robotics: Atlas &<br/>innovation</h1>
            <p className=''>With innovation at our core, we&apos;re pushing the limits of<br/>mobility, dexterity, and intelligence with our next generation<br/>robots. Step into our lab and explore our state-of-the-art<br/>hardware and advanced control systems with Atlas.</p>
            <button className='text-lg font-bold border rounded-full px-4 py-2'>See Atlas in Action</button>
        </div>
        <div className='px-20 space-y-8'>
            <div className='flex justify-between'>
                <h1 className='text-5xl font-bold'>Featured resources</h1>
                <button>View All Resources</button>
            </div>
            <div className='flex gap-x-4'>
                <div className='h-[344px] w-[406px] bg-black'></div>
                <div className='h-[344px] w-[406px] bg-black'></div>
                <div className='h-[344px] w-[406px] bg-black'></div>
            </div>
        </div>
        <div className='h-[472px] flex flex-col justify-center gap-y-5 px-20 pl-[46rem] bg-black text-white my-20 mx-10'>
            <h4 className='text-2xl font-bold'>Start building tomorrow&apos;s<br/>solutions today.</h4>
            <p className=''>Have a question about our robots? Reach out<br/>to our team</p>
            <button className='text-lg font-bold border rounded-full px-4 py-2'>Get Started</button>
        </div>
    </>
  )
}

export default Business