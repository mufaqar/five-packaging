import React from 'react'
import { FaBoxOpen, FaCheckCircle, FaEnvelope, FaImage, FaPencilRuler, FaUnlockAlt, FaUser } from "react-icons/fa";

const Experts_Details = () => {
    return (
        <section className='md:py-16 py-8 md:block hidden'>
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-7 items-center'>
                <div className='max-w-[636px] shadow-[6px_12px_13px_0_rgba(0,0,0,0.15)] rounded-[26px]'>
                    <h2 className='text-2xl font-semibold text-white text-center px-8 py-3.5 bg-darkBlue rounded-t-[26px] rounded-tr-[26px]'>
                        Get an Instant Quote
                    </h2>
                    <form className="grid w-full gap-4 items-center bg-[#f3f3f3] md:px-16 px-5 py-10 rounded-b-[26px] rounded-bl-[26px]">
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaBoxOpen /></span>   PRODUCT INFORMATION
                            </h4>
                            <label htmlFor='pname' className='text-base font-normal text-black hidden'>
                                Product Name
                            </label>
                            <input
                                id='pname'
                                type='text'
                                placeholder='Product Name'
                                className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                            />
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaPencilRuler /></span>   SELECT SIZE
                            </h4>
                            <div className='flex md:flex-row flex-col justify-between gap-4 items-center'>
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
                            <div className='flex md:flex-row flex-col justify-between gap-4 items-center'>
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
                            <div className='flex md:flex-row flex-col justify-between gap-4 items-center'>
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
                            <div className='flex md:flex-row flex-col justify-between gap-4 items-center'>
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
                        <div className='w-full flex flex-col gap-1'>
                            <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                <span><FaEnvelope /></span>   ADDITIONAL INFORMATION
                            </h4>
                            <label htmlFor='message' className='text-base font-normal text-black hidden'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                rows={6}
                                placeholder='Message'
                                className='text-xs font-normal p-2 text-[#B1B1B1] px-4 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                            ></textarea>
                        </div>
                        <div className='flex md:flex-row flex-col justify-between gap-4 md:items-center mt-2'>
                            <div className='md:w-1/2 w-full'>
                                <h4 className='text-base font-normal text-black flex gap-1 items-center'>
                                    <span><FaUnlockAlt /></span>   Captcha* <span className='text-[13px] font-normal text-txt_Clr'>6+13=</span>
                                </h4>
                            </div>
                            <button className='text-xs py-2 font-normal text-txt_Clr bg-white hover:bg-primary hover:text-white px-9 border border-[#CDCFCE] rounded-[5px]'>
                                Answer
                            </button>
                            <button className='text-xs py-2 font-semibold text-white bg-primary hover:text-txt_Clr hover:bg-white px-9 border border-[#CDCFCE] rounded-[5px]'>
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className='md:text-[32px] md:leading-[36px] text-2xl font-semibold text-black mb-5'>
                        Experts Sieve All Detail to Help You
                        Order Right Custom Boxes
                    </h2>
                    <p className='text-base font-normal text-black mb-5'>
                        Finding custom boxes online is easy, but ordering the right one without experience is incredibly hard. With Five Packaging it never is.
                    </p>
                    <p className='text-base font-normal text-black mb-5'>
                        Here, real packaging experts pore the details in run-time to assist you choose the right stock, size, color and quantity to help process your order faster and more reliable.
                    </p>
                    <h2 className='md:text-[32px] md:leading-[36px] text-2xl font-semibold text-black mb-5'>
                        Get an Instant Quote
                    </h2>
                    <p className='text-base font-normal text-black mb-5'>
                        To know more about our order process 24/7 customer support is available to entertain your all curious and concerns
                    </p>
                    <ul className='grid grid-cols-2 gap-5'>
                        <li className='bg-[#EEEEEE] rounded-md flex items-center gap-2 px-4 py-2'>
                            <FaCheckCircle className="md:text-3xl text-2xl min-w-[34px] min-h-[34px] text-primary" /> <span className='text-sm font-normal text-black'>Delivery Time</span>
                        </li>
                        <li className='bg-[#EEEEEE] rounded-md flex items-center gap-2 px-4 py-2'>
                            <FaCheckCircle className="md:text-3xl text-2xl min-w-[34px] min-h-[34px] text-primary" /> <span className='text-sm font-normal text-black'>Customization Options</span>
                        </li>
                        <li className='bg-[#EEEEEE] rounded-md flex items-center gap-2 px-4 py-2'>
                            <FaCheckCircle className="md:text-3xl text-2xl min-w-[34px] min-h-[34px] text-primary" /> <span className='text-sm font-normal text-black'>Order Size</span>
                        </li>
                        <li className='bg-[#EEEEEE] rounded-md flex items-center gap-2 px-4 py-2'>
                            <FaCheckCircle className="md:text-3xl text-2xl min-w-[34px] min-h-[34px] text-primary" /> <span className='text-sm font-normal text-black'>Price Comparison</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experts_Details