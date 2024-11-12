import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import infotech from '../assets/infotech.png'
import agility from '../assets/agility.png'
import startupnews from '../assets/startupnews.png'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full purple__gradient' />
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className={styles.heading2}>What People are <br className='sm:block hidden' /> saying about us</h1>
            <div className='w-full md:mt-0 mt-6'>
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>Our robotics solutions empower industry leaders to enhance efficiency and drive innovation across sectors.</p>
            </div>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            {feedback.map((card)=>(
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section> 
  )
}

const FeedbackCard = ({content,name,title,img}) => (
    <div className='flex border-2 border-gray-700 justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedbcak-card'>
        <img src='' alt="feedback_quotes" className='w-[42px] h-[27px] object-contain' />
        <p className='font-poppins font-normal text-[18px] leading-[32px] my-10'>{content}</p>

        <div className='flex flex-row'>
            <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />

            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">{name}</h4>
                <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
            </div>
        </div>
    </div>
)

const Partners = ()=>{
    const clients = [
        {
          id: "client-1",
          logo: infotech,
        },
        {
          id: "client-2",
          logo: agility,
        },
        {
          id: "client-3",
          logo: startupnews,
        },
    ];
    return (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client)=>(
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                    <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain' />
                </div>
            ))}
        </div>
    </section>
    )
}

export {Partners,Testimonials}