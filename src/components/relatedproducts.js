import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
const PrevArrow = ({ onClick }) => (
    <button className="block md:text-[40px] rounded-full p-1 text-[25px] md:text-[#0E4D66] text-white bg-blue-500 absolute top-1/2 left-0 transform -translate-y-1/2 z-10" onClick={onClick}><HiArrowCircleLeft /></button>
);

const NextArrow = ({ onClick }) => (
    <button className="block md:text-[40px] rounded-full text-[25px] p-1  md:text-[#0E4D66] text-white bg-blue-500 absolute top-1/2 right-0 transform -translate-y-1/2 z-10" onClick={onClick}><HiArrowCircleRight /></button>
);
const RelatedProducts = () => {
    const data = [
        {
            title: "DISPLAY BOXES",
            img: "/images/relatedproducts/image 19.jpg"
        },
        {
            title: "BEVERAGE BOXES",
            img: "/images/relatedproducts/image 20.jpg"
        },
        {
            title: "ECO FRIENDLY BOXES",
            img: "/images/relatedproducts/image 21.jpg"
        },
        {
            title: "GIFT BOXES",
            img: "/images/relatedproducts/image 22.jpg"
        },
        {
            title: "BEVERAGE BOXES",
            img: "/images/relatedproducts/image 20.jpg"
        },
        {
            title: "DISPLAY BOXES",
            img: "/images/relatedproducts/image 20.jpg"
        },
    ];

    const settings = {
        speed: 500,
        slidesToShow: 4, // Show three blogs at a time
        slidesToScroll: 1, // Scroll one blog at a time
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        spacing: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: <PrevArrow />,
                    nextArrow: <NextArrow />
                }
            }
        ]
    };



    const slider = React.useRef(null);
    return (
        <section className=' md:pt-16 md:pb-6 pt-8'>
            <div className='container mx-auto md:px-4 px-8 '>
                <h2 className='md:text-[40px] text-[25px]  font[PoppinsBold] text-black '>
                    Related Products
                </h2>
                <div className='flex justify-between items-center md:-mt-5'>
                    <div>
                        <p className=' md:text-[14px] text-sm md:font-[Poppinsmedium] font-[PoppinsRegular]  text-black'>
                            Get completely customizable product packaging for any type of box your product my need.
                        </p></div>
                    <div className='md:flex hidden float-right  '>
                        <button className="block md:text-[40px] rounded-full p-1 transform  text-base md:text-[#0E4D66]  " onClick={() => (slider?.current)?.slickPrev()}><HiArrowCircleLeft /></button>
                        <button className=" block md:text-[40px]  rounded-full p-1 transform  md:text-[#0E4D66] text-base   " onClick={() => (slider?.current)?.slickNext()}><HiArrowCircleRight /></button>
                    </div>
                </div>
                <div className=' space-x-2  md:space-y-0  space-y-6 pb-12 '>

                    <Slider ref={slider} {...settings}>
                        {data.map((item, idx) => {
                            return (
                                <div key={idx} className=' md:h-[430px] md:pr-2 md:w-[320px]  rounded-2xl mb-8 '>
                                    <div className='mt-3 bg-[#FFF8F1] rounded-2xl px-3 py-3'>
                                        <Image className=' md:h-[338px] rounded-md' src={item.img} alt='make-product' width={300} height={338} />
                                        <div className='py-2  rounded-md'>
                                            <h2 className=' md:text-[17px] font-[Poppinssemibold]  text-[#252525] md:leading-[32px] '>
                                                {item.title}
                                            </h2>
                                            <Link className='text-[#C13112] underline text-[17px] font-[PoppinsRegular]' href={'/'}>
                                                Learn more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </Slider>


                </div>

            </div>
        </section>
    );
};

export default RelatedProducts;
