import Link from 'next/link'
import React from 'react'
import BlockContent from "@sanity/block-content-to-react";

function Get_Started({ data }) {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        {data?.secound_title}
                    </h2>
                    <BlockContent blocks={data?.content} className='text-lg font-normal text-txt_Clr max-w-[890px] mx-auto mt-5 flex flex-col gap-3' />
                </div>
                <div className='mt-10 flex justify-center gap-3'>
                    <Link href="#" className='bg-darkBlue hover:bg-white md:px-8 py-4 text-sm font-semibold text-white hover:text-darkBlue block w-[193px] text-center border border-darkBlue rounded-[5px]'>
                        Get a Free Quote
                    </Link>
                    <Link href="#" className='bg-white hover:bg-darkBlue md:px-8 py-4 text-sm font-semibold text-darkBlue hover:text-white block w-[193px] text-center border border-darkBlue rounded-[5px]'>
                        Call US Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Get_Started