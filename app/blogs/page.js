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
        className='text-4xl md:text-6xl lg:text-7xl font-bold text-center mt-6 md:mt-10 px-4 mb-8 md:mb-12'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blogs
      </motion.h1>
      <div className='min-h-[40em] md:min-h-[50em] flex flex-col justify-center items-center px-4 py-8'>
        <motion.div 
          className='flex gap-6 md:gap-10 flex-wrap justify-center max-w-7xl w-full'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={blogVariants}
              className="flex items-center justify-center w-full sm:w-auto"
            >
              <Link href={blog.link} className='flex items-center justify-center w-full sm:w-auto'>
                <div className='w-full sm:w-[400px] md:w-[480px] lg:w-[560px] relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 400px, (max-width: 1024px) 480px, 560px"
                  />
                  <motion.div 
                    className='w-full h-[80px] sm:h-[90px] md:h-[100px] absolute bottom-0 left-0 bg-[#282828] flex flex-col justify-center p-4 md:p-[7%]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.3) }}
                  >
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-white'>{blog.title}</h3>
                    <div className='flex gap-2 md:gap-5'>
                      <Calendar className='text-[#9a9a9a] self-center inline-block w-4 h-4 md:w-5 md:h-5' />
                      <h3 className='text-lg sm:text-xl md:text-2xl text-[#9a9a9a]'>{blog.date}</h3>
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