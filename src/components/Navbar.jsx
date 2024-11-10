import React from 'react'
import logo from '../assets/logo.png'
import {navLinks} from '../constants/index'

const Navbar = () => {
    return (
    <nav className='w-full flex py-6 sticky z-[10] backdrop-blur-md justify-between items-center'>
        <img src={logo} className='w-[200px]' alt="Zinikus_logo" />
        <ul className='list-none sm:flex hodden justify-center items-center flex-1'>
            {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]`}>
                    <a href={`#${nav.id}`}>
                        <button className='p-4 border-[2px] rounded-full mx-1 hover:bg-purple-800'>{nav.title}</button>
                    </a>
                </li>
            ))}
        </ul>
        <button className={`bg-purple-800 rounded-full p-4 hover:bg-purple-900`}>Get in Touch!</button>
    </nav>
  )
}

export default Navbar