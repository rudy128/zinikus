import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div className='h-[680px] relative px-10 flex flex-col justify-center gap-y-4 items-start bg-black text-white'>
        <h1 className='text-7xl font-bold'>Robotics Redefined</h1>
        <p className='text-xl leading-loose font-bold'>Explore cutting-edge robotics solutions engineered to tackle<br/>
        today&apos;s toughest automation challenges</p>
        <Link className='group relative -bottom-12 rounded-3xl px-4 py-2 border border-white' href={''}>
            <button>Explore Solutions{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </button>
        </Link>
    </div>
  )
}

export default Hero