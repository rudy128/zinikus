'use client'
import Image from 'next/image';
import startupnews from '@/app/assets/startupnews.jpeg';
import agility from '@/app/assets/agility.jpeg';
import infoTech from '@/app/assets/infotech.jpeg';
import nvidia from '@/app/assets/nvidia.jpg';
import opendroids from '@/app/assets/opendroids.png';
import React, { useEffect, useRef, useState } from 'react';

const Partners = () => {
    const containerRef = useRef(null);
    const [logos, setLogos] = useState([]);
    
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
        // Initialize logos with unique IDs for tracking
        const initialLogos = [];
        const numberOfCopies = 3; // Create 3 complete sets of all logos
        
        for (let copy = 0; copy < numberOfCopies; copy++) {
            data.forEach((logoData, index) => {
                initialLogos.push({
                    ...logoData,
                    id: `logo-${copy}-${index}`,
                    position: (copy * data.length + index) * 200 - 400 // Start some logos off-screen to the left
                });
            });
        }
        setLogos(initialLogos);
    }, []);

    useEffect(() => {
        if (logos.length === 0) return;

        let animationId;
        
        const animate = () => {
            setLogos(prevLogos => 
                prevLogos.map(logo => {
                    const newPosition = logo.position + 1.5; // Move 1.5px to the right per frame
                    
                    // If logo goes too far right (beyond container width + some buffer), reset to left
                    if (newPosition > (containerRef.current?.offsetWidth || 1200) + 200) {
                        // Find the leftmost logo position
                        const leftmostPosition = Math.min(...prevLogos.map(l => l.position));
                        return {
                            ...logo,
                            position: leftmostPosition - 200 // Place 200px to the left of leftmost logo
                        };
                    }
                    
                    return {
                        ...logo,
                        position: newPosition
                    };
                })
            );
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [logos.length]);

    const renderLogo = (item) => {
        if (item.noBackground) {
            return (
                <div className="w-[120px] h-[120px] rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="object-cover w-full h-full"
                    />
                </div>
            );
        } else {
            return (
                <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={110}
                        height={110}
                        className="object-contain max-w-full max-h-full"
                    />
                </div>
            );
        }
    };

    return (
        <div className="bg-black/35 lg:w-10/12 xl:w-4/6 py-6 mx-auto min-h-[163px] m-10 overflow-hidden px-10 text-white flex flex-col justify-center items-center font-bold">
            <h1 className="mb-5">Trusted by industry-leading organizations around the world</h1>
            
            <div 
                ref={containerRef}
                className="relative w-full overflow-hidden h-[140px]"
            >
                <div className="relative h-full">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="absolute top-1/2 transform -translate-y-1/2 flex-shrink-0"
                            style={{
                                left: `${logo.position}px`,
                                transition: 'none'
                            }}
                        >
                            {renderLogo(logo)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;