import React from 'react'

const CheckPrice = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className='max-w-[567px] mx-auto shadow-[0px_4px_4px_0_rgba(0,0,0,0.15)] rounded-[26px]'>
            <h2 className='md:text-2xl text-xl font-semibold text-white text-center px-8 py-3.5 bg-primary rounded-t-[26px] rounded-tr-[26px]'>
                CUSTOMIZE & CHECK PRICES
            </h2>
            <div className="grid w-full gap-4 items-center bg-white md:px-10 px-5 pt-5 pb-8 rounded-b-[26px] rounded-bl-[26px]">
                <ul role="tablist" className='rounded-t-[28px] rounded-b-[28px] flex items-center w-full'>
                    <li
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        className={`${openTab === 1 ? "bg-primary text-white" : "bg-[#F0F0F0] text-txt_Clr"} w-full text-[13px] leading-[19px] font-normal text-center py-2 rounded-tl-[28px] rounded-bl-[28px]`}>
                        CUSTOMIZE SIZE
                    </li>
                    <li
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        className={`${openTab === 2 ? "bg-primary text-white" : "bg-[#F0F0F0] text-txt_Clr"} w-full text-[13px] leading-[19px] font-normal text-center py-2 rounded-tr-[28px] rounded-br-[28px]`}>
                        STANDARD SIZES
                    </li>
                </ul>
                <h4 className='text-[13px] leading-[19px] font-medium text-black text-center relative before:content-[""] before:absolute before:w-1/4 before:h-[1px] before:bg-black/20 before:left-0 before:top-1/2 after:content-[""] after:absolute after:w-1/4 after:h-[1px] after:bg-black/20 after:right-0 after:top-1/2'>
                    Enter Interior  Dimensions
                </h4>
                <div id='tab1' className={`${openTab === 1 ? "block" : "hidden"} `}>
                    <ul className='flex gap-5 items-center'>
                        <li className='w-full text-base font-semibold text-black bg-[#D9D9D9] shadow-[0px_3px_0px_0_rgba(0,0,0,0.40)] p-3'>
                            Length (in)
                            3
                        </li>
                        <li className='w-full text-base font-semibold text-black bg-[#D9D9D9] shadow-[0px_3px_0px_0_rgba(0,0,0,0.40)] p-3'>
                            Width (in)
                            4
                        </li>
                        <li className='w-full text-base font-semibold text-black bg-[#D9D9D9] shadow-[0px_3px_0px_0_rgba(0,0,0,0.40)] p-3'>
                            Depth (in)
                            1
                        </li>
                    </ul>
                    <p className='text-base font-semibold text-black mt-5'>
                        Material
                    </p>
                    <p className='md:text-xl text-base font-medium text-black border-b border-black pb-2 mt-2'>
                        Standard White with Matte Ink (HD Print)
                    </p>
                    <p className='text-base font-semibold text-black mt-5'>
                        Printed Sides
                    </p>
                    <p className='md:text-xl text-base font-medium text-black mt-2'>
                        Outside
                    </p>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 justify-between md:items-center mt-5'>
                        <div>
                            <p className='md:text-xl text-base font-medium text-black mt-2'>
                                Quantity
                            </p>
                            <p className='md:text-xl text-base font-medium text-black border-b border-black pb-2 mt-2'>
                                1,500
                            </p>
                        </div>
                        <div className='md:text-end'>
                            <h3 className='md:text-2xl text-xl font-semibold text-primary'>
                                $0.97 each
                            </h3>
                            <p className='text-[13px] leading-[19px] font-medium text-black'>
                                Subtotal :  $1455.00
                            </p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[13px] leading-[19px] font-medium text-primary mb-2'>
                            Custom quantities
                        </p>
                        <div className='bg-primary/10 p-5 rounded-md border border-primary'>
                            <p className='text-base font-semibold text-black'>Production Time</p>
                            <div className='flex items-center'>
                                <input id="standared" type="radio" value="" name="production_time" className="w-4 h-4 accent-primary text-primary bg-white focus:ring-primary" />
                                <label htmlFor="standared" className="w-full ms-2 text-base font-semibold text-black">Standard (12 - 15 Business Days) </label>
                            </div>
                            <div className='flex items-center'>
                                <input id="rush" type="radio" value="" name="production_time" className="w-4 h-4 accent-primary text-primary bg-white focus:ring-primary" />
                                <label htmlFor="rush" className="w-full ms-2 text-base font-semibold text-black">Rush (6 - 8 Business Days)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='tab2' className={`${openTab === 2 ? "block" : "hidden"} `}>
                    <ul className='flex gap-5 items-center'>
                        <li className='w-full text-base font-semibold text-black bg-[#D9D9D9] shadow-[0px_3px_0px_0_rgba(0,0,0,0.40)] p-3'>
                            Length (in)
                            3
                        </li>
                        <li className='w-full text-base font-semibold text-black bg-[#D9D9D9] shadow-[0px_3px_0px_0_rgba(0,0,0,0.40)] p-3'>
                            Width (in)
                            4
                        </li>
                        <li className='w-full text-base font-semibold text-black bg-[#D9D9D9] shadow-[0px_3px_0px_0_rgba(0,0,0,0.40)] p-3'>
                            Depth (in)
                            1
                        </li>
                    </ul>
                    <p className='text-base font-semibold text-black mt-5'>
                        Material
                    </p>
                    <p className='md:text-xl text-base font-medium text-black border-b border-black pb-2 mt-2'>
                        Standard White with Matte Ink (HD Print)
                    </p>
                    <p className='text-base font-semibold text-black mt-5'>
                        Printed Sides
                    </p>
                    <p className='md:text-xl text-base font-medium text-black mt-2'>
                        Outside
                    </p>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 justify-between md:items-center mt-5'>
                        <div>
                            <p className='md:text-xl text-base font-medium text-black mt-2'>
                                Quantity
                            </p>
                            <p className='md:text-xl text-base font-medium text-black border-b border-black pb-2 mt-2'>
                                1,500
                            </p>
                        </div>
                        <div className='md:text-end'>
                            <h3 className='md:text-2xl text-xl font-semibold text-primary'>
                                $0.97 each
                            </h3>
                            <p className='text-[13px] leading-[19px] font-medium text-black'>
                                Subtotal :  $1455.00
                            </p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[13px] leading-[19px] font-medium text-primary mb-2'>
                            Custom quantities
                        </p>
                        <div className='bg-primary/10 p-5 rounded-md border border-primary'>
                            <p className='text-base font-semibold text-black'>Production Time</p>
                            <div className='flex items-center'>
                                <input id="standared" type="radio" value="" name="production_time" className="w-4 h-4 accent-primary text-primary bg-white focus:ring-primary" />
                                <label htmlFor="standared" className="w-full ms-2 text-base font-semibold text-black">Standard (12 - 15 Business Days) </label>
                            </div>
                            <div className='flex items-center'>
                                <input id="rush" type="radio" value="" name="production_time" className="w-4 h-4 accent-primary text-primary bg-white focus:ring-primary" />
                                <label htmlFor="rush" className="w-full ms-2 text-base font-semibold text-black">Rush (6 - 8 Business Days)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckPrice