import React, { useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function CategoryFaqs({ faqRes }: any) {
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
        <section className='pt-10'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-[35px]  font-[Poppinssemibold]  font-semibold text-title_Clr'>
                    Frequently Asked Questions
                    </h2>
                    <p className='text-[17px] leading-[25px] font-[PoppinsRegular]  text-[#666666] mx-auto pt-2'>
                    Can't find what you're looking for? Check out our help center.
                    </p>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 justify-between mt-10'>
                    {faqRes?.map((faq: any, index: number) => (
                        <div key={index} className='md:border-none border border-[#868686] md:p-0 p-3 rounded-md'>
                            <h3 className='md:text-[20px] space-x-4  font-[Poppinssemibold]  py-4 rounded-xl text-title_Clr flex items-center cursor-pointer' onClick={() => handleFaq(index)}>
                            <FaCircleArrowRight className="text-primary mr-4  md:block hidden" />
                                {faq?.question}
                               
                            </h3>
                            <div className={` pl-9 ${open === index ? "block" : " md:block hidden"}`}>
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

export default CategoryFaqs