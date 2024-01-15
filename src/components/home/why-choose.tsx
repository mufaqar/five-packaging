import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlay } from "react-icons/fa";

function Why_ChooseUs() {
    return (
        <section className='md:py-16 py-8'>
            <div className='container mx-auto px-4'>
                <div className='bg-darkBlue max-w-[666px] mx-auto md:py-12 p-4 rounded-[93px]'>
                    <h2 className='md:text-4xl text-2xl font-semibold text-white text-center'>
                        Why Choose Us?
                    </h2>
                    <p className='md:text-lg text-base font-normal text-white text-center max-w-[800px] mx-auto mt-5'>
                        Accomplish Your Business Goals With Our Superior Service
                    </p>
                </div>
                <div className='flex md:flex-row flex-row justify-between items-center gap-7 py-7 mt-10 border-b border-[#DEDEDE]'>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/dimension.png" alt="dimension" width={53} height={52} className='md:ml-0 mx-auto' />
                        <h3 className='md:text-xl text-[11px] font-semibold text-txt_Clr md:text-start text-center mt-1'>
                            Modern Design and Dimensions
                        </h3>
                    </div>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/charges.png" alt="charges" width={57} height={53} className='md:ml-0 mx-auto' />
                        <h3 className='md:text-xl text-[11px] font-semibold text-txt_Clr md:text-start text-center mt-1'>
                            No Extra Charges
                        </h3>
                    </div>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/delivery.png" alt="delivery" width={63} height={43} className='md:ml-0 mx-auto' />
                        <h3 className='md:text-xl text-[11px] font-semibold text-txt_Clr md:text-start text-center mt-1'>
                            Super-Fast Delivery
                        </h3>
                    </div>
                    <div className='md:w-fit w-full'>
                        <Image src="/images/distinct.png" alt="distinct" width={38} height={35} className='md:ml-0 mx-auto' />
                        <h3 className='md:text-xl text-[11px] font-semibold text-txt_Clr md:text-start text-center mt-1'>
                            Distinctive Finishes
                        </h3>
                    </div>
                </div>
            </div>
            <div className='bg-[#FDF0D5] py-10 mt-8'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7'>
                    <div className='md:w-1/3 w-full md:block hidden'>
                        <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                            How do we make our products
                        </h2>
                        <p className='text-2xl font-normal text-title_Clr'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                    </div>
                    <div className='md:w-2/3 w-full relative'>
                        <Image src="/images/make-product.png" alt='make-product' width={826} height={472} className='w-full object-cover rounded-lg' />
                        <FaPlay className="text-5xl text-white absolute inset-y-1/2 inset-x-1/2" />
                    </div>
                </div>
            </div>
            <div className='mt-10 md:block hidden'>
                <Link href="#" className='bg-primary hover:bg-secondary px-8 py-4 text-sm font-semibold text-white block w-fit mx-auto'>
                    Request for Quote
                </Link>
            </div>
        </section>
    )
}

export default Why_ChooseUs