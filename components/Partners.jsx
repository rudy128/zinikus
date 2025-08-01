'use client'
import Image from 'next/image';
import startupnews from '@/app/assets/startupnews.jpeg';
import agility from '@/app/assets/agility.jpeg';
import infoTech from '@/app/assets/infotech.jpeg';
import nvidia from '@/app/assets/nvidia.jpg';
import opendroids from '@/app/assets/opendroids.png';
import waysahead from '@/app/assets/waysahead-icon.png';
import React, { useEffect, useRef } from 'react';

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
    },
    {
        name: 'Waysahead',
        image: waysahead,
        link: 'https://www.waysaheadglobal.com/'
    }
];

const PartnersPC = () => {
    const sliderRef = useRef(null);
    


    useEffect(() => {
        let slickInstance = null;
        let initTimeout = null;
        let isInitialized = false;

        const initializeSlick = async () => {
            if (typeof window !== 'undefined' && sliderRef.current && !isInitialized) {
                try {
                    // Import jQuery and Slick dynamically
                    const { default: $ } = await import('jquery');
                    window.jQuery = window.$ = $;
                    
                    await import('slick-carousel');
                    
                    // Function to check if element is ready for Slick
                    const checkAndInitialize = () => {
                        const element = sliderRef.current;
                        if (!element) return false;
                        
                        const $element = $(element);
                        const children = $element.children();
                        
                        // Check if element exists, has children, and is not already initialized
                        if (element && children.length > 0 && !$element.hasClass('slick-initialized') && !isInitialized) {
                            try {
                                $element.slick({
                                    speed: 2000, // Reduced speed for consistency
                                    autoplay: true,
                                    autoplaySpeed: 0,
                                    cssEase: 'linear',
                                    slidesToShow: 6,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    arrows: false,
                                    dots: false,
                                    pauseOnHover: false,
                                    pauseOnFocus: false,
                                    pauseOnDotsHover: false,
                                    draggable: false,
                                    swipe: false,
                                    touchMove: false,
                                    variableWidth: false,
                                    centerMode: false,
                                    useCSS: true,
                                    useTransform: true,
                                    waitForAnimate: false, // Prevent animation queuing
                                    mobileFirst: true, // Start with mobile settings first
                                    responsive: [
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 2,
                                                speed: 2000, // Same speed for consistency
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 768,
                                            settings: {
                                                slidesToShow: 3,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 4,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 1200,
                                            settings: {
                                                slidesToShow: 5,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        }
                                    ]
                                });
                                
                                slickInstance = $element;
                                isInitialized = true;
                                console.log('🎯 Slick carousel initialized successfully');
                                
                                // Prevent reinitialize on resize
                                $(window).off('resize.slick');
                                
                                return true;
                            } catch (slickError) {
                                console.error('Error during Slick initialization:', slickError);
                                return false;
                            }
                        }
                        return false;
                    };
                    
                    // Try to initialize immediately
                    const initialized = checkAndInitialize();
                    
                    // If not initialized, retry once after short delay
                    if (!initialized) {
                        initTimeout = setTimeout(() => {
                            console.log('Retry initializing Slick');
                            checkAndInitialize();
                        }, 500);
                    }
                    
                } catch (error) {
                    console.error('Error loading Slick dependencies:', error);
                }
            }
        };

        // Single initialization approach
        if (document.readyState === 'complete') {
            initializeSlick();
        } else {
            window.addEventListener('load', initializeSlick, { once: true });
        }

        return () => {
            // Clear any pending timeouts
            if (initTimeout) {
                clearTimeout(initTimeout);
            }
            
            // Safely destroy Slick instance
            if (slickInstance && typeof window !== 'undefined' && window.$ && isInitialized) {
                try {
                    if (slickInstance.hasClass && slickInstance.hasClass('slick-initialized')) {
                        slickInstance.slick('unslick');
                        console.log('🎯 Slick carousel destroyed successfully');
                    }
                } catch (error) {
                    console.error('Error destroying Slick:', error);
                }
            }
            
            isInitialized = false;
        };
    }, []);

    const renderLogo = (item, index) => {
        console.log(`🎯 Rendering logo: ${item.name}`);
        
        if (item.noBackground) {
            return (
                <div key={index} className="px-3">
                    <div className="w-[120px] h-[120px] rounded-lg shadow-lg overflow-hidden mx-auto">
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
                <div key={index} className="px-3">
                    <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-lg flex items-center justify-center p-2 mx-auto">
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
        <>
            <div className="bg-black/35 lg:w-10/12 xl:w-4/6 py-6 mx-auto min-h-[163px] m-10 overflow-hidden px-10 text-white flex flex-col justify-center items-center font-bold">
                <h1 className="mb-5">Trusted by industry-leading organizations around the world</h1>
                
                <div className="w-full">
                    <div ref={sliderRef} className="partners-carousel">
                        {/* Create multiple sets for smooth infinite scrolling */}
                        {[...Array(4)].map((_, setIndex) => 
                            data.map((item, index) => renderLogo(item, `${setIndex}-${index}`))
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                /* Import Slick CSS */
                @import 'slick-carousel/slick/slick.css';
                @import 'slick-carousel/slick/slick-theme.css';
                
                .partners-carousel {
                    overflow: hidden;
                }
                
                .partners-carousel .slick-track {
                    display: flex !important;
                    align-items: center;
                    transform: translate3d(0, 0, 0);
                }
                
                .partners-carousel .slick-slide {
                    height: auto;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                }
                
                .partners-carousel .slick-slide > div {
                    width: 100%;
                }
                
                /* Hide default slick elements for clean infinite scroll */
                .partners-carousel .slick-dots {
                    display: none !important;
                }
                
                .partners-carousel .slick-arrow {
                    display: none !important;
                }
                
                .partners-carousel .slick-list {
                    overflow: hidden;
                }
                
                /* Ensure smooth hardware-accelerated animation */
                .partners-carousel .slick-track {
                    will-change: transform;
                    backface-visibility: hidden;
                }
            `}</style>
        </>
    );
};

const PartnersMobile = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        let slickInstance = null;
        let initTimeout = null;
        let isInitialized = false;

        const initializeSlick = async () => {
            if (typeof window !== 'undefined' && sliderRef.current && !isInitialized) {
                try {
                    // Import jQuery and Slick dynamically
                    const { default: $ } = await import('jquery');
                    window.jQuery = window.$ = $;
                    
                    await import('slick-carousel');
                    
                    // Function to check if element is ready for Slick
                    const checkAndInitialize = () => {
                        const element = sliderRef.current;
                        if (!element) return false;
                        
                        const $element = $(element);
                        const children = $element.children();
                        
                        // Check if element exists, has children, and is not already initialized
                        if (element && children.length > 0 && !$element.hasClass('slick-initialized') && !isInitialized) {
                            try {
                                $element.slick({
                                    speed: 2000, // Reduced speed for consistency
                                    autoplay: true,
                                    autoplaySpeed: 0,
                                    cssEase: 'linear',
                                    slidesToShow: 1, // Start with 1 slide for mobile
                                    slidesToScroll: 1,
                                    infinite: true,
                                    arrows: false,
                                    dots: false,
                                    pauseOnHover: false,
                                    pauseOnFocus: false,
                                    pauseOnDotsHover: false,
                                    draggable: false,
                                    swipe: false,
                                    touchMove: false,
                                    variableWidth: false,
                                    centerMode: false,
                                    useCSS: true,
                                    useTransform: true,
                                    waitForAnimate: false,
                                    responsive: [
                                        {
                                            breakpoint: 9999, // Always active
                                            settings: {
                                                slidesToShow: 1,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 640,
                                            settings: {
                                                slidesToShow: 2,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 768,
                                            settings: {
                                                slidesToShow: 3,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 4,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 1200,
                                            settings: {
                                                slidesToShow: 5,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        },
                                        {
                                            breakpoint: 1400,
                                            settings: {
                                                slidesToShow: 6,
                                                speed: 2000,
                                                autoplaySpeed: 0,
                                            }
                                        }
                                    ]
                                });
                                
                                slickInstance = $element;
                                isInitialized = true;
                                console.log('🎯 Slick carousel initialized successfully');
                                
                                // Prevent reinitialize on resize
                                $(window).off('resize.slick');
                                
                                return true;
                            } catch (slickError) {
                                console.error('Error during Slick initialization:', slickError);
                                return false;
                            }
                        }
                        return false;
                    };
                    
                    // Try to initialize immediately
                    const initialized = checkAndInitialize();
                    
                    // If not initialized, retry once after short delay
                    if (!initialized) {
                        initTimeout = setTimeout(() => {
                            console.log('Retry initializing Slick');
                            checkAndInitialize();
                        }, 500);
                    }
                    
                } catch (error) {
                    console.error('Error loading Slick dependencies:', error);
                }
            }
        };

        // Single initialization approach
        if (document.readyState === 'complete') {
            initializeSlick();
        } else {
            window.addEventListener('load', initializeSlick, { once: true });
        }

        return () => {
            // Clear any pending timeouts
            if (initTimeout) {
                clearTimeout(initTimeout);
            }
            
            // Safely destroy Slick instance
            if (slickInstance && typeof window !== 'undefined' && window.$ && isInitialized) {
                try {
                    if (slickInstance.hasClass && slickInstance.hasClass('slick-initialized')) {
                        slickInstance.slick('unslick');
                        console.log('🎯 Slick carousel destroyed successfully');
                    }
                } catch (error) {
                    console.error('Error destroying Slick:', error);
                }
            }
            
            isInitialized = false;
        };
    }, []);

    const renderLogo = (item, index) => {
        console.log(`🎯 Rendering logo: ${item.name}`);
        
        if (item.noBackground) {
            return (
                <div key={index} className="px-3">
                    <div className="w-[120px] h-[120px] rounded-lg shadow-lg overflow-hidden mx-auto">
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
                <div key={index} className="px-3">
                    <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-lg flex items-center justify-center p-2 mx-auto">
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
        <>
            <div className="bg-black/35 lg:w-10/12 xl:w-4/6 py-6 mx-auto min-h-[163px] m-10 overflow-hidden px-10 text-white flex flex-col justify-center items-center font-bold">
                <h1 className="mb-5">Trusted by industry-leading organizations around the world</h1>
                
                <div className="w-full">
                    <div ref={sliderRef} className="partners-carousel">
                        {/* Create multiple sets for smooth infinite scrolling */}
                        {[...Array(4)].map((_, setIndex) => 
                            data.map((item, index) => renderLogo(item, `${setIndex}-${index}`))
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                /* Import Slick CSS */
                @import 'slick-carousel/slick/slick.css';
                @import 'slick-carousel/slick/slick-theme.css';
                
                .partners-carousel {
                    overflow: hidden;
                }
                
                .partners-carousel .slick-track {
                    display: flex !important;
                    align-items: center;
                    transform: translate3d(0, 0, 0);
                }
                
                .partners-carousel .slick-slide {
                    height: auto;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                }
                
                .partners-carousel .slick-slide > div {
                    width: 100%;
                }
                
                /* Hide default slick elements for clean infinite scroll */
                .partners-carousel .slick-dots {
                    display: none !important;
                }
                
                .partners-carousel .slick-arrow {
                    display: none !important;
                }
                
                .partners-carousel .slick-list {
                    overflow: hidden;
                }
                
                /* Ensure smooth hardware-accelerated animation */
                .partners-carousel .slick-track {
                    will-change: transform;
                    backface-visibility: hidden;
                }
            `}</style>
        </>
    );
};

const Partners = () => {
    return (
        <>
        <div className="w-full justify-center items-center hidden sm:flex">
            <PartnersPC />
        </div>
        <div className="w-full flex justify-center items-center sm:hidden">
            <PartnersMobile />
        </div>
        </>
    );
}

export default Partners;