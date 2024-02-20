import React from 'react'

function Technical_Specs({ mailerbox }: any) {
    console.log("🚀 ~ file: technical-specs.tsx:4 ~ Technical_Specs ~ mailerbox:", mailerbox)
    return (
        <section className='py-14 bg-[#F9F9FA]'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-[35px] font-[Poppinssemibold] text-[#252525]'>
                        Technical Specs: Mailer Boxes
                    </h2>
                    <p className='text-[15px] font-[PoppinsRegular] text-[#666666] mt-5'>
                        An overview of the standard customizations available for corrugated mailer boxes.
                    </p>
                </div>
                <div className='divide-y'>
                    {
                        mailerbox?.map((item: any, idx: number) => {
                            return (
                                <>
                                    <div className='flex lg:flex-row flex-col gap-8 items-center py-7' key={idx}>

                                        {
                                            item?.list?.map((d: any, i: number) => (
                                                <div className='lg:w-1/3 w-full' key={i}>
                                                    {
                                                        i === 0 ? <h3 className='md:text-[30px] text-2xl font-[Poppinsmedium] text-[#252525] mb-3'>
                                                            {d.title}
                                                        </h3> : <p className='text-[15px] leading-[31px] font-[PoppinsRegular] text-[#666666]'>
                                                            E-flute
                                                        </p>
                                                    }
                                                    <p className='text-[15px] leading-[31px] font-[PoppinsRegular] text-[#666666]'>{d?.content}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Technical_Specs