import React from 'react'

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
            image: '',
            link: ''
        },
        {
            name:'Instagram',
            image: '',
            link: ''
        },
        {
            name:'Youtube',
            image: '',
            link: ''
        },
        {
            name:'Twitter',
            image: '',
            link: ''
        },
        {
            name:'Linkedin',
            image: '',
            link: ''
        }
    ]
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className='bg-black/5 h-[539.96px] flex flex-col justify-end gap-y-20 items-end px-20'>
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
            <div className='h-[92px] w-full border-t-2 border-black flex justify-between items-center'>
                <div className='flex gap-x-4 justify-between items-center'>
                    {socialMedia.map((item,index)=>(
                        <div key={index}>{item.name}</div>
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