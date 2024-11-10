import React from 'react'
import styles from '../style'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import logo from '../assets/logo.png'
import { footerLinks } from '../constants'

export const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    const socialMedia = [
        {
          id: "social-media-1",
          icon: instagram,
          link: "https://www.instagram.com/",
        },
        {
          id: "social-media-2",
          icon: facebook,
          link: "https://www.facebook.com/",
        },
        {
          id: "social-media-3",
          icon: twitter,
          link: "https://www.twitter.com/",
        },
        {
          id: "social-media-4",
          icon: linkedin,
          link: "https://www.linkedin.com/",
        },
    ];
    return (
        <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <img src={logo} alt="zinikus" className='w-[266px] h-[120px]' />
                    <p className={`${styles.paragraph} my-6 mt-1 max-w-[310px]`}>Shaping the future with innovative robotics solutions that drive efficiency, safety, and sustainability.</p>
                    <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                        {footerLinks.map((footerLink)=>(
                            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                                <h4 className='font-poppins font-medium text-[18px] leading-[27px]'>{footerLink.title}</h4>
                                <ul className='list-none mt-4'>{footerLink.links.map((link,index)=>(
                                    <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' :'mb-0'}`}>{link.name}</li>
                                ))}</ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] botder-t-[#3f3r45]'>
                <p className='font-poppins font-normal text-center text-[18px] leading-[27px]'><span>{year}</span> Zinikus. All Rights Reserved.</p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social,index)=>(
                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} />
                    ))}
                </div>
            </div>
        </footer>
    )
}
