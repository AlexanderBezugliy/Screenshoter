import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


const Language = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('RU');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsOpen(false);
    }

    return (
        <div className='relative'>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className='flex items-center gap-1 cursor-pointer'
            >
                <span>{language}</span>
                <IoIosArrowDown className={`transition-transform duration-300 
                    ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>

            {isOpen && (
                <div className="absolute top-8 -right-4 w-[81px] h-[70px] py-1 border border-gray-200 shadow-lg rounded-md flex flex-col items-center z-10">
                    {/* ru */}
                    <div 
                        onClick={() => handleLanguageChange('RU')}
                        className={`cursor-pointer w-full text-center hover:bg-gray-100 
                            ${language === 'RU' ? 'text-gray-400' : 'text-black'}`}
                    >
                        RU
                    </div>
                    
                    <div className="w-14 h-px bg-gray-200 my-1" />
                    {/* ENG */}
                    <div 
                        onClick={() => handleLanguageChange('ENG')}
                        className={`cursor-pointer w-full text-center hover:bg-gray-100 
                            ${language === 'ENG' ? 'text-gray-400' : 'text-black'}`}
                    >
                        ENG
                    </div>
                </div>
            )}
        </div>
    )
}

export default Language
