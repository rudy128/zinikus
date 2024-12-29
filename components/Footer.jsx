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
                {
                    name:'Products',
                    link: ''
                },
                {
                    name:'Solutions',
                    link: ''
                },
                {
                    name:'Innovation',
                    link: ''
                },
                {
                    name:'About',
                    link: ''
                },
                {
                    name:'Contact Sales',
                    link: ''
                }
            ]
        },
        {
            header: 'HELPFUL LINKS',
            links: [
                {
                    name:'FAQ',
                    link: ''
                },
                {
                    name:'Merch Store',
                    link: ''
                },
                {
                    name:'Support',
                    link: ''
                },
                {
                    name:'Partners',
                    link: ''
                },
                {
                    name:'Press Inquiries',
                    link: ''
                }
            ]
        },
        {
            header: 'Resources',
            links: [
                {
                    name:'Case Studies',
                    link: ''
                },
                {
                    name:'Webinars',
                    link: ''
                },
                {
                    name:'Blogs',
                    link: ''
                },
                {
                    name:'Whitepapers',
                    link: ''
                },
                {
                    name:'Events',
                    link: ''
                },
                {
                    name:'Videos',
                    link: ''
                }
            ]
        }
    ]
    const socialMedia = [
        {
            name:'Facebook',
            image: Facebook,
            link: 'https://facebook.com'
        },
        {
            name:'Instagram',
            image: Instagram,
            link: 'https://instagram.com'
        },
        {
            name:'Youtube',
            image: Youtube,
            link: 'https://youtube.com'
        },
        {
            name:'Twitter',
            image: Twitter,
            link: 'https://twitter.com'
        },
        {
            name:'Linkedin',
            image: Linkedin,
            link: 'https://linkedin.com'
        }
    ]
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className='bg-black/5 h-[539.96px] flex flex-col justify-end gap-y-20 items-end px-20'>
            <div className='flex w-full justify-between items-center'>
                <Image src={logo} alt='logo' width={200} />
                <div className='w-1/2 flex justify-between items-start'>
                    {data.map((item, index) => (
                        <div key={index} className='space-y-5'>
                            <h3 className='text-[#8428E0] font-bold'>{item.header}</h3>
                            {item.links.map((item,index)=>(
                                <h4 key={index} className='text-[#5F697C]'>{item.name}</h4>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='h-[92px] w-full border-t-2 border-black flex justify-between items-center'>
                <div className='flex gap-x-4 justify-between items-center'>
                    {socialMedia.map((item,index)=>(
                        <Link key={index} href={item.link}>
                            <Image src={item.image} alt={item.name}/>
                        </Link>
                    ))}
                </div>
                <h1 className=''>©{year} Zinikus. All rights reserved.</h1>
                <div className='flex text-[#8428E0] font-medium gap-x-4 justify-center items-center'>
                    <h2>Privacy Policy</h2>
                    <h2>Terms of Use</h2>
                    <h2>Ethics Statement</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer