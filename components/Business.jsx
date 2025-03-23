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
        <section className='flex justify-center items-center mx-4 sm:mx-8 lg:mx-60 mb-20'>
            <div className='w-full sm:w-1/2 space-y-10 ml-0 sm:ml-[5%] relative py-24'>
                <h1 className='text-3xl sm:text-4xl inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s] font-bold'>
                    Innovative Modularity
                </h1>
                <p className='text-lg sm:text-xl inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]'>
                    Based on personalized needs, our Platform is designed to support the assembly of various robotic bodies, including delivery, reception, cleaning, and advertisements, catering to diverse customer requirements.
                    ZINIKUS operates a professional production facility, an advanced R&D center, and a dedicated maintenance team, offering comprehensive modular services across three key domains: robotic customization, system integration, and long-term support & upgrades
                </p>
            </div>
            <div className='w-full sm:w-1/2 h-1/2 mr-12'>
                <Image 
                    src={Zoro_Zini} 
                    alt='' 
                    width={750} 
                    height={750} 
                    className='inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' 
                />
            </div>
        </section>

        {/* Second Section */}
        <section id='second-section' ref={secondSectionRef} className={`flex h-auto sm:h-[500px] mx-4 sm:mx-8 lg:mx-60 relative ${isSecondVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className='space-y-10 ml-0 sm:ml-[5%] flex flex-col relative pb-24'>
                <h1 className={`text-4xl sm:text-7xl font-bold ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.2s]' : ''}`}>
                    ZORO
                </h1>
                <h4 className={`text-[#545454] text-lg sm:text-2xl ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]' : ''}`}>
                    ZORO is an intelligent catering and food delivery robot designed to revolutionize the way meals are served. Whether in restaurants, hotels, or corporate spaces.
                </h4>
                <Link href='/products/zoro'>
                    <button className={`border border-black px-4 py-3 rounded-3xl text-lg font-bold w-fit ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.4s]' : ''}`}>
                        Learn About Zoro
                    </button>
                </Link>
            </div>
            <Image 
                src={Zoro} 
                alt='' 
                width={500} 
                height={720} 
                className={`absolute right-20 z-10 ${isSecondVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]' : ''}`} 
            />
        </section>

        {/* Third Section */}
        <section id='third-section' ref={thirdSectionRef} className={`h-auto sm:h-[1087px] gap-x-10 relative flex justify-start p-10 pb-0 items-center bg-gradient-to-br from-[#27272d] to-85% to-[#8428e0] ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : 'opacity-0'}`}>
            <div className='flex flex-col gap-y-40 w-full sm:w-1/2 ml-0 sm:ml-32'>
                <Image 
                    src={Zephyr} 
                    alt='' 
                    width={460} 
                    height={900} 
                    className={`${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`} 
                />
            </div>
            <div className='w-full sm:w-1/2 pl-0 sm:pl-32 mx-auto mr-0 sm:mr-60 self-center text-white space-y-10'>
                <h1 className={`text-4xl sm:text-6xl font-bold ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : ''}`}>
                    ZEPHYR
                </h1>
                <p className={`text-xl sm:text-2xl ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`}>
                    Your brand deserves a representative that&apos;s smart, efficient, and unforgettable. Meet ZEPHYR, the cutting-edge robot designed to elevate customer interactions with seamless service and precision.
                </p>
                <Link href='/products/zephyr'>
                    <button className={`text-lg font-bold border rounded-full px-4 py-2 ${isThirdVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.7s]' : ''}`}>
                        Learn About ZEPHYR
                    </button>
                </Link>
            </div>
        </section>

        {/* Fourth Section */}
        <section id='fourth-section' ref={fourthSectionRef} className={`flex h-auto sm:h-[600px] mx-4 sm:mx-8 lg:mx-60 relative ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : 'opacity-0'}`}>
            <div className='gap-y-10 pl-0 sm:pl-10 relative flex flex-col py-12 pt-40'>
                <h1 className={`text-4xl sm:text-6xl font-bold ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]' : ''}`}>
                    ZENO
                </h1>
                <h4 className={`text-lg sm:text-2xl ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`}>
                    A smarter welcome begins with ZENO. Designed to redefine hospitality, ZENO is more than just a robot — it&apos;s an intelligent, interactive guide that enhances guest experiences from the moment they arrive.
                </h4>
                <Link href='/products/zeno'>
                    <button className={`border border-black px-4 py-3 w-fit rounded-3xl font-bold ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.7s]' : ''}`}>
                        Learn About Zeno
                    </button>
                </Link>
            </div>
            <Image 
                src={Zeno} 
                alt='' 
                width={520} 
                height={900} 
                className={`absolute right-16 -top-1/4 ${isFourthVisible ? 'inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]' : ''}`} 
            />
        </section>

        {/* Fifth Section */}
        <section id='fifth-section' ref={fifthSectionRef} className={`flex justify-center items-center ${isFifthVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`}>
            <div className='space-y-10 max-w-5xl mx-4 sm:mx-8 lg:mx-60'>
                <h1 className='text-4xl sm:text-5xl font-bold'>
                    Revolutionizing industries with advanced robotic solutions.
                </h1>
                <p className='text-lg sm:text-xl'>
                    ZINIKUS offers customizable robotic solutions designed to address a wide range of industry needs.
                </p>
            </div>
        </section>
    </>
  );
}

export default Business;
