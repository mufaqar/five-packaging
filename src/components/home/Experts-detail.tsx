import React from 'react'
import { FaBoxOpen, FaImage, FaPencilRuler, FaUser } from "react-icons/fa";

const Experts_Details = () => {
    return (
        <section className='md:py-16 py-8'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7'>
                <div className='max-w-[514px]. mx-auto shadow-[0_4px_86px_0_rgba(0,0,0,0.15)] rounded-[26px]'>
                    <h2 className='text-2xl font-semibold text-white text-center px-8 py-3.5 bg-darkBlue rounded-t-[26px] rounded-tr-[26px]'>
                        Get an Instant Quote
                    </h2>
                    <form className="grid w-full gap-4 items-center bg-[#f3f3f3] px-5 py-10 rounded-b-[26px] rounded-bl-[26px]">
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaBoxOpen /></span>   PRODUCT INFORMATION
                            </h4>
                            <label htmlFor='name' className='text-base font-normal text-black hidden'>
                                name
                            </label>
                            <input
                                id='name'
                                type='text'
                                placeholder='Your Name'
                                className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                            />
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaPencilRuler /></span>   SELECT SIZE
                            </h4>
                            <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='length' className='text-base font-normal text-black hidden'>
                                        Length
                                    </label>
                                    <input
                                        id='length'
                                        type='number'
                                        placeholder='Length'
                                        className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='width' className='text-base font-normal text-black hidden'>
                                        width
                                    </label>
                                    <input
                                        id='width'
                                        type='number'
                                        placeholder='Width'
                                        className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='depth' className='text-base font-normal text-black hidden'>
                                        Depth
                                    </label>
                                    <input
                                        id='depth'
                                        type='number'
                                        placeholder='Depth'
                                        className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='unit' className='text-base font-normal text-black hidden'>
                                        Unit
                                    </label>
                                    <input
                                        id='unit'
                                        type='text'
                                        placeholder='unit'
                                        className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaPencilRuler /></span>   CHOOSE MATERIALS
                            </h4>
                            <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='stock' className='text-base font-normal text-black hidden'>
                                        Stock
                                    </label>
                                    <input
                                        id='stock'
                                        type='text'
                                        placeholder='Stock'
                                        className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='color' className='text-base font-normal text-black hidden'>
                                        Color
                                    </label>
                                    <input
                                        id='color'
                                        type='text'
                                        placeholder='Color'
                                        className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='quantity' className='text-base font-normal text-black hidden'>
                                        Quantity
                                    </label>
                                    <input
                                        id='quantity'
                                        type='number'
                                        placeholder='Quantity'
                                        className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaImage /></span>   UPLOAD ARTWORK
                            </h4>
                            <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='file' className='text-base font-normal text-txt_Clr'>
                                        Upload your art wrok or reference image
                                    </label>
                                    <input
                                        id='file'
                                        type='file'
                                        placeholder=''
                                        accept="image/*"
                                        className='text-xs font-normal text-[#B1B1B1] px-1 focus:outline-none w-full'
                                    />
                                    <p className='text-xs font-normal text-txt_Clr'>
                                        Max file size 20Mb
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaUser /></span>   PERSONAL INFORMATION
                            </h4>
                            <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='name' className='text-base font-normal text-black hidden'>
                                        Full Name*
                                    </label>
                                    <input
                                        id='name'
                                        type='text'
                                        placeholder='Full Name*'
                                        className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='email' className='text-base font-normal text-black hidden'>
                                        Email ID*
                                    </label>
                                    <input
                                        id='email'
                                        type='email'
                                        placeholder='Email ID*'
                                        className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-1'>
                                    <label htmlFor='phone' className='text-base font-normal text-black hidden'>
                                        Contact Number
                                    </label>
                                    <input
                                        id='phone'
                                        type='number'
                                        placeholder='Contact Number'
                                        className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Experts_Details