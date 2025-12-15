import React from 'react'
import Title from './ui/Title'
import Cards from './ui/Cards'




const HeroDescr = () => {
    return (
        <section className='container-section mx-auto  flex flex-col gap-20 '>
            {/* title */}
            <div className='flex gap-[135px]'>
                <div className='max-w-[550px]'>
                    <Title 
                        title={<>Встречайте—скриншоты <br/> и запись экрана</>} 
                        spanText='2 в 1'
                    />
                </div>

                <p className='inline-block text-[18px] text-[#828282] max-w-[575px] max-h-[169px]'>
                    Больше не нужно искать две отдельные программы для скриншотов и записи экрана. Screenshoter поможет сделать <strong className='text-black'>снимок экрана, записать видео и поделиться</strong> им <strong className='text-black'>с кем угодно.</strong> Можно выделить весь экран, определенную область или активное окно
                </p>
            </div>

            {/* cards */}
            <Cards  />
        </section>
    )
}

export default HeroDescr
