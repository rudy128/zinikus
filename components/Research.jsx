'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import foundedImage from '@/app/assets/foundedImage.svg';
import ziniMark1 from '@/app/assets/ziniMark1.svg';
import ziniMark2 from '@/app/assets/ziniMark2.svg';
import iffcoDubai from '@/app/assets/iffcoDubai.svg';
import startupMahakumbh from '@/app/assets/startupMahakumbh.svg';
import zenoMark1 from '@/app/assets/zenoMark1.svg';
import zenoMark2 from '@/app/assets/zenoMark2.svg';
import roseateDelhi from '@/app/assets/roseateDelhi.svg';
import innovativeModularity from '@/app/assets/innovativeModularity.svg';

const Research = () => {
    const researchBlogs = [
        {
            image: foundedImage,
            year: 2022,
            title: "ZINIKUS PVT LTD",
            description: "ZINIKUS Pvt Ltd was founded in March 2022 by CEO, Adviteey Mehaindroo & COO, Tanay Yadav."
        },
        {
            image: ziniMark1,
            year: 2022,
            title: "ZINI MARK 1",
            description: "Our passion found life in the mechanical spare parts as we designed and built the very first Mechanical Humanoid – ZINI - The Reception Robot."
        },
        {
            image: ziniMark2,
            year: 2023,
            title: "ZINI MARK 2",
            description: "Just one year improvements included a new head and eye design."
        },
        {
            image: iffcoDubai,
            year: 2023,
            title: "IFFCO TECH DAY, DUBAI",
            description: "Demonstration & installation at the IFFCO Office in Dubai for customer interaction & order-taking applications."
        },
        {
            image: startupMahakumbh,
            year: 2024,
            title: "STARTUP MAHAKUMBH, INDIA",
            description: "A successful demonstration and visit to Startup Mahakumbh, India. Displaying the inner mechanics of a robotic head."
        },
        {
            image: zenoMark1,
            year: 2024,
            title: "ZENO MARK 1",
            description: "While making headways in the humanoid sector came the inception of ZENO – The Lobby Robot. Ready to automate the hospitality industry!"
        },
        {
            image: zenoMark2,
            year: 2024,
            title: "ZENO MARK 2",
            description: "ZENO gets the ability to move around, making drifts and winning races!"
        },
        {
            image: roseateDelhi,
            year: 2024,
            title: "ROSEATE HOUSE, DELHI",
            description: "Demonstrated & deployed ZENO at Roseate House, New Delhi. To take orders & interact with the visitors."
        },
        {
            image: innovativeModularity,
            year: 2025,
            title: "INNOVATIVE MODULARITY",
            description: "Robots alone wasn’t enough; it was time to adapt & hence began the development of multi-use modular robotic platforms!"
        }
    ];

    // Scroll animations with Framer Motion
    const controls = useAnimation();  // For H1 & First Div animations
    const controlsArticle = useAnimation();  // For Article DOM load and scroll animations

    useEffect(() => {
        // DOM load animations for H1 and First Div
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

        // Initializing scroll-triggered animations for researchBlogs
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 100) {
                controlsArticle.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
            } else {
                controlsArticle.start({ opacity: 0, y: 100 });
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls, controlsArticle]);

    const firstRow = researchBlogs.slice(0, 4);  // First 4 blogs for the first row
    const remainingRows = researchBlogs.slice(4);  // Remaining blogs

    return (
        <main className='flex flex-col items-center justify-center py-10 px-5 sm:px-10 lg:px-20'>
            {/* H1 with Page Load Animation */}
            <motion.h1 
                className='font-bold text-3xl sm:text-4xl mb-10 text-center' 
                initial={{ opacity: 0, y: -100 }} 
                animate={controls} 
            >
                Timeline to the future
            </motion.h1>

            {/* First Div with Page Load Animation */}
            <motion.div 
                className='py-10 text-xl sm:text-2xl space-y-5 text-wrap' 
                initial={{ opacity: 0, y: 100 }} 
                animate={controls} 
                transition={{ duration: 0.6 }}
            >
                <h3>Small beginnings, endless potential</h3>
                <h3>The start of something extraordinary. ZINIKUS began its life as our robots do, as an idea in the mind 
                    of our founders, Adviteey Mehaindroo & Tanay Yadav.</h3>
                <h3>With a shared-vision of what might be possible, they started by creating a simple semi-humanoid 
                    prototype & other robotic mechanics. They also started gathering a group of talented local engineers 
                    to produce semi-humanoid lobby robots in India for Hospitality, Corporate settings, and museums. 
                    Soon our mechanical creations were commissioned for sites such as the GITEX Dubai, IFFCO Tech-day, 
                    Roseate House in Delhi.</h3>
                <h3>This was just the beginning. At first, we were working with simple mechanical figures. But in our hearts, 
                    our desire was to make something truly outstanding.</h3>
            </motion.div>
            
            {/* First Row (DOM Load Animation with Staggered Delay) */}
            <motion.div 
                className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'
                initial={{ opacity: 0, y: 100 }} 
                animate={controls} 
                transition={{ duration: 0.6 }}
            >
                {firstRow.map((blog, index) => {
                    return (
                        <motion.article 
                            key={index} 
                            className='w-full h-fit flex flex-col justify-between bg-white shadow-lg rounded-lg p-5 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl'
                            initial={{ opacity: 0, y: 100 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className='w-full h-64 relative rounded-lg overflow-hidden'>
                                <Image 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className='object-cover w-full h-full' 
                                    width={0} 
                                    height={0} 
                                />
                            </div>
                            <p className='text-xs font-light text-gray-500 mt-3'>{blog.year}</p>
                            <h1 className='text-xl font-medium text-gray-900 mt-1'>{blog.title}</h1>
                            <p className='font-light text-sm text-gray-700 mt-2'>{blog.description}</p>
                        </motion.article>
                    );
                })}
            </motion.div>

            {/* Remaining Rows (Scroll-triggered Animation with Staggered Delay) */}
            <motion.div 
                className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                initial={{ opacity: 0, y: 100 }} 
                animate={controlsArticle} 
                transition={{ duration: 0.6 }}
            >
                {remainingRows.map((blog, index) => {
                    return (
                        <motion.article 
                            key={index} 
                            className='w-full h-fit flex flex-col justify-between bg-white shadow-lg rounded-lg p-5 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl'
                            initial={{ opacity: 0, y: 100 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className='w-full h-64 relative rounded-lg overflow-hidden'>
                                <Image 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className='object-cover w-full h-full' 
                                    width={0} 
                                    height={0} 
                                />
                            </div>
                            <p className='text-xs font-light text-gray-500 mt-3'>{blog.year}</p>
                            <h1 className='text-xl font-medium text-gray-900 mt-1'>{blog.title}</h1>
                            <p className='font-light text-sm text-gray-700 mt-2'>{blog.description}</p>
                        </motion.article>
                    );
                })}
            </motion.div>
        </main>
    );
};

export default Research;
