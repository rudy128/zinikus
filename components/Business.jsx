import Image from 'next/image'
import React from 'react'

const Business = () => {
  return (
    <>
        <div className='space-y-10 pl-24 relative py-24'>
            <h1 className='text-7xl font-bold'>Your teammate, your tool.<br />Meet Spot.</h1>
            <h4 className='font-bold text-sm'>We are dedicated to creating cutting-edge technology that pushes<br/>the boundaries of what&apos;s possible in the world of automation.<br/>Our team is composed of experts in various fields, including robotics,<br/>machine learning, computer science, and engineering.<br/>Together, we&apos;re creating a future where robots can perform<br/>complex tasks with ease, making our lives easier and more efficient.</h4>
            <button className='bg-[#0f0e1733] px-4 py-3 rounded-3xl font-bold'>Learn About Spot</button>
            <Image src='' alt='' width={827} className='absolute -bottom-[25rem] xl:-bottom-[20rem] right-5 xl:right-[15rem] bg-black' height={582} />
        </div>
        <div className='h-[990px] flex justify-start p-10 items-end bg-gradient-to-br from-[#00D9F5] via-[#4879EA] to-[#8428E0]'>
            <div className='flex gap-x-10'>
                <Image src='' alt='' width={576} className='bg-black' height={601} />
                <div className='w-2/3 text-white space-y-10'>
                    <h1 className='text-7xl font-bold'>The Future of Warehouse Automation</h1>
                    <p className='text-xl'>Use Strech to streamline case<br/>handling and trailer unloading<br/>operations. Easy to deploy and<br/>flexible, Strech keeps your<br/>operations moving.</p>
                    <button className='text-lg font-bold border rounded-full px-4 py-2'>Learn About Strech</button>
                </div>
            </div>
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