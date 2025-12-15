import React from 'react'


const Title = ({ title, styles, spanText }) => {
    return (
        <h2 className={`${styles} font-bold text-3xl hero-sm:text-4xl text-center hero-md:text-start hero-xxl:text-[43px] leading-[55px]`}>{title}
            <span className='text-[#7421B0]'> {spanText}</span>
        </h2>
    )
}

export default Title
