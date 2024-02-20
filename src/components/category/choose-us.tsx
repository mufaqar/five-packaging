import Image from 'next/image'
import React from 'react'

function Choose_Us() {
    return (
        <section className='pb-10'>
            <div className='container mx-auto flex lg:flex-row flex-col gap-10 bg-[#373F3C]'>
                <div className='lg:w-1/2 w-full'>
                    <Image src="/images/choose-us.png" alt='choose-us' width={556} height={398} className='h-full w-full ' />
                </div>
                <div className='lg:w-1/2 w-full lg:py-16 py-10 px-4'>
                    <div className='max-w-[610px] lg:ml-0'>
                        <h2 className='md:text-[35px] text-3xl font-[Poppinssemibold] text-white'>
                        Why Choose Us
                        </h2>
                        <p className='text-[15px] leading-[31px] font-[PoppinsRegular] text-[#FFFFFF] mt-3'>
                        “Lorem ipsum dolor sit amet consectetur. Magna vestibulum volutpat consequat nisi quis sit sollicitudin risus nullam. Diam pretium mauris erat nisl turpis mauris in molestie. Ut purus turpis mi faucibus arcu in egestas interdum. Mattis nunc cursus viverra tristique egestas. Purus felis duis vel eget vulputate faucibus. Mi gravida congue platea ullamcorper sit cursus adipiscing
                        </p>
                        <div className='mt-8 flex gap-2 items-center'>
                            <Image src="/images/customer.png" alt='customer' width={58} height={58} />
                            <div className=''>
                                <p className='text-[14px] leading-[16px] font-[PoppinsRegular] text-white'>
                                    Brad Gills
                                </p>
                                <span className='text-[10px] leading-[11x] font-[PoppinsRegular]  text-white'>
                                    Co Founder of Home Grown
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose_Us