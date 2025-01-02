'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/logo.svg'
import Link from 'next/link'
import ChevronRight from '@/app/assets/chevron-right.svg'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    function handleProductClick(){
        router.push('/products')
    }
  return (
    <nav className='flex relative justify-between px-4 h-28 items-center' suppressHydrationWarning={true}>
        <Link href={'/'}>
            <Image src={logo} alt='' width={150} height={0} />
        </Link>
        <div className='flex justify-evenly w-1/3 font-bold'>
            <Link className='flex justify-center items-center' href={'/'}>
                <button>Home</button>
            </Link>
            <div className='flex group hover:h-[105px] justify-center items-center'>
                <button onClick={handleProductClick}>Products</button>
                <div className='absolute hidden group-hover:block top-full z-50 h-[350px] '>
                    <div className='w-full relative h-full flex'>
                    <div className='h-full w-[340px] flex flex-col items-center text-white'>
                    <Link className='w-full flex peer justify-between px-8 bg-[#49286E] border-b border-[#959393] py-2' href={'/products/zini'} >
                        <div>Zini</div>
                        <Image src={ChevronRight}  alt='Chevron Right'  width={25} height={25} />
                    </Link>
                    <Link className='w-full px-8 peer flex justify-between bg-[#49286E] border-b border-[#959393] py-2' href={'/products/zeno'} >
                        <div>Zeno</div>
                        <Image src={ChevronRight}  alt='Chevron Right'  width={25} height={25} />
                    </Link>
                    <Link className='w-full peer px-8 flex justify-between bg-[#49286E] border-b border-[#959393] py-2' href={'/products/zoro'} >
                        <div>Zoro</div>
                        <Image src={ChevronRight}  alt='Chevron Right'  width={25} height={25} />
                    </Link>
                    <div className='w-[340px] bg-white text-black -right-full absolute peer-hover:block hidden min-h-full space-y-16 shadow-md rounded-xl py-4 border mx-auto px-8'>
                        {/* <div className='space-y-16 shadow-md rounded-xl py-4 border w-11/12 h-11/12 mx-auto mt-1 px-8'> */}
                        <h1 className='font-semibold text-2xl'>ZINI</h1>
                        <div className='grid grid-rows-2 grid-cols-2 gap-5'>
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