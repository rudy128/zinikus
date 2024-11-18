import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../style'
import zeno from '../assets/zeno.jpg'
import zini from '../assets/zini.jpg'
import zoro from '../assets/zoro.jpg'
import zarm from '../assets/zarm.png'

const ProductPage = () => {
    const products = [
        {
            id:1,
            name:'Zeno',
            img: zeno,
            link: '/products/zeno',
            description: 'Your Ultimate LOBBY ROBOT from ZINIKUS'
        },
        {
            id:2,
            name:'Zini',
            img: zini,
            link: '/products/zini',
            description: 'The Reception Robot - ZINI'
        },
        {
            id:3,
            name:'Zoro',
            img: zoro,
            link: '/products/zoro',
            description: 'Your Ultimate Butler/Delivery Robot from ZINIKUS'
        },
        {
            id:4,
            name:'Z-ARM',
            img: zarm,
            link: '/products/zarm',
            description: 'Your Ultimate ROBOTIC ARM from ZINIKUS'

        },
    ]
    return (
        <div className={`${styles.paddingX} bg-primary`}>
            <Navbar />
            <div className='w-full pt-12 pl-12 space-y-12 h-full'>
                <h1 className={`${styles.heading2} text-gradient xs:text-[60px]`}>Our Products</h1>
                <div className='w-full px-12 pt-32 flex flex-wrap gap-16 h-full min-h-[50rem]'>
                    {products.map((product, index)=>(
                        <ProductCard key={product.id} {...product} />
                    ))}

                </div>
                {/* <ProductCard key={products[3].id} {...products[3]} /> */}
            </div>
            <Footer />
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const ProductCard = ({name,img,link,description}) =>{
    return(
        <article className='w-[300px] border-2 border-gray-700 card_article h-[400px] flex flex-col justify-end items-center group rounded-xl'>
            <div className='overflow-hidden'>
                <img src={img} alt="" className='card_img' />

            </div>
            <div className='card_data bg-white/55 backdrop-blur-xl rounded-xl w-11/12'>
            <h2 className={`${styles.heading2} xs:text-[40px] xs:text-black w-fit`}>{name}</h2>
            <p className={`${styles.paragraph} w-fit text-sm xs:text-black`}>{description}</p>
            <a href={link} className='card_button text-sm text-secondary'>Read More</a>
            </div>
        </article>
    )
}

export default ProductPage