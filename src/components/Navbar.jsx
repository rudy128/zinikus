import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {navLinks} from '../constants/index'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import styles from '../style'

const Navbar = () => {
    const path = window.location.pathname
    const [toggle, setToggle] = useState(false)
    return (
    <nav className={`${styles.paddingX} border-b rounded-lg ${styles.flexCenter} w-full py-6 sticky z-[100] backdrop-blur-md justify-between `}>
        <img src={logo} className='w-[200px]' alt="Zinikus_logo" />
        <ul className='list-none md:flex hidden justify-center items-center slide-in-right'>
            {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]`}>
                    <a href={`${nav.link}`}>
                        <button className={`p-4 border-[2px] border-gray-700 rounded-lg mx-1 hover:bg-purple-800 ${path===nav.link ? 'bg-purple-800' : ''}`}>{nav.title}</button>
                    </a>
                </li>
            ))}
        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center'>
            <img 
                src={toggle ? close : menu} 
                alt="menu" 
                className='w-[28px] h-[28px] object-contain' 
                onClick={()=> setToggle((prev)=>!prev)}
            />
            <div 
                className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
                        <ul className='list-none w-full h-full flex flex-col gap-y-2 justify-center'>
                            {navLinks.map((nav,index)=>(
                                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]`}>
                                    <a href={`${nav.link}`}>
                                        <button className={`p-4 w-full rounded-md hover:bg-purple-900 ${path===nav.link ? 'bg-purple-800' : ''}`}>{nav.title}</button>
                                    </a>
                                </li>
                            ))}
                        </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar