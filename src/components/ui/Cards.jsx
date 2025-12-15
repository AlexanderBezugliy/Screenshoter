import React from 'react'
import { cardsHero } from '../../assets'

const Cards = () => {
    return (
        <div className='flex justify-between'>
            {cardsHero.map((card) => (
                <div 
                    key={card.id} 
                    className='w-[338px] h-[294px] flex gap-10 flex-col shadow-lg rounded-2xl p-[58px] cursor-pointer group
                        transition-all duration-300 ease-in-out
                        hover:scale-105 
                        hover:bg-[rgba(116,33,176,1)] 
                        hover:text-white'
                >
                    <img src={card.img} alt="icon" className='object-cover w-20 h-auto' />

                    <p className='grow max-w-[185px] text-[20px] hover:переменная'>{card.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards
