import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Facebook from '@/app/assets/facebook.svg'
import Instagram from '@/app/assets/instagram.svg'
import Youtube from '@/app/assets/youtube.svg'
import Twitter from '@/app/assets/twitter.svg'
import Linkedin from '@/app/assets/linkedin.svg'
import logo from '@/app/assets/logo.svg'

const Footer = () => {
    const data = [
        {
            header: 'NAVIGATION',
            links: [
                { name:'Products', link: '' },
                { name:'Solutions', link: '' },
                { name:'Innovation', link: '' },
                { name:'About', link: '' },
                { name:'Contact Sales', link: '' }
            ]
        },
        {
            header: 'HELPFUL LINKS',
            links: [
                { name:'FAQ', link: '' },
                { name:'Merch Store', link: '' },
                { name:'Support', link: '' },
                { name:'Partners', link: '' },
                { name:'Press Inquiries', link: '' }
            ]
        },
        {
            header: 'Resources',
            links: [
                { name:'Case Studies', link: '' },
                { name:'Webinars', link: '' },
                { name:'Blogs', link: '' },
                { name:'Whitepapers', link: '' },
                { name:'Events', link: '' },
                { name:'Videos', link: '' }
            ]
        }
    ]

    const socialMedia = [
        { name:'Facebook', image: Facebook, link: 'https://facebook.com' },
        { name:'Instagram', image: Instagram, link: 'https://instagram.com' },
        { name:'Youtube', image: Youtube, link: 'https://youtube.com' },
        { name:'Twitter', image: Twitter, link: 'https://twitter.com' },
        { name:'Linkedin', image: Linkedin, link: 'https://linkedin.com' }
    ]

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className='bg-black/5 h-auto py-5 flex flex-col gap-y-10 items-center px-4 sm:px-10 lg:px-20'>
            {/* Logo and Navigation */}
            <div className='w-full flex flex-col sm:flex-row justify-between items-start gap-y-10 sm:gap-y-0'>
                <Image src={logo} alt='logo' width={200} height={80} />
                <div className='w-full sm:w-2/3 flex flex-col sm:flex-row justify-evenly gap-y-20 mt-10 sm:mt-0'>
                    {data.map((item, index) => (
                        <div key={index} className='space-y-5'>
                            <h3 className='text-[#8428E0] font-bold'>{item.header}</h3>
                            {item.links.map((link, idx) => (
                                <h4 key={idx} className='text-[#5F697C]'>
                                    <Link href={link.link}>{link.name}</Link>
                                </h4>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Media Icons and Footer Text */}
            <div className='min-h-[92px] w-full border-t-2 border-black flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0'>
                <div className='flex gap-x-4 py-5 justify-center sm:justify-start items-center'>
                    {socialMedia.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <Image src={item.image} alt={item.name} width={24} height={24} />
                        </Link>
                    ))}
                </div>

                <h1 className='text-center sm:text-left'>
                    ©{year} Zinikus. All rights reserved.
                </h1>

                <div className='flex flex-wrap justify-center sm:justify-start text-[#8428E0] font-medium gap-x-4 items-center'>
                    <Link href='/privacy-policy'><h2 className='cursor-pointer'>Privacy Policy</h2></Link>
                    <Link href='/terms-of-use'><h2 className='cursor-pointer'>Terms of Use</h2></Link>
                    <Link href='/ethics-statement'><h2 className='cursor-pointer'>Ethics Statement</h2></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
