import React from 'react'
import { cardsHero } from '../../assets'

const Cards = () => {
    return (
        <div className='mx-auto grid heroDesr-sm:grid-cols-2 heroDesr-xxl:grid-cols-4 gap-5 heroDesr-sm:gap-8 heroDesr-xxl:gap-7'>
            {cardsHero.map((card) => (
                <div 
                    key={card.id} 
                    className=' heroDesr-sm:w-[338px] heroDesr-sm:h-[294px] flex heroDesr-sm:flex-col gap-10 shadow-lg rounded-2xl py-[27px] px-[52px] heroDesr-sm:px-[26px] heroDesr-sm:p-[58px] cursor-pointer group
                        transition-all duration-300 ease-in-out
                        hover:scale-105 
                        hover:bg-[rgba(116,33,176,1)] 
                        hover:text-white'
                >
                    <img src={card.img} alt="icon" className='w-10 h-10 heroDesr-sm:w-20 heroDesr-sm:h-20' />

                    <p className='grow max-w-[130px] heroDesr-sm:max-w-[185px] text-[14px] heroDesr-sm:text-[20px] font-medium'>{card.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards
