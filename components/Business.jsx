'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Zephyr from '@/app/assets/zephyr.svg'
import Zoro from '@/app/assets/delivery-zoro.svg'
import Zeno from '@/app/assets/zeno.svg'
import Zoro_Zini from '@/app/assets/zoro-zini.png'
import Link from 'next/link'

const Business = () => {
    const secondSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const fourthSectionRef = useRef(null);
    const fifthSectionRef = useRef(null);
  
    // Visibility states for each section
    const [isSecondVisible, setIsSecondVisible] = useState(false);
    const [isThirdVisible, setIsThirdVisible] = useState(false);
    const [isFourthVisible, setIsFourthVisible] = useState(false);
    const [isFifthVisible, setIsFifthVisible] = useState(false);

  
    // Intersection Observer logic
    useEffect(() => {
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'second-section') {
            setIsSecondVisible(entry.isIntersecting);
          } else if (entry.target.id === 'third-section') {
            setIsThirdVisible(entry.isIntersecting);
          } else if (entry.target.id === 'fourth-section') {
            setIsFourthVisible(entry.isIntersecting);
          } else if (entry.target.id === 'fifth-section') {
            setIsFifthVisible(entry.isIntersecting);
          }
        });
      };
  
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30% 0px', // Trigger when 30% of the section is visible
        threshold: 0,
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const secondSectionElement = secondSectionRef.current;
      const thirdSectionElement = thirdSectionRef.current;
      const fourthSectionElement = fourthSectionRef.current;
      const fifthSectionElement = fifthSectionRef.current;

      // Observe all sections
      if (secondSectionElement) observer.observe(secondSectionElement);
      if (thirdSectionElement) observer.observe(thirdSectionElement);
      if (fourthSectionElement) observer.observe(fourthSectionElement);
      if (fifthSectionElement) observer.observe(fifthSectionElement);
  
      return () => {
        // Cleanup observers
        if (secondSectionElement) observer.unobserve(secondSectionElement);
        if (thirdSectionElement) observer.unobserve(thirdSectionElement);
        if (fourthSectionElement) observer.unobserve(fourthSectionElement);
        if (fifthSectionElement) observer.unobserve(fifthSectionElement);
      };
    }, []);  
  return (
    <>
        <section className='flex justify-center items-center mx-60 mb-20'>
            <div className='w-1/2 space-y-10 ml-[5%] mr-16 relative py-24'>
                <h1 className='text-4xl inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s] font-bold'>Innovative Modularity</h1>
                <p className='text-xl inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]'>Based on personalized needs, our Platform is designed to support the assembly of various robotic  bodies, including delivery, reception, cleaning, and advertisements, catering to diverse customer  requirements. ZINIKUS operates a professional production facility, an advanced R&D center, and a  dedicated maintenance team, offering comprehensive modular services across three key domains:  robotic customization, system integration, and long-term support & upgrades</p>
            </div>
            <div className='w-1/2 h-1/2 mr-12'>
                <Image src={Zoro_Zini} alt='' width={750} height={750} className='inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]'/>
            </div>
        </section>
        <section id='second-section' ref={secondSectionRef} className={`flex h-[500px] mx-60 relative ${isSecondVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className='space-y-10 ml-[5%] flex flex-col relative pb-24'>
          <h1 className={`text-7xl font-bold ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.2s]' : ''}`}>ZORO</h1>
          <h4 className={`text-[#545454] text-2xl ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]' : ''}`}>ZORO is an intelligent catering and food<br />delivery robot designed to revolutionize the<br />way  meals are served. Whether in<br />restaurants, hotels, or corporate spaces.</h4>
          <Link href='/products/zoro'><button className={`border border-black px-4 py-3 rounded-3xl text-lg font-bold w-fit ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.4s]' : ''}`}>Learn About Zoro</button></Link>
        </div>
        <Image src={Zoro} alt='' width={500} height={720} className={`absolute right-20 z-10 ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]' : ''}`} />
      </section>
        <section id='third-section' ref={thirdSectionRef} className={`h-[1087px] gap-x-10 relative flex justify-start p-10 pb-0 items-center bg-gradient-to-br from-[#27272d] to-85% to-[#8428e0] ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : 'opacity-0'}`}>
            <div className='flex flex-col gap-y-40 w-1/2 ml-60'>                
                <Image src={Zephyr} alt='' width={460} height={900} className={`${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`} />
            </div>
            <div className='w-1/2 pl-32 mx-auto mr-60 self-center text-white space-y-10'>
                <h1 className={`text-6xl font-bold ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : ''}`}>ZEPHYR</h1>
                <p className={`text-2xl ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`}>Your brand deserves a representative that&apos;s smart, efficient,  and unforgettable. Meet ZEPHYR, the cutting-edge robot  designed to elevate customer interactions with seamless  service and precision.</p>
                <Link href='/products/zephyr'><button className={`text-lg font-bold border rounded-full px-4 py-2 ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.7s]' : ''}`}>Learn About ZEPHYR</button></Link>
            </div>
        </section>
        <section id='fourth-section' ref={fourthSectionRef} className={`flex h-[600px] mx-60 relative ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : 'opacity-0'}`}>
            <div className='gap-y-10 pl-10 relative flex flex-col py-12 pt-40'>
                <h1 className={`text-6xl font-bold ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : ''}`}>ZENO</h1>
                <h4 className={` text-2xl ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`}>A smarter welcome begins with ZENO.<br />Designed to  redefine hospitality, ZENO is more<br />than just a robot &hyphen; it&apos;s an intelligent, interactive<br />guide that enhances guest experiences from<br />the moment they arrive.</h4>
                <Link href='/products/zeno'><button className={`border border-black px-4 py-3 w-fit rounded-3xl font-bold ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.7s]' : ''}`}>Learn About Zeno</button></Link>
            </div>
            <Image src={Zeno} alt='' width={520} height={900} className={`absolute right-16 -top-1/4 ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`}/>
        </section>
        <section 
          id='fifth-section' 
          ref={fifthSectionRef} 
          className={`h-[704px] flex flex-col justify-center gap-y-5 px-20 pl-[46rem] bg-black text-white my-20 transition-opacity duration-1000 ${isFifthVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <h1 className={`text-7xl font-bold ${isFifthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : ''}`}>Redefining<br/>robotics: Atlas &<br/>innovation</h1>
            <p className={`${isFifthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`}>With innovation at our core, we&apos;re pushing the limits of<br/>mobility, dexterity, and intelligence with our next generation<br/>robots. Step into our lab and explore our state-of-the-art<br/>hardware and advanced control systems with Atlas.</p>
            <button className={`text-lg w-fit mt-10 font-bold border rounded-full px-4 py-2 ${isFifthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.7s]' : ''}`}>See Atlas in Action</button>
        </section>
    </>
  )
}

export default Business


        {/* <div className='px-12 space-y-5 mt-32'>
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
        </div> */}
        {/* <div className='bg-[#CDE9F4] p-10 mx-5 my-10'>
            <h1 className='text-4xl font-bold'>Autonomous Reality Capture for Industrial<br/>Facilities</h1>
            <h4 className='text-xl text-[#5F697C] font-bold'>December 11, 2024 - 11AM ET</h4>
            <p className='text-[#5F697C]'>Join experts from Boston Dynamics and Leica to learn how Spot automates<br/>routine reality capture so you can free up resources, increase frequency, and<br/>reduce costs.</p>
        </div> */}
        {/* <div className='px-20 space-y-8'>
            <div className='flex justify-between'>
                <h1 className='text-5xl font-bold'>Featured resources</h1>
                <button>View All Resources</button>
            </div>
            <div className='flex gap-x-4'>
                <div className='h-[344px] w-[406px] bg-black'></div>
                <div className='h-[344px] w-[406px] bg-black'></div>
                <div className='h-[344px] w-[406px] bg-black'></div>
            </div>
        </div> */}
        {/* <div className='h-[472px] flex flex-col justify-center gap-y-5 px-20 pl-[46rem] bg-black text-white my-20 mx-10'>
            <h4 className='text-2xl font-bold'>Start building tomorrow&apos;s<br/>solutions today.</h4>
            <p className=''>Have a question about our robots? Reach out<br/>to our team</p>
            <button className='text-lg font-bold border rounded-full px-4 py-2'>Get Started</button>
        </div> */}