import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/logo.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='flex justify-between p-4 h-28 items-center'>
        <Image src={logo} alt='' width={204} height={76} />
        <div className='flex justify-between w-1/3 font-bold'>
            <Link className='flex justify-center items-center' href={''}>
                <button>Products</button>
            </Link>
            <Link className='flex justify-center items-center' href={''}>
                <button>Sales</button>
            </Link>
            <Link className='flex justify-center items-center' href={''}>
                <button>About Us</button>
            </Link>
            <Link className='w-[137.55px] h-[38.02px] bg-gradient-to-r from-black to-[#8428E0] text-white flex justify-center items-center rounded-3xl font-medium' href={''}>
                <button>Contact Sales</button>
            </Link>
        </div>
    </nav>
  )
}

export default Header