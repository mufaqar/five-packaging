import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import Image from 'next/image';
function Testimonials({ data }) {

    return (
        <section className=' py-10 bg-darkBlue relative mt-2'>
            <div className='container mx-auto px-4'>
                <div className='md:flex justify-between md:space-y-0 space-y-8'>
                    <div>
                        <p className='text-[#FFFFFF] pb-4 text-[15px] leading-[17px] font-[PoppinsRegular]'>TESTIMONIALS</p>
                        <h1 className='text-[#FFFFFF] pb-6 text-[40px] leading-[46px] font-[Poppinssemibold] md:w-[512px]'>See why Customers Love Refine Packaging</h1>
                        <p className='text-[#FFFFFF]  font-[PoppinsRegular] text-[20px] leading-[23px] md:w-[514px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        <button className='w-full mt-8 md:w-[198px] h-[54px] bg-[#C03213] text-[13px] leading-[19px] font-[Poppinssemibold] text-[#FFFFFF]'>View Testimonials</button>
                    </div>

                    <div className='md:flex md:space-x-4 '>
    <div className='bg-white md:w-[343px] md:h-[246px]  px-5 py-2 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
        <h3 className='text-[20px] leading-[23px]  font-[Poppinssemibold]  text-[#252525] '>
            MY ATHLETE BOX
        </h3>
        <p className='font-[PoppinsRegular] text-[#666666] text-[15px] leading-[25px]'>After much throughout searching, price, and quality comparison for custom-designed boxes, we decided to go with Company Name! Communication throughout the process was great</p>
        <Image className='md:pt-10 pt-2 md:pb-0 pb-4' src="/images/stars.png" alt='make-product' width={144} height={89}></Image>
    </div>
    <div className='bg-white md:w-[343px] md:h-[246px] mt-6 md:mt-14 px-5 py-2 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
        <h3 className='text-[20px] leading-[23px]  font-[Poppinssemibold]  text-[#252525] '>
            SIMPLICITY TEAS
        </h3>
        <p className='font-[PoppinsRegular] text-[#666666] text-[15px] leading-[25px]'>After much throughout searching, price, and quality comparison for custom-designed boxes, we decided to go with Company Name! Communication throughout the process was great, customer service was top-notch.</p>
        <Image className='md:pt-4 pt-2 md:pb-0 pb-4' src="/images/stars.png" alt='make-product' width={144} height={89}></Image>
    </div>
</div>


                </div>

            </div>

        </section>
    )
}

export default Testimonials



