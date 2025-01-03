import React from 'react'
import Hero from './Hero'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div>
        <Hero />
        <div className='w-full p-20 space-y-5 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl'>About Us</h1>
            <p>We are dedicated to creating cutting-edge technology that pushes the boundaries of what&apos;s possible in the world of automation. Our team is composed of 
experts in various fields, including robotics, machine learning, computer science, and engineering. Together, we&apos;re creating a future where robots can 
perform complex tasks with ease, making our lives easier and more efficient.<br /><br />At our company, we believe in constant innovation and collaboration. We&apos;re always looking for new ways to improve our products and services and are open 
to working with partners who share our vision. We&apos;re excited to be at the forefront of this exciting field and look forward to pushing the boundaries of what&apos;s 
possible in the world of A.I. and robotics.</p>
        </div>
        <div className=''>
            <h1 className='font-bold text-6xl pl-32'>Featured Resources</h1>
            <div className='h-[600px] w-full flex justify-evenly items-center'>
                <div>
                    <Image className='bg-black' src={""} alt='' width={600} height={423.33} />
                    <div className='flex gap-x-4'>
                        <h4 className='text-[#15B3DF]'>Blog</h4>
                        <p className='text-black'>7 min read</p>
                    </div>
                        <h1 className='text-4xl font-bold'>Embracing Change with Robotics<br />& Automation in the Workpalce</h1>
                </div>
                <div className='space-y-10'>
                    <div className='h-[150px] w-[527px] flex'>
                        <Image className='bg-black' src={""} alt='' width={300} height={150} />
                        <div>
                            <div>
                                <h4 className='text-[#15B3DF]'>Blog</h4>
                                <p className='text-black'>7 min read</p>
                            </div>
                            <h1 className='text-xl font-bold'>Making Every Step Count with Spot</h1>
                        </div>
                    </div>
                    <div className='h-[150px] w-[527px] flex'>
                        <Image className='bg-black' src={""} alt='' width={300} height={150} />
                        <div>
                            <div>
                                <h4 className='text-[#15B3DF]'>Blog</h4>
                                <p className='text-black'>7 min read</p>
                            </div>
                            <h1 className='text-xl font-bold'>Making Every Step Count with Spot</h1>
                        </div>
                    </div>
                    <div className='h-[150px] w-[527px] flex'>
                        <Image className='bg-black' src={""} alt='' width={300} height={150} />
                        <div>
                            <div>
                                <h4 className='text-[#15B3DF]'>Blog</h4>
                                <p className='text-black'>7 min read</p>
                            </div>
                            <h1 className='text-xl font-bold'>Making Every Step Count with Spot</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bgProduct px-28 pt-12 text-white font-bold h-[975px] w-full'>
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

export default ContactUs


{/* <div className='w-full py-20 flex justify-center items-center'>
<form action="" className='w-[900px] h-[768px]'>
    <h1 className='text-3xl font-semibold mb-5'>Get in Touch</h1>
    <p className='text-[15px] text-[#717581] mb-20'>Ready to help your company scale faster? Have a nice chat with us</p>
    <div className='flex w-full mb-10'>
        <div className='w-1/2 space-y-5'>
            <h4 className='font-semibold text-[16px]'>First Name</h4>
            <input type="text" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4' />
        </div>
        <div className='w-1/2 space-y-5'>
            <h4 className='font-semibold text-[16px]'>Last Name</h4>
            <input type="text" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4' />
        </div>
    </div>
    <div className='flex w-full mb-10'>
        <div className='w-1/2 space-y-5'>
            <h4 className='font-semibold text-[16px]'>Email</h4>
            <input type="email" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4'/>
        </div>
        <div className='w-1/2 space-y-5'>
            <h4 className='font-semibold text-[16px]'>Phone Number</h4>
            <input type="number" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4'/>
        </div>
    </div>
    <h4 className='font-semibold text-[16px] mb-5'>Write your message</h4>
    <textarea name="" id="" placeholder='Leave us a message' className='border rounded-xl w-full px-6 py-4' rows={6} />
</form>
</div> */}