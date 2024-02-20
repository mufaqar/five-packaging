import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img_Box from './img-box'

function Future() {
    return (
        <section className='md:py-16 py-8 md:block hidden'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        Let’s Create a sustainable future together
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[985px] mx-auto mt-5'>
                        Grow your business with eco-friendly alternatives to packaging
                    </p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                    {data?.map((item: any) => {
                        return (
                            <div className='relative'>
                                <Image src={item.img} alt='friendly' width={567} height={378} className='object-cover h-full w-full' />
                                <div className='absolute bottom-0 w-full p-8 flex flex-col md:gap-5 gap-2'>
                                    <p className='md:text-xl text-base font-normal text-white'>
                                        {item.title}
                                    </p>
                                    <h4 className='md:text-2xl text-xl font-medium text-white max-w-[330px]'>
                                        {item.des}
                                    </h4>
                                    <Link href="#" className='px-6 py-3 text-sm font-semibold text-white rounded-[5px] border border-white inline-block w-fit bg-transparent hover:bg-primary hover:border-primary'>
                                        {item.button}
                                    </Link>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Future

const data = [{
    img: "/images/friendly.png",
    title: "ECO-FRIENDLY PACKAGING",
    des: "Go green with sustainably responsible packaging",
    button: "Browse products"
},
{
    img: "/images/sustain.png",
    title: "SUSTAINBILITY EFFORTS",
    des: "Our mission towards green Future",
    button: "Learn more"
}]