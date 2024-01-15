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
                    <Img_Box />
                    <Img_Box />
                </div>
            </div>
        </section>
    )
}

export default Future