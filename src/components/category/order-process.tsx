import React from 'react'
import OrderBox from './orderBox'

function Order_Process({ data }: any) {
    return (
        <section className='py-16 my-4 bg-[#0E4D66]'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='text-[35px] leading-[40px]font-[Poppinssemibold] text-white'>
                        Mailer Box Ordering Process
                    </h2>
                    <p className='text-[17px] leading-[25px] text-white pt-4 font-[PoppinsRegular]'>
                        A simple, 6-step process for getting custom mailer boxes, with dedicated support and ongoing consulting every step of the way.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10'>
                    {
                        data?.map((item: any, idx: number) => (
                            <OrderBox
                                key={idx}
                                title={item.title}
                                content={item?.detail}
                            />
                        ))
                    }


                </div>
            </div>
        </section>
    )
}

export default Order_Process