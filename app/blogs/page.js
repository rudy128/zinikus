import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import timelineToFuture from '@/app/assets/timeline-to-future.png'
import theQuestForWalkingRobots from '@/app/assets/the-quest-for-walking-robots.png'

const page = () => {
  const blogs = [
    {
      title: 'Timeline to Future',
      date: '2022',
      image: timelineToFuture,
      link: '/blogs/timeline-to-future',
    },
    {
      title: 'The Quest for Walking Robots',
      date: '2024',
      image: theQuestForWalkingRobots,
      link: '/blogs/the-quest-for-walking-robots',
    }
  ]
  return (
    <div>
        <Header />
            <h1 className='text-7xl font-bold text-center mt-10'>Blogs</h1>
        <div className='h-[60em] flex flex-col justify-center -mt-28 items-center'>
            <div className='flex gap-10'>
                {blogs.map((blog, index) => (
                    <Link href={blog.link} key={index} className='flex items-center justify-center'>
                      <div className='w-[560px] relative h-[450px]'>
                    <Image src={blog.image} alt='' width={560} height={351}/>
                    <div className='w-full h-[100px] absolute bottom-0 left-0 bg-[#282828] flex flex-col justify-center p-[7%]'>
                      <h3 className='text-2xl font-bold text-white'>{blog.title}</h3>
                      <div className='flex gap-5'>
                        <Calendar className='text-[#9a9a9a] self-center inline-block' />
                        <h3 className='text-2xl text-[#9a9a9a]'>{blog.date}</h3>
                      </div>
                    </div>
                  </div>
                    </Link>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default page