'use client'
import Image from 'next/image';
import startupnews from '@/app/assets/startupnews.jpeg';
import agility from '@/app/assets/agility.jpeg';
import infoTech from '@/app/assets/infotech.jpeg';
import nvidia from '@/app/assets/nvidia.jpg';
import opendroids from '@/app/assets/opendroids.png';
import React, { useEffect, useRef } from 'react';

const Partners = () => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    
    const data = [
        {
            name: 'StartupNews.fyi',
            image: startupnews,
            link: 'https://startupnews.fyi/',
            noBackground: true,
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
            noBackground: true,
        },
        {
            name: 'Thrifty AI',
            image: 'https://thriftyai.com/assets/images/logo.png',
            link: 'https://www.thriftyai.com/',
        },
        {
            name: 'Open Droids',
            image: opendroids,
            link: 'https://opendroids.com/',
        }
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let translateX = 0;
        const speed = 1; // pixels per frame
        const logoWidth = 168; // 120px + 48px margin
        const totalLogos = data.length;
        const resetPoint = logoWidth * totalLogos; // When to reset position

        const animate = () => {
            translateX += speed;
            
            // Reset position seamlessly when one complete set has passed
            if (translateX >= resetPoint) {
                translateX = 0;
            }
            
            // Apply transform to the track
            const track = container.querySelector('.marquee-track');
            if (track) {
                track.style.transform = `translateX(-${translateX}px)`;
            }
            
            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const renderLogo = (item, index) => {
        console.log(`🎯 Rendering logo: ${item.name}`);
        
        if (item.noBackground) {
            return (
                <div key={index} className="flex-shrink-0 mx-6" style={{ width: '120px' }}>
                    <div className="w-[120px] h-[120px] rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div key={index} className="flex-shrink-0 mx-6" style={{ width: '120px' }}>
                    <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={110}
                            height={110}
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="bg-black/35 lg:w-10/12 xl:w-4/6 py-6 mx-auto min-h-[163px] m-10 overflow-hidden px-10 text-white flex flex-col justify-center items-center font-bold">
            <h1 className="mb-5">Trusted by industry-leading organizations around the world</h1>
            
            <div ref={containerRef} className="w-full overflow-hidden">
                <div className="marquee-track flex" style={{ width: 'max-content' }}>
                    {/* First set of logos */}
                    {data.map((item, index) => renderLogo(item, `set1-${index}`))}
                    {/* Second set for seamless loop */}
                    {data.map((item, index) => renderLogo(item, `set2-${index}`))}
                    {/* Third set for extra smooth transition */}
                    {data.map((item, index) => renderLogo(item, `set3-${index}`))}
                </div>
            </div>
        </div>
    );
};

export default Partners;