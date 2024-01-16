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
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        Frequently Asked Questions
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr mx-auto mt-5'>
                        Can't find what you're looking for? Check out our help center.
                    </p>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 justify-between mt-10'>
                    {faqRes?.map((faq: any, index: number) => (
                        <div key={index} className='md:border-none border border-[#868686] md:p-0 p-3 rounded-md'>
                            <h3 className='md:text-2xl text-lg font-semibold text-title_Clr flex items-center cursor-pointer' onClick={() => handleFaq(index)}>
                                <FaCircleArrowRight className="text-primary w-16 md:block hidden" />
                                {faq?.question}
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