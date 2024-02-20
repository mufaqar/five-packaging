import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";
import { HiArrowCircleRight ,HiArrowCircleLeft} from "react-icons/hi";
const Blog_Sec = () => {
    const data = [
        {
            title: "What is a Dieline? How To Make A Dieline For Packaging And Printing",
        },
        {
            title: "What is a Dieline? How To Make A Dieline For Packaging And Printing",
        },
        {
            title: "What is a Dieline? How To Make A Dieline For Packaging And Printing",
        },
        {
            title: "What is a Dieline? How To Make A Dieline For Packaging And Printing",
        },
        {
            title: "What is a Dieline? How To Make A Dieline For Packaging And Printing",
        },
        {
            title: "What is a Dieline? How To Make A Dieline For Packaging And Printing",
        },
    ];

    const settings = {
        speed: 500,
        slidesToShow: 3, // Show three blogs at a time
        slidesToScroll: 1, // Scroll one blog at a time
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
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
                }
            }
        ]
    };
    const slider = React.useRef(null);
    return (
        <section className=' pt-10 bg-primary'>
            <div className='container mx-auto md:px-4 px-8 '>
                <h2 className='md:text-[40px]  text-center font[PoppinsBold] text-white '>
                    Learn About Custom Boxes from the Pros
                </h2>
                <p className='m-auto text-center md:text-[17px] text-sm font-[PoppinsRegular] md:w-[882px] md:pt-2 pt-4 text-[#FFFFFF]'>
                    We’ve answered all the questions you may have before ordering a custom box. Each order is slightly different, so feel free to contact us if you have any other questions or concerns.
                </p>
                <div className='md:flex hidden float-right md:pt-8 pt-4'>
                    <button className="block md:text-[40px] rounded-full p-1 transform -translate-y-1/2 text-base text-[#FDF0D5]  " onClick={() => (slider?.current as any)?.slickPrev()}><HiArrowCircleLeft /></button>
                    <button className=" block md:text-[40px]  rounded-full p-1 transform -translate-y-1/2 text-[#FDF0D5] text-base   " onClick={() => (slider?.current as any)?.slickNext()}><HiArrowCircleRight /></button>
                </div>
                <div className=' md:pt-20 pt-10 md:space-y-0  space-y-6 pb-12'>

                    <Slider ref={slider} {...settings}>
                        {data.map((item, idx) => {
                            return (
                                <div key={idx} className='px-2 md:h-[496px] md:w-[390px] rounded-2xl mb-8'>
                                    <Image className='w-full md:h-[248px] rounded-t-lg' src="/images/shoe.jpg" alt='make-product' width={144} height={89} />
                                    <div className='px-6 pt-4 bg-white rounded-b-lg'>
                                        <Link href="#" className=' md:text-[28px] text-[15px] font-[Poppinsmedium] text-center  text-[#252525] md:leading-[32px] '>
                                            {item.title}
                                        </Link>
                                        <div className='flex items-center pt-2'>
                                            <Image className='' src="/images/profile.png" alt='make-product' width={34} height={34} />
                                            <p className='text-[#868686] font-[PoppinsRegular] text-[16px]'>Eric Bolan Last Updated: DEC 19, 2024</p>
                                        </div>
                                        <p className='text-[15px] font-[PoppinsRegular] text-[#252525] pt-2 pb-4'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ent abroaty uo. Greath molik cue simo...
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </Slider>
                    <button className='w-full md:w-[198px] h-[54px] bg-[#0E4D66] text-[13px] leading-[19px] font-[Poppinssemibold] text-[#FFFFFF]'>View Testimonials</button>

                </div>

            </div>
        </section>
    );
};

export default Blog_Sec;
