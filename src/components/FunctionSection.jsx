import React from 'react'
import FeatureSection from './FeatureSection';


 


// const FunctionSection = () => {
//     return (
//         <div className='relative overflow-x-clip'>
//             <div className='container-section mx-auto mt-100'>
//                 <div className='flex gap-[152px] z-50'>
//                     {/* left */}
//                     <div className='w-[705px] h-[397px] flex items-center justify-center bg-white shadow-xl rounded-2xl'>
//                         <img src="/img/gif.png" alt="gif" />
//                         {/* bg */}
//                         <div className='absolute -top-35 left-0 backdrop-blur-lg bg-sectione-gradient rounded-2xl w-[803px] h-[650px] -z-10'></div>
//                     </div>
                    
//                     {/* right */}
//                     <div className='max-w-[462px]'>
//                         <h2 className='text-[36px] font-semibold mb-10'>Запись экрана</h2>

//                         <p className='whitespace-pre-line'>
//                             {`Недостаточно снимков? Запишите происходящее 
//                                 на экране со своим голосом или звуком системы. 


//                             `}
//                             <span className='text-[#7421B0]'>Достаточно нажать две кнопки мыши, </span>
//                             {`выделить необходимую область и начнется запись видео с экрана. Быстро и без сложных настроек`}
//                         </p>
//                     </div>
//                 </div>

//                 {/* circle */}
//                 <img src="/img/big-circle.png" alt="bg-img" className='absolute object-cover -top-80 -left-23 z-10' />
                
//                 <div className='absolute -top-80 -left-23 w-[2270px] h-[565px] rounded-full overflow-hidden -z-20'>
//                     <img src="/img/line-second.png" alt="line" className='absolute -top-30 left-10 max-w-[2270px] h-auto object-cover' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FunctionSection

// const FunctionSection = () => {
//     return (
//         <div className='relative overflow-x-clip'>
//             <div className='container-section mx-auto mt-100'>
//                 <div className='flex flex-row-reverse gap-[152px] z-50'>
//                     {/* left */}
//                     <div className='w-[705px] h-[397px] flex items-center justify-center bg-white shadow-xl rounded-2xl'>
//                         <img src="/img/gif.png" alt="gif" />
//                         {/* bg */}
//                         <img src="/img/seconds-section/ellipse.png" alt="bg" className='absolute -top-80 -right-117 -z-10' />
//                     </div>
                    
//                     {/* right */}
//                     <div className='max-w-[462px] overflow-x-clip'>
//                         <h2 className='text-[36px] font-semibold mb-10'>В один клик</h2>

//                         <p className='whitespace-pre-line'>
//                             {`Недостаточно снимков? Запишите происходящее 
//                                 на экране со своим голосом или звуком системы. 


//                             `}
//                             <span className='text-[#7421B0]'>Достаточно нажать две кнопки мыши, </span>
//                             {`выделить необходимую область и начнется запись видео с экрана. Быстро и без сложных настроек`}
//                         </p>
//                     </div>
//                 </div>

//                 {/* cube */}
//                 <div className=''> 
//                     <img
//                         src="/img/seconds-section/cube-purple.png"
//                         alt="cube-front"
//                         className='absolute object-cover -top-61.5 right-87 -rotate-1 -z-20 pointer-events-none'
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FunctionSection

const FunctionSection = () => {
    return (
        <div className='relative overflow-x-clip'>
            <div className='container-section mx-auto mt-100'>
                <div className='flex gap-[152px] z-50'>
                    {/* left */}
                    <div className='w-[705px] h-[397px] flex items-center justify-center bg-white shadow-xl rounded-2xl'>
                        <img src="/img/gif.png" alt="gif" />
                        {/* bg */}
                        <img src="/img/seconds-section/elipse2.png" alt="bg" className='absolute -top-40 -left-60 scale-97 -z-10' />

                        <div className='absolute -bottom-30 w-[461px] h-[168px] px-10 py-[30px] backdrop-blur-2xl rounded-2xl'>
                            <p className='text-[#828282]'>
                                <span className='text-black'>Файлы хранятся в течение 1 года</span> с момента
                                создания. Можно их удалять самостоятельно.
                                В истории программы доступны
                                последние 5 скриншотов
                            </p>
                        </div>
                    </div>
                    
                    {/* right */}
                    <div className='max-w-[462px] flex flex-col justify-center'>
                        <h2 className='text-[36px] font-semibold mb-10'>Мгновенная ссылка</h2>

                        <p className='text-[18px] text-gray-500 leading-[180%]'>
                            Мгновенное получение ссылки на снимок
                            или видео. Вы только нажали Enter, а ссылка уже
                            в буфере обмена. Перейдя по ссылке, можно будет посмотреть ваш снимок или записанное видео
                        </p>
                    </div>
                </div>

                {/* diamond */}
                <img src="/img/seconds-section/cube-glossy.png" alt="cube" className='absolute object-cover -top-80 left-1 -z-40' />
            </div>
        </div>
    )
}

export default FunctionSection


