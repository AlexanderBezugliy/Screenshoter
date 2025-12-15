import React from 'react'



const TextUnderCard = () => {
    return (
        <div className='absolute -bottom-30 w-[461px] h-[168px] px-10 py-[30px] backdrop-blur-2xl rounded-2xl'>
            <p className='text-[#828282]'>
                <span className='text-black'>Файлы хранятся в течение 1 года</span> с момента
                создания. Можно их удалять самостоятельно.
                В истории программы доступны
                последние 5 скриншотов
            </p>
        </div>
    )
}

export default TextUnderCard;
