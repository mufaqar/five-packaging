import React, { useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function Cat_Faqs({ faqRes }: any) {
    const [open, setOpen] = useState<any>(0);

    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(id);
        }
        setOpen(id);
        //setDropdown(!dropdown)
        // console.log(id,open)
    };
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-center text-3xl font-semibold text-title_Clr'>
                        Frequently Asked Questions
                    </h2>
                    <p className='text-[17px] md:w-[882px] leading-[25px] font-[PoppinsRegular] text-center text-[#666666] mx-auto pt-4'>
                    We’ve answered all the questions you may have before ordering a custom box. Each order is slightly different, so feel free to contact us if you have any other questions or concerns.
                    </p>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 justify-between mt-10'>
                    {faqRes?.map((faq: any, index: number) => (
                        <div key={index} className='md:border-none border border-[#868686] md:p-0 p-3 rounded-md'>
                            <h3 className='md:text-[20px] px-4 justify-between  font-[Poppinssemibold] bg-[#FDF0D5] py-4 rounded-xl text-title_Clr flex items-center cursor-pointer' onClick={() => handleFaq(index)}>
                                {faq?.question}
                                <FaCircleArrowRight className="text-primary   md:block hidden" />
                            </h3>
                            <div className={`mt-3 md:pl-16 pl-0 ${open === index ? "block" : " md:block hidden"}`}>
                                <p className='md:text-lg text-base font-normal text-txt_Clr'>
                                    {faq?.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cat_Faqs