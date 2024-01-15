import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';

function Testimonials({ data }: any) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <section className='md:py-16 py-8 bg-darkBlue relative'>
            <div className='container mx-auto px-4'>
                <div className=''>
                    <Slider ref={slider} {...settings} className='h-full'>
                        {
                            data?.map((t: any, i: number) => {
                                return (
                                    <div key={i} className='px-2'>
                                        <div className='bg-white py-14 lg:px-12 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
                                            <div>
                                                <h3 className='text-xl font-semibold text-title_Clr mb-4'>
                                                    {t.name}
                                                </h3>
                                                <p className='text-base font-normal text-txt_Clr'>
                                                    {t.review}
                                                </p>
                                            </div>
                                            <ul className='flex gap-1.5 mt-5'>
                                                <li>
                                                    <FaStar className="text-orange-400" />
                                                </li>
                                                <li>
                                                    <FaStar className="text-orange-400" />
                                                </li>
                                                <li>
                                                    <FaStar className="text-orange-400" />
                                                </li>
                                                <li>
                                                    <FaStar className="text-orange-400" />
                                                </li>
                                                <li>
                                                    <FaStar className="text-orange-400" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <button className="absolute md:hidden block top-1/2 left-4 rounded-full p-1 transform -translate-y-1/2 text-base bg-primary text-white " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                    <button className="absolute md:hidden block top-1/2 right-4 rounded-full p-1 transform -translate-y-1/2 text-base bg-primary text-white " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials