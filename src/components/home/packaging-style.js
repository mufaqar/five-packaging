import React from 'react'
import PackingBox from './packingBox'
import { urlForImage } from '../../../sanity/lib/image'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Packaging_Style({ data }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const slider = React.useRef(null);
    return (
        <section id="box-by-material" className='md:py-16 py-8 md:bg-transparent bg-[#FDF0D5]'>
            <div className='container mx-auto px-4'>
                <div className='md:block hidden'>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        Select Your Custom Packaging Style
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[800px] mx-auto mt-5'>
                        Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques.
                    </p>
                </div>
                <div className='mt-10 relative'>
                    <Slider ref={slider} {...settings} className='h-full'>
                        {
                            data.map((category, i) => (
                                <PackingBox
                                    key={i}
                                    title={category?.name}
                                    content={category?.excerpt}
                                    slug={category?.slug}
                                    img={urlForImage(category?.image.asset._ref).width(306).url()}
                                />
                            ))
                        }
                    </Slider>
                    <button className="absolute md:hidden block top-1/2 left-0 border rounded-full p-1 transform -translate-y-1/2 text-base bg-primary text-white " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                    <button className="absolute md:hidden block top-1/2 right-0 border rounded-full p-1 transform -translate-y-1/2 text-base bg-primary text-white " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
                </div>
            </div>
        </section>
    )
}

export default Packaging_Style