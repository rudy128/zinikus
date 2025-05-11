"use client";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import timelineToFuture from '@/app/assets/timeline-to-future.png'
import theQuestForWalkingRobots from '@/app/assets/the-quest-for-walking-robots.png'
import { motion } from 'framer-motion'

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

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  };

  // Animation variants for individual blog items
  const blogVariants = {
    hidden: { 
      opacity: 0,
      y: 70 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  return (
    <div>
      <Header />
      <motion.h1 
        className='text-7xl font-bold text-center mt-10'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blogs
      </motion.h1>
      <div className='h-[60em] flex flex-col justify-center -mt-28 items-center'>
        <motion.div 
          className='flex gap-10 flex-wrap justify-center'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={blogVariants}
              className="flex items-center justify-center"
            >
              <Link href={blog.link} className='flex items-center justify-center'>
                <div className='w-[560px] relative h-[450px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    width={560} 
                    height={351}
                    className="object-cover"
                  />
                  <motion.div 
                    className='w-full h-[100px] absolute bottom-0 left-0 bg-[#282828] flex flex-col justify-center p-[7%]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.3) }}
                  >
                    <h3 className='text-2xl font-bold text-white'>{blog.title}</h3>
                    <div className='flex gap-5'>
                      <Calendar className='text-[#9a9a9a] self-center inline-block' />
                      <h3 className='text-2xl text-[#9a9a9a]'>{blog.date}</h3>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default page