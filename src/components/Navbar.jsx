import React, { useState } from 'react'

import Language from './ui/Language';
import { navItems } from '../assets';
import Sidebar from './ui/Sidebar';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    return (
        <nav className='container-section'>
            <div className='font-medium flex nav-xl:flex-col nav-xxl:flex-row justify-between items-center gap-7 nav-xxl:gap-0 my-4 nav-xl:my-[50px]'>
                {/* logo */}
                <div>
                    <img src="/img/logo.png" alt="logo" className="hidden nav-xl:block" />
                    <img src="/img/logo-mini.png" alt="logo-mini" className="block nav-xl:hidden" />
                </div>
                
                {/* nav list */}
                <div className='hidden nav-xl:flex gap-7 nav-xxl:gap-[60px]'>
                    <ul className='flex gap-7 nav-xxl:gap-[60px] '>
                        {navItems.map((item, index) => (
                            <li 
                                key={index} 
                                className='cursor-pointer hover:text-gray-600 transition-colors duration-300'
                            >
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* language */}
                    <Language />
                </div>
                
                {/* burger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className='block nav-xl:hidden'>
                    <img src="/img/burger.svg" alt="burger" />
                </button>

                {/* sidebar */}
                <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </div>
        </nav>
    )
}

export default Navbar
