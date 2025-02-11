'use client'
import Image from 'next/image';
import startupnews from '@/app/assets/startupnews.jpeg';
import agility from '@/app/assets/agility.jpeg';
import infoTech from '@/app/assets/infotech.jpeg';
import nvidia from '@/app/assets/nvidia.jpg';
import ostLabz from '@/app/assets/ostlabz.png';
import React, { useRef, useEffect, useState } from 'react';

const Partners = () => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const positionRef = useRef(0);

    const data = [
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
        },
        {
            name: 'Agility',
            image: agility,
            link: 'https://www.linkedin.com/company/agilityventures/',
        },
        {
            name: 'InfoTech Smart Trading LLC',
            image: infoTech,
            link: 'https://www.infotechuae.com/',
        },
        {
            name: 'Nvidia',
            image: nvidia,
            link: 'https://www.nvidia.com/en-in/',
        },
        {
            name: 'OstLabz',
            image: ostLabz,
            link: 'https://www.ostlabz.co.in/',
        },
    ];

    useEffect(() => {
        const container = containerRef.current;
        let animationFrameId;

        const animate = () => {
            if (!isHovered) {
                positionRef.current -= 1; // Move left by 1px
                if (positionRef.current <= -container.scrollWidth / 2) {
                    positionRef.current = 0; // Reset position for seamless looping
                }
                container.style.transform = `translateX(${positionRef.current}px)`;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return (
        <div className="bg-black/35 w-4/6 py-6 mx-auto min-h-[163px] m-10 overflow-hidden px-10 text-white flex flex-col justify-center items-center font-bold">
            <h1>Trusted by industry-leading organizations around the world</h1>
            <div
                className="relative overflow-hidden w-full  mt-5"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    ref={containerRef}
                    className="flex space-x-24"
                    style={{ whiteSpace: 'nowrap' }}
                >
                    {[...data, ...data].map((item, index) => (
                        <Image
                            key={index}
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="hover:scale-125 transform transition duration-300 ease-in-out"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
