import Image from 'next/image'
import React from 'react'
import HandGearIcon from '@/app/assets/hand-gear.svg'
import FollowUSIcon from '@/app/assets/follow-us.png'
import Facebook from '@/app/assets/facebook.svg'
import Instagram from '@/app/assets/instagram.svg'
import Youtube from '@/app/assets/youtube.svg'
import Twitter from '@/app/assets/twitter.svg'
import Linkedin from '@/app/assets/linkedin.svg'
import Link from 'next/link'

const Info = () => {
  return (
    <div className='h-[1060px] px-10 xl:px-32 py-32 space-y-6'>
        <h1 className='text-4xl font-bold'>Start your journey with Zeno</h1>
        <p className=''>Zeno is an agile mobile robot that enables safer, more efficient and more<br />
predictable operations. Contact our expert sales team today to find the right<br />
implementation to meet your application needs and start your journey to<br />
a simple, scalable robotics solution.</p>
<p className='text-[#828181]'><span className='font-semibold'>For Stretch inquiries</span>, please reach out to our <a href="" className='underline'>Stretch Sales</a> team.</p>
<p className='text-[#828181]'><span className='font-semibold'>To contact our media team</span>, please see <a href="" className='underline'>Press Inquiries</a>.</p>
<div className='space-y-2 border-b border-black pb-5 w-fit'>
    <div className='flex gap-x-4 items-end'>
    <Image src={HandGearIcon} alt='Hand-Gear-Icon' />
    <h3 className='text-sm font-bold'>Customer Support</h3>
    </div>
    <div className=' grid grid-cols-2 grid-rows-2'>
            <p className='text-[#5F5F5F] text-sm pl-[58px]'>adi@zinikus.com</p>
            <p className='text-[#5F5F5F] text-sm pl-[29px]'>+91 9810031799</p>
            <p className='text-[#5F5F5F] text-sm pl-[58px]'>tanay@zinikus.com</p>
            <p className='text-[#5F5F5F] text-sm pl-[29px]'>+91 7011995400</p>
    </div>
</div>
<div className='space-y-5 border-b border-black pb-5 w-fit pr-[75px]'>
    <div className='flex gap-x-4 items-end'>
    <Image src={FollowUSIcon} alt='Hand-Gear-Icon' />
    <h3 className='text-sm font-bold'>Follow Us</h3>
    </div>
    <div className='flex px-[56px] gap-x-5'>
        {/* <Link href="https://facebook.com">
            <Image src={Facebook} alt='Facebook' />
        </Link> */}
        <Link href='https://www.instagram.com/zinikus/'>
            <Image src={Instagram} alt='Instagram' />
        </Link>
        <Link href='https://www.youtube.com/@ZinikusAI'>
            <Image src={Youtube} alt='Youtube' />
        </Link>
        <Link href='https://x.com/ZinikusAI'>
            <Image src={Twitter} alt='Twitter' />
        </Link>
        <Link href='https://www.linkedin.com/company/zinikus-ai/'>
            <Image src={Linkedin} alt='Linkedin' />
        </Link>
    </div>
</div>
    </div>
  )
}

export default Info