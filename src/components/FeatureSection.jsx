import React from "react";
import TextUnderCard from "./ui/sectionDescr/TextUnderCard";

const FeatureSection = ({
    bgOval,
    bgOvalStyle,
    cardImg,
    title,
    descr,
    reverseStyle,
    figure,
    styleFigure,
    bgLine,
    cardDescr
}) => {
    return (
        <div className='relative overflow-x-clip'>
            <div className='container-section mx-auto mt-100'>
                <div className={`flex ${reverseStyle} gap-[152px] z-50`}>
                    {/* left */}
                    <div className='w-[705px] h-[397px] flex items-center justify-center bg-white shadow-xl rounded-2xl'>
                        {/* card img */}
                        <img src={cardImg} alt="gif" />
                        {cardDescr && <TextUnderCard />}

                        {/* bg oval */}
                        <img src={bgOval} alt="bg" className={bgOvalStyle} />
                    </div>

                    {/* right */}
                    <div className='max-w-[462px] flex flex-col justify-center'>
                        <h2 className='text-[36px] font-semibold mb-10'>{title}</h2>
                        {descr}
                    </div>
                </div>

                {/* figure */}
                <img src={figure} alt="figure" className={styleFigure} />
                {bgLine}
            </div>
        </div>
    );
};

export default FeatureSection;
