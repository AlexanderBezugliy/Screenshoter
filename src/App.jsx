import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroDescr from './components/HeroDescr'
import FeatureSection from './components/FeatureSection'
import { DescrFour, DescrOne, DescrThree, DescrTwo } from './components/ui/sectionDescr/Description'
import Line from './components/ui/Line'

const App = () => {
    return (
        <>
            <Navbar />

            <Hero />
            <HeroDescr />
            
            {/* <FeatureSection 
                bgOval="/img/seconds-section/rectangle.png"
                bgOvalStyle='absolute -top-30 -left-22 -z-10'
                cardImg='/img/gif.png'
                title='Запись экрана'
                descr={<DescrOne />}
                figure='/img/big-circle.png'
                styleFigure='absolute object-cover -top-66 -left-23 -z-20'
                bgLine={<Line coordinates='-top-80 -left-41' />}
            /> */}
            {/* <FeatureSection 
                bgOval="/img/seconds-section/ellipse.png"
                bgOvalStyle='absolute -top-80 -right-117 -z-10'
                cardImg='/img/gif.png'
                reverseStyle='flex-row-reverse'
                title='В один клик'
                descr={<DescrTwo />}
                figure='/img/seconds-section/cube-purple.png'
                styleFigure='absolute object-cover -top-61.5 right-87 -rotate-1 -z-20 pointer-events-none'
            /> */}
            {/* <FeatureSection 
                bgOval="/img/seconds-section/elipse2.png"
                bgOvalStyle='absolute -top-40 -left-60 scale-97 -z-10'
                cardImg='/img/gif.png'
                title='Мгновенная ссылка'
                descr={<DescrThree />}
                figure='/img/seconds-section/cube-glossy.png'
                styleFigure='absolute object-cover -top-80 left-1 -z-20 pointer-events-none'
                cardDescr={true}
            /> */}
            {/* <FeatureSection 
                bgOval="/img/seconds-section/rectangle2.png"
                bgOvalStyle='absolute -top-30 -right-22 -z-10'
                cardImg='/img/gif.png'
                reverseStyle='flex-row-reverse'
                title='И редактор снимков'
                descr={<DescrFour />}
                figure='/img/seconds-section/circle-purple.png'
                styleFigure='absolute object-cover -top-66 right-73.5 -z-20'
                bgLine={<Line coordinates='-bottom-110 right-36 scale-125 rotate-20' />}
            /> */}
            
        </>
    )
}

export default App
