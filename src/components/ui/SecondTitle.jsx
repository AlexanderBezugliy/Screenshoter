import React from 'react'

const SecondTitle = ({ title, spanText }) => {
    return (
        <>
            <h2 className='text-[20px] heroDesr-xl:text-[24px] heroDesr-xxl:text-[36px] font-semibold'>
                {title}
                <span className='text-[#7421B0]'> {spanText}</span>
            </h2>  
        </>
    )
}

export default SecondTitle
