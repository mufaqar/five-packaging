import Image from 'next/image'
import React from 'react'
import Qoute_Form from './qoute-form'
import { urlForImage } from '../../../sanity/lib/image'

function Banner({data}:any) {
    return (
        <section className='h-full pt-10'>
            <div className='container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-7'>
                <div>
                    <h1 className='md:text-5xl -mt-4 text-3xl font-semibold text-title_Clr'>
                        {data?.name}
                    </h1>
                    <p className='text-lg leading-6 my-5 max-w-[510px]'>
                        {data?.excerpt}
                    </p>
                    <Image src={urlForImage(data?.image?.asset?._ref).width(534)?.url()} alt={data?.image?.alt || data?.name} width={534} height={400} className='mx-auto h-[410px]' />
                </div>
                <div>
                    <Qoute_Form />
                </div>
            </div>
        </section>
    )
}

export default Banner