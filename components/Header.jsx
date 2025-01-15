import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/logo.svg'
import Link from 'next/link'
import ChevronRight from '@/app/assets/chevron-right.svg'
import ZiniTransparent from '@/app/assets/zini-transparent.svg'
import ZenoTransparent from '@/app/assets/zeno-transparent.svg'
import ZoroTransparent from '@/app/assets/zoro-transparent.svg'

const Header = () => {
  return (
    <nav className='flex relative justify-between px-4 h-16 items-center' suppressHydrationWarning={true}>
        <Link href={'/'}>
            <Image src={logo} alt='' width={150} height={0} />
        </Link>
        <div className='flex justify-evenly w-1/3 font-bold'>
            <Link className='flex justify-center items-center' href={'/'}>
                <button>Home</button>
            </Link>
            <div className='flex group hover:h-[130px] justify-center items-center'>
                <button>Products</button>
                <div className='absolute hidden group-hover:block top-full pt-2 pl-5 z-50 h-[350px] '>
                    <div className='w-full relative h-full flex'>
                    <div className='h-full w-[280px] overflow-hidden flex flex-col items-center text-white'>
                    <Link className='w-full rounded-t-3xl hover:bg-[#3f225f] flex parent justify-between px-8 bg-[#49286E] border-b border-[#959393] py-2' href={'/products/zini'} >
                        <div>Zini</div>
                        <Image src={ChevronRight}  alt='Chevron Right'  width={25} height={25} />
                        <div className='w-[424px] h-[227px] child bg-white text-black -right-[152%] absolute hidden shadow-md rounded-xl border mx-auto px-8'>
                        {/* <div className='space-y-16 shadow-md rounded-xl py-4 border w-11/12 h-11/12 mx-auto mt-1 px-8'> */}
                        <div className='flex justify-around  items-center'>
                        <h1 className='font-semibold text-2xl'>ZINI</h1>
                        <Image src={ZiniTransparent} alt='Zini' width={90} height={90}   />
                        </div>
                        <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                            <div>
                                <h3 className='text-xs font-semibold'>ABC</h3>
                                <p className='text-[8px] font-normal'>Orbit is your portal for real-time fleet 
management and analysis. Eliminate 
guesswork, make informed decisions, 
and increase efficiency throughout your facility.
</p>
                            </div>
                            <div>
                                <h3 className='text-xs font-semibold'>ABC</h3>
                                <p className='text-[8px] font-normal'>Orbit is your portal for real-time fleet 
management and analysis. Eliminate 
guesswork, make informed decisions, 
and increase efficiency throughout your facility.
</p>
                            </div>
                        </div>
                        {/* </div> */}

                    </div>
                    </Link>
                    <Link className='w-full px-8 parent hover:bg-[#3f225f] flex justify-between bg-[#49286E] border-b border-[#959393] py-2' href={'/products/zeno'} >
                        <div>Zeno</div>
                        <Image src={ChevronRight}  alt='Chevron Right'  width={25} height={25} />
                        <div className='w-[424px] h-[227px] child bg-white text-black -right-[152%] absolute hidden shadow-md rounded-xl border mx-auto px-8'>
                        {/* <div className='space-y-16 shadow-md rounded-xl py-4 border w-11/12 h-11/12 mx-auto mt-1 px-8'> */}
                        <div className='flex justify-around  items-center'>
                        <h1 className='font-semibold text-2xl'>ZENO</h1>
                        <Image src={ZenoTransparent} alt='Zini' width={90} height={90}   />
                        </div>
                        <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                            <div>
                                <h3 className='text-xs font-semibold'>ABC</h3>
                                <p className='text-[8px] font-normal'>Orbit is your portal for real-time fleet 
management and analysis. Eliminate 
guesswork, make informed decisions, 
and increase efficiency throughout your facility.
</p>
                            </div>
                            <div>
                                <h3 className='text-xs font-semibold'>ABC</h3>
                                <p className='text-[8px] font-normal'>Orbit is your portal for real-time fleet 
management and analysis. Eliminate 
guesswork, make informed decisions, 
and increase efficiency throughout your facility.
</p>
                            </div>
                        </div>
                        {/* </div> */}

                    </div>
                    </Link>
                    <Link className='w-full parent px-8 rounded-b-3xl hover:bg-[#3f225f] flex justify-between bg-[#49286E] border-b border-[#959393] py-2' href={'/products/zoro'} >
                        <div>Zoro</div>
                        <Image src={ChevronRight}  alt='Chevron Right'  width={25} height={25} />
                        <div className='w-[424px] h-fit pb-8 child bg-white text-black -right-[152%] absolute hidden shadow-md rounded-xl border mx-auto px-8'>
                        {/* <div className='space-y-16 shadow-md rounded-xl py-4 border w-11/12 h-11/12 mx-auto mt-1 px-8'> */}
                        <div className='flex justify-around  items-center'>
                        <h1 className='font-semibold text-2xl'>ZORO</h1>
                        <Image src={ZoroTransparent} alt='Zini' width={90} height={90}   />
                        </div>
                        <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                            <div>
                                <h3 className='text-xs font-semibold'>ABC</h3>
                                <p className='text-[8px] font-normal'>Orbit is your portal for real-time fleet 
management and analysis. Eliminate 
guesswork, make informed decisions, 
and increase efficiency throughout your facility.
</p>
                            </div>
                            <div>
                                <h3 className='text-xs font-semibold'>ABC</h3>
                                <p className='text-[8px] font-normal'>Orbit is your portal for real-time fleet 
management and analysis. Eliminate 
guesswork, make informed decisions, 
and increase efficiency throughout your facility.
</p>
                            </div>
                        </div>
                        {/* </div> */}

                    </div>
                    </Link>
                    </div>
                    </div>
                </div>
            </div>
            <Link className='flex justify-center items-center' href={'/research'}>
                <button>Research</button>
            </Link>
        </div>
            <Link className='min-w-[137.55px] self-center py-3 min-h-[38.02px] bg-gradient-to-r from-[#8428E0] to-black flex justify-center items-center rounded-3xl font-medium' href={'/contact-sales'}>
                <button className='bg-white text-black rounded-full px-4 font-medium text-sm'>Contact Sales</button>
            </Link>
    </nav>
  )
}

export default Header