import React from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

const Featured_Posts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
        <div className='relative'>
            <Slider ref={slider} {...settings} className='h-full'>
                {
                    [0, 1, 2, 3, 4].map((item, idx) => (
                        <div key={idx} className='md:pr-10'>
                            <Image src="/images/make-product.png" alt='make-product' width={793} height={472} className='w-full' />
                            <div className='mt-3'>
                                <Link href="#" className='md:text-2xl text-sm font-medium text-white text-center block w-fit mx-auto'>
                                    Lorem ipsum dolor sit amet
                                </Link>
                                <p className='md:text-base text-xs font-medium text-white text-center'>
                                    2 comments . DEC 19, 2024
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <button className="absolute md:hidden block top-1/2 left-0 border rounded-full p-1 transform -translate-y-1/2 text-base bg-primary text-white " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
            <button className="absolute md:hidden block top-1/2 right-0 border rounded-full p-1 transform -translate-y-1/2 text-base bg-primary text-white " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
        </div>
    )
}

export default Featured_Posts