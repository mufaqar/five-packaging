import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Img_Box() {
    return (
        <div className='relative'>
            <Image src="/images/friendly.png" alt='friendly' width={567} height={378} className='object-cover h-full w-full' />
            <div className='absolute bottom-0 w-full p-8 flex flex-col md:gap-5 gap-2'>
                <p className='md:text-xl text-base font-normal text-white'>
                    ECO-FRIENDLY PACKAGING
                </p>
                <h4 className='md:text-2xl text-xl font-medium text-white max-w-[330px]'>
                    Go green with sustainably responsible packaging
                </h4>
                <Link href="#" className='px-6 py-3 text-sm font-semibold text-white rounded-[5px] border border-white inline-block w-fit bg-transparent hover:bg-primary hover:border-primary'>
                    Browse products
                </Link>
            </div>
        </div>
    )
}

export default Img_Box