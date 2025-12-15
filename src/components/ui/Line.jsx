import React from 'react'



const Line = ({ coordinates }) => {
    return (
        <div className={`absolute ${coordinates} w-[2270px] h-[565px] rounded-full overflow-hidden -z-30`}>
            <img 
                src="/img/line-second.png" 
                alt="line" 
                className='absolute -top-30 left-10 max-w-[2270px] h-auto object-cover' 
            />
        </div>
    )   
}

export default Line
