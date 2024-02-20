import Link from 'next/link'
import React from 'react'

function Qoute_Sec() {
    return (
        <section className='pt-10'>
            <div className='container mx-auto lg:px-10 px-4 flex lg:flex-row flex-col lg:gap-10 gap-5 items-center bg-darkBlue lg:py-16 py-10'>
                <div className=''>
                    <div className=''>
                        <h2 className='md:text-[25px] text-2xl font-[Poppinssemibold] text-white'>
                            Start your packaging journey
                        </h2>
                        <p className='md:text-[17px] md:w-[683px] text-lg font-[PoppinsRegular] leading-[25px] text-white mt-3 '>
                            Our entire packaging solution gives you the full freedom of customizing your packaging to your desired result with the added support you need to succeed.
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/3 w-full'>
                    {/* <Link href="#" className='bg-white hover:bg-secondary px-8 py-4 text-sm font-semibold text-primary hover:text-white block w-[193px] lg:ml-auto text-center rounded-[5px]'>
                        Get a Free Quote
                    </Link> */}
                </div>
            </div>
        </section>
    )
}

export default Qoute_Sec