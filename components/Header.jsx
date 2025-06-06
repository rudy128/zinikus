'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '@/app/assets/logo.svg';
import Link from 'next/link';
import { Sheet,SheetContent, SheetHeader, SheetBody, SheetFooter, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Menu, X } from 'lucide-react'; // Importing Lucide icons
import { SearchCheck } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State for opening/closing the sheet

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      lastScrollY = window.scrollY;

      if (scrollingUp) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseMove = (e) => {
      if (e.clientY < window.innerHeight * 0.4) {
        setIsVisible(true);
      } else if (!scrollingUp) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scrollingUp]);

  return (
    <nav className={`flex justify-between px-[3%] w-full sticky shadow-lg bg-white/90 top-0 z-50 left-0 backdrop-blur-md h-16 items-center transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='flex justify-center items-center gap-x-5'>
      <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <Menu size={28} />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
        <Accordion type="multiple" collapsible>
            {/* <AccordionItem value="home">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>
                <Link href={'/'}>Home Page</Link>
              </AccordionContent>
            </AccordionItem> */}
            <Link className='border-b flex flex-1 items-center justify-between py-4 text-2xl font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180' href={'/'}>Home Page</Link>
            <AccordionItem value="products">
              <AccordionTrigger>Products</AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col gap-y-4 pl-10'>
                  <Link className='hover:underline text-xl border-5 border-black rounded-lg' href={'/products/zeno'}><Button className="bg-white text-black p-1 text-xl hover:bg-black/20">Zeno</Button></Link>
                  <Link className='hover:underline text-xl' href={'/products/zephyr'}><Button className="bg-white text-black p-1 text-xl hover:bg-black/20">Zephyr</Button></Link>
                  <Link className='hover:underline text-xl' href={'/products/zoro'}><Button className="bg-white text-black p-1 text-xl hover:bg-black/20">Zoro</Button></Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="more">
              <AccordionTrigger>More</AccordionTrigger>
              <AccordionContent>
                <div className='flex flex-col gap-y-4 pl-10'>
                  <Link className='hover:underline text-xl' href={'/blogs'}><Button className="bg-white text-black p-1 text-xl hover:bg-black/20">Blogs</Button></Link>
                  <Link className='hover:underline text-xl' href={'/warranty'}><Button className="bg-white text-black p-1 text-xl hover:bg-black/20">Warranty</Button></Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>

      </div>
      <Link href={'/'}>
        <Image src={logo} className='hidden md:block' alt='' width={120} height={0} />
        <Image src={logo} className='md:hidden' alt='' width={90} height={0} />
      </Link>
      </div>

      {/* Desktop Navigation */}
      <div className={`w-full lg:w-1/3 hidden md:flex justify-center items-center ${isVisible ? '' : 'invisible'} transition-all duration-300 ease-in-out`}>
        <div className='flex justify-evenly w-full font-bold'>
          <Link className='flex text-xl justify-center items-center' href={'/'}>
            <button className='px-10'>Home</button>
          </Link>
          <div className='flex group text-xl hover:h-[80px] hover:mt-8 hover:pt-3 hover:bg-[#F6F5F5] justify-center items-center hover:items-start'>
            <button className='px-10'>Products</button>
            <div className={`absolute ${isVisible ? 'hidden' : 'opacity-0'} group-hover:block w-[310px] ml-[8.6rem] top-full py-6 z-50 rounded-b-md bg-[#F6F5F5]`}>
              <div className='flex justify-center items-center flex-col gap-y-10'>
                <Link href={'/products/zeno'} ><h4 className='font-semibold p-2 px-4 text-xl w-[246px] hover:text-white hover:bg-black'>Zeno</h4></Link>
                <Link href={'/products/zephyr'} ><h4 className='font-semibold p-2 px-4 text-xl w-[246px] hover:text-white hover:bg-black'>Zephyr</h4></Link>
                <Link href={'/products/zoro'} ><h4 className='font-semibold p-2 px-4 text-xl w-[246px] hover:text-white hover:bg-black'>Zoro</h4></Link>
              </div>
            </div>
          </div>
          <div className='flex group text-xl hover:h-[80px] hover:mt-8 mr-5 hover:pt-3 hover:bg-[#F6F5F5] justify-center items-center hover:items-start'>
            <button className='px-10'>More</button>
            <div className='absolute hidden group-hover:block w-[310px] ml-[11.1rem] top-full py-6 z-50 rounded-b-md bg-[#F6F5F5]'>
              <div className='flex justify-center items-center flex-col gap-y-10'>
                <Link href={'/blogs'} ><h4 className='font-semibold p-2 px-4 text-xl w-[246px] hover:text-white hover:bg-black'>Blogs</h4></Link>
                <Link href={''} ><h4 className='font-semibold p-2 px-4 text-xl w-[246px] hover:text-white hover:bg-black'>Warranty</h4></Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Sheet for Mobile Navigation */}
      {/* <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <div className="p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Menu</h3>
            <button onClick={() => setIsSheetOpen(false)}>
              <X size={28} /> 
            </button>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="home">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent>
                <Link href={'/'}>Home Page</Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="products">
              <AccordionTrigger>Products</AccordionTrigger>
              <AccordionContent>
                <Link href={'/products/zeno'}>Zeno</Link>
                <Link href={'/products/zephyr'}>Zephyr</Link>
                <Link href={'/products/zoro'}>Zoro</Link>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="more">
              <AccordionTrigger>More</AccordionTrigger>
              <AccordionContent>
                <Link href={'/blogs'}>Blogs</Link>
                <Link href={'/warranty'}>Warranty</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet> */}

      {/* Contact Sales Button */}
      <Link className='md:min-w-[137.55px] w-24 self-center md:py-3 md:min-h-[38.02px] bg-gradient-to-r from-[#8428E0] to-black flex justify-center items-center rounded-3xl font-medium' href={'/contact-sales'}>
        <button className='text-white rounded-full px-4 font-medium text-xs md:text-sm hidden md:block'>Contact Sales</button>
        <button className='text-white rounded-full px-4 py-2 font-medium text-xs md:hidden flex justify-center items-center gap-x-2'><SearchCheck size={12} />Contact</button>
      </Link>
    </nav>
  );
};

export default Header;
