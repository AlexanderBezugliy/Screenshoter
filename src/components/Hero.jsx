import React from 'react'
import Button from './ui/Button'

const Hero = () => {
    return (
        <div className='relative w-full mt-15 hero-xl:mt-40  overflow-x-clip'>
            <div className='grid gap-5 hero-md:gap-25 hero-xl:gap-0 hero-xl:grid-cols-2 owerflow-hidden'>
                {/* left side */}
                <div className='relative mx-auto hero-md:ml-60'>
                    <img src="/img/hero/hero-circle.png" alt="circle" className='absolute hero-xl:-top-47 -left-20 hero-md:-left-85 -z-10' />

                    <h1 className='font-bold text-3xl hero-sm:text-4xl text-center hero-md:text-start hero-xxl:text-[49px] leading-[55px]'>
                        Делайте снимки <br /> и записывайте экран
                        <span className='w-[212px] bg-[url("/img/hero/hero-bg.png")] bg-no-repeat bg-center inline-block pl-1.5 text-[#7421B0]'>в 1 клик </span>
                    </h1>

                    <p className='mx-auto hero-md:mx-0 max-w-[340px] hero-sm:max-w-[460px] mt-6 hero-sm:mt-[37px] mb-5 hero-xxl:mb-20 text-[14px] hero-sm:text-[18px] text-gray-400'>Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК,  чтобы поделиться с кем угодно</p>
                    
                    <div className='flex justify-center hero-md:block'>
                        <Button title='Скачать бесплатно' />
                    </div>
                    
                </div>

                {/* right side */}
                <div className='relative flex justify-center hero-xl:block'>
                    <img src="/img/hero/hero-screen.png" alt="hero-screen" className='hero-sm:max-w-[450px] hero-md:max-w-[548px] hero-xxl:max-w-[848px] hero-xxl:max-h-[477px] object-cover' />
                    {/* bg */}
                    <div className='hidden hero-md:block absolute -top-[88px] right-0 bg-main-gradient w-screen h-[27vh] hero-md:w-[600px] hero-md:h-[500px] hero-xxl:w-[800px] hero-xxl:h-[740px] hero-md:rounded-l-[70px] -z-10'/>
                    {/* free program */}
                    <div className='absolute bottom-5 right-20 hero-md:right-50 hero-xxl:-bottom-18 hero-xxl:right-77 px-4 py-4 hero-xxl:px-[50px] hero-xxl:py-7 rounded-2xl text-white backdrop-blur-xl border border-gray-400'>
                        <p>Бесплатная программа <br /> для Windows</p>
                    </div>
                </div>
            </div>
            
            {/* arrow down */}
            <div className='container-section'>
                <button><img src="/img/arrow-down.png" alt="arrow-down" className='mt-[30px] hero-md:mt-[130px] cursor-pointer hero-md:hover:scale-110 rounded-full p-2 hero-md:hover:bg-main-gradient transition-all duration-300' /></button>
            </div>

            {/* bg - line */}
            <div className='container-section mx-auto overflow-hidden'>
                <img src="/img/line.png" alt="line" className='absolute -top-70 hero-xxl:-top-22 -left-22 max-w-[2270px] h-auto object-cover overflow-hidden -z-10' />
            </div>
        </div>
    )
}

export default Hero