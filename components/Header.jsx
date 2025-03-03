'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '@/app/assets/logo.svg';
import Link from 'next/link';
import ChevronRight from '@/app/assets/chevron-right.svg';
import ZiniTransparent from '@/app/assets/zini-transparent.svg';
import ZenoTransparent from '@/app/assets/zeno-transparent.svg';
import ZoroTransparent from '@/app/assets/zoro-transparent.svg';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // User is scrolling up
        setScrollingUp(true);
      } else {
        // User is scrolling down
        setScrollingUp(false);
      }
      lastScrollY = window.scrollY;

      // Show the header if scrolling up or if the mouse is in the top 40% of the screen
      if (scrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseMove = (e) => {
      // Check if mouse is in the top 40% of the screen
      if (e.clientY < window.innerHeight * 0.1) {
        setIsVisible(true);
      } else if (!scrollingUp) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scrollingUp]);

  return (
    <nav className={`flex justify-between px-[3%] sticky shadow-lg bg-white/90 top-0 z-50 left-0 backdrop-blur-md h-16 items-center transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Link href={'/'}>
        <Image src={logo} alt='' width={120} height={0} />
      </Link>
      <div className='flex w-1/3 justify-evenly font-bold'>
        <Link className='flex text-xl justify-center items-center' href={'/'}>
          <button className='px-10'>Home</button>
        </Link>
        <div className='flex group text-xl hover:h-[80px] hover:mt-8 hover:pt-3 hover:bg-[#F6F5F5] justify-center items-center hover:items-start'>
          <button className='px-10'>Products</button>
          <div className='absolute hidden group-hover:block w-[310px] ml-36 top-full py-6 z-50 rounded-b-md bg-[#F6F5F5]'>
            <div className='flex justify-center items-center flex-col gap-y-10'>
              <Link href={'/products/zeno'} ><h4 className='font-semibold p-2 px-4 text-2xl w-[246px] hover:text-white hover:bg-black'>Zeno</h4></Link>
              <Link href={'/products/zephyr'} ><h4 className='font-semibold p-2 px-4 text-2xl w-[246px] hover:text-white hover:bg-black'>Zephyr</h4></Link>
              <Link href={'/products/zoro'} ><h4 className='font-semibold p-2 px-4 text-2xl w-[246px] hover:text-white hover:bg-black'>Zoro</h4></Link>
            </div>
          </div>
        </div>
        <div className='flex group text-xl hover:h-[80px] hover:mt-8 mr-5 hover:pt-3 hover:bg-[#F6F5F5] justify-center items-center hover:items-start'>
          <button className='px-10'>More</button>
          <div className='absolute hidden group-hover:block w-[310px] ml-[182px] top-full py-6 z-50 rounded-b-md bg-[#F6F5F5]'>
            <div className='flex justify-center items-center flex-col gap-y-10'>
              <Link href={''} ><h4 className='font-semibold p-2 px-4 text-2xl w-[246px] hover:text-white hover:bg-black'>Blog</h4></Link>
              <Link href={''} ><h4 className='font-semibold p-2 px-4 text-2xl w-[246px] hover:text-white hover:bg-black'>Warranty</h4></Link>
            </div>
          </div>
        </div>
      </div>
      <Link className='min-w-[137.55px] self-center py-3 min-h-[38.02px] bg-gradient-to-r from-[#8428E0] to-black flex justify-center items-center rounded-3xl font-medium' href={'/contact-sales'}>
        <button className='text-white rounded-full px-4 font-medium text-sm'>Contact Sales</button>
      </Link>
    </nav>
  );
};

export default Header;
