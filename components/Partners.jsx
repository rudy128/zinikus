'use client'
import Image from 'next/image';
import startupnews from '@/app/assets/startupnews.jpeg';
import agility from '@/app/assets/agility.jpeg';
import infoTech from '@/app/assets/infotech.jpeg';
import nvidia from '@/app/assets/nvidia.jpg';
import opendroids from '@/app/assets/opendroids.png';
import React from 'react';

const Partners = () => {
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

    const renderLogo = (item, index) => {
        console.log(`🎯 Rendering logo: ${item.name}`);
        
        if (item.noBackground) {
            return (
                <div key={index} className="flex-shrink-0 mx-6">
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
                <div key={index} className="flex-shrink-0 mx-6">
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
            
            <div className="w-full overflow-hidden">
                <div className="flex animate-marquee">
                    {/* Create multiple copies for seamless infinite scroll */}
                    {[...Array(5)].map((_, setIndex) => 
                        data.map((item, index) => renderLogo(item, `${setIndex}-${index}`))
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-${100 / 5}%);
                    }
                }
                
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    width: ${5 * 100}%;
                }
            `}</style>
        </div>
    );
};

export default Partners;