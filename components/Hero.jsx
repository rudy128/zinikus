import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
// import Video from 'next-video'
// import Video1 from "@/videos/video1.mp4.json"

const inter = Inter({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div className='h-[680px] relative overflow-hidden flex flex-col justify-center gap-y-4 items-start text-white'>
        <div className='ml-[16%] flex flex-col'>
        <h1 className='text-7xl heading-appear font-bold'>Robotics Redefined</h1>
        <p className='text-xl paragraph-appear leading-loose font-bold'>Explore cutting-edge robotics solutions engineered to tackle<br/>
        today&apos;s toughest automation challenges</p>
        </div>
        <Link className={`group relative button-appear -bottom-24 ml-[16%] rounded-3xl px-4 py-2 border border-white ${inter.className}`} href={''}>
            <button>Explore Solutions{' '}
                <span className="inline-block text-xl transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </button>
        </Link>
        <Videos src='/video1.mp4' />
    </div>
  )
}

const HeroProducts = ({padding}) => {
  return (
    <div className='h-[680px] relative overflow-hidden flex flex-col justify-center gap-y-4 items-start text-white'>
        <div className={`${padding} flex flex-col`}>
        <h1 className='text-7xl heading-appear font-bold'>Robotics Redefined</h1>
        <p className='text-xl paragraph-appear leading-loose font-bold'>Explore cutting-edge robotics solutions engineered to tackle<br/>
        today&apos;s toughest automation challenges</p>
        </div>
        <Link className={`group relative button-appear -bottom-24 ${padding} rounded-3xl px-4 py-2 border border-white ${inter.className}`} href={''}>
            <button>Explore Solutions{' '}
                <span className="inline-block text-xl transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </button>
        </Link>
        <Videos src='/video1.mp4' />
    </div>
  )
}



export const Videos = ({src}) => {
  return(
      <video className='absolute w-[100%] -z-10 object-cover h-screen' autoPlay loop muted>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export {Hero, HeroProducts}