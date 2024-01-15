import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Featured_Posts from '@/components/featured-post'

const Blog_Sec = () => {
    return (
        <section className='md:py-16 py-8 bg-primary'>
            <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 md:divide-x divide-[#FFD5BE]/50'>
                <div className='md:w-2/3 w-full'>
                    <h2 className='md:text-4xl text-xl font-semibold text-white mb-5'>
                        Our Blog
                    </h2>
                    <div>
                       <Featured_Posts />
                    </div>
                </div>
                <div className='md:w-1/3 w-full md:pl-10'>
                    <p className='text-end'>
                        <Link href="#" className='md:text-base text-xs font-medium text-white underline hover:no-underline'>
                            View all
                        </Link>
                    </p>
                    <h2 className='md:text-3xl text-xl font-semibold text-white mb-5'>
                        Latest posts
                    </h2>
                    <div className='grid gap-5'>
                        {[0, 1, 2, 3].map(({ item, idx }: any) => {
                            return (
                                <div key={idx} className='flex md:flex-row flex-col gap-2'>
                                    <Image src="/images/make-product.png" alt='make-product' width={144} height={89} />
                                    <div className=''>
                                        <Link href="#" className='md:text-xl text-sm font-medium text-white block w-fit'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Link>
                                        <p className='md:text-base text-xs font-medium text-white'>
                                            DEC 19, 2024
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog_Sec