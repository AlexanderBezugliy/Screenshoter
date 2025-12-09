import React from 'react'


const Button = ({ title }) => {
    return (
        <button className='bg-main-gradient font-medium px-10 py-[23px] text-white rounded-xl cursor-pointer hover:scale-105 duration-300'>
            {title}
        </button>
    )
}

export default Button
