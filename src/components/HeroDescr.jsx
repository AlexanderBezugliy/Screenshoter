import React from 'react'
import Cards from './ui/Cards'
import SecondTitle from './ui/SecondTitle'




const HeroDescr = () => {
    return (
        <section className='container-section mx-auto  flex flex-col gap-5 heroDesr-sm:gap-20 '>
            {/* title */}
            <div className='flex flex-col items-center heroDesr-sm:items-start heroDesr-sm:flex-row justify-between px-3 heroDesr-md:px-0 heroDesr-md:justify-center heroDesr-xxl:justify-start gap-0 heroDesr-md:gap-[90px] heroDesr-xxl:gap-[135px]'>
                <div className='max-w-[550px]'>
                    <SecondTitle 
                        title={<>Встречайте—скриншоты <br/> и запись экрана</>} 
                        spanText='2 в 1'
                    />
                </div>

                <p className='inline-block pt-5 heroDesr-sm:pt-0 text-[12px] heroDesr-xl:text-[18px] text-[#828282] text-center heroDesr-sm:text-start max-w-[320px] heroDesr-xl:max-w-[575px] max-h-[169px]'>
                    Больше не нужно искать две отдельные программы для скриншотов и записи экрана. Screenshoter поможет сделать <strong className='text-black'>снимок экрана, записать видео и поделиться</strong> им <strong className='text-black'>с кем угодно.</strong> Можно выделить весь экран, определенную область или активное окно
                </p>
            </div>

            {/* cards */}
            <Cards  />
        </section>
    )
}

export default HeroDescr
