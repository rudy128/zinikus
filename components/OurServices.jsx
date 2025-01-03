import React from 'react'
import RoboHand from '@/app/assets/artificial-intelligence.svg'
import AIRobot from '@/app/assets/robot.svg'
import Image from 'next/image'
import Automatation from '@/app/assets/automated.svg'
import Maintenece from '@/app/assets/maintenance.svg'

const OurServices = () => {
    const data = [
        {
            name: "Robotics Solution",
            image: AIRobot,
            description: `Revolutionize your operations with our advanced robotic solutions. Our expert team designs, 
develops, and implements custom robotic systems tailored to your specific needs. From 
industrial automation to autonomous vehicles, our robotic solutions optimize efficiency, 
increase productivity, and reduce operational costs.`,
        },
        {
            name: "Artificial intelligence integration",
            image: RoboHand,
            description: `Unlock the potential of Artificial Intelligence with our seamless integration services. Our AI 
experts work closely with your team to embed AI capabilities into your existing processes 
and applications. Whether it's machine learning algorithms, natural language processing, or 
computer vision, we empower your business with intelligent insights and automation.`,
        },
        {
            name: "Automation Consulting",
            image: Automatation,
            description: `Navigating the realm of automation can be daunting. Our experienced consultants offer 
strategic guidance to help you make informed decisions. We assess your business 
processes, identify automation opportunities, and develop a roadmap for successful 
implementation, ensuring a smooth transition toward a more efficient future.`,
        },
        {
            name: "Maintenance and Support",
            image: Maintenece,
            description: `We believe in long-term partnerships. Our dedicated maintenance and support services 
ensure that your robotic and AI systems continue to operate at peak performance. Our 
responsive team is ready to address any issues, provide updates, and optimize your 
solutions for sustained success.`,
        },
    ]
  return (
    <div className='bg-[#f2f2f2] h-[1293px] p-10 mb-20'>
        <h1 className='text-4xl font-bold text-center text-[#7e38c4]'>Our Services</h1>
        <div className='flex flex-col justify-around py-10 gap-y-32 items-center'>
            {data.map((item, index)=>(
                <div key={index} className={`flex justify-between w-3/4 items-center ${index%2==0?'ml-64 ':'flex-row-reverse mr-64'}`}>
                    <Image src={item.image} alt='AI-Robot' className='hover:scale-125 transform transition duration-300 ease-in-out' height={180} width={180}/>
                    <div className={`flex flex-col h-[10em] justify-evenly ${index%2==0?"":"items-end text-right"}`}>
                        <h4 className='text-sm font-bold'>{item.name}</h4>
                        <p className='w-[618px] text-sm'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurServices