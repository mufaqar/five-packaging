import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ReviewProducts() {
    return (
        <section className='container mx-auto px-2'>
            <div>
                <h1 className='md:text-[35px] font-[Poppinssemibold] text-center '>1,000+ of 5 Star Reviews from Happy Customers</h1>
            </div>
            <div className='lg:flex justify-between pb-10' >
                <div className='flex items-center space-x-3 border-b-[3px] border-[#C13112] md:py-0 py-4 '> <h1 className='text-[#666666] text-[17px] font-[PoppinsBold]'>Reviews</h1>
                    <p className='bg-[#F5F5F5] text-[#666666] rounded-2xl px-4 py-1'>200+</p></div>
                <div className=''>
                    <button className='bg-[#C13112]  md:w-[169px] w-full h-[49px] text-[17px] font-[PoppinsBold] text-white'>Write  A Review</button>
                </div>
            </div>
            <div className='md:grid md:grid-cols-4 gap-4'>
                {data.map((item, idx) => {
                    return (
                        <div key={idx} className='px-4 md:w-[314px] rounded-2xl mb-8'>
                            <Image className='rounded-t-lg' src={item.img} alt='make-product' width={310} height={271} />
                            <div className='px-4 py-4 bg-[#F5F5F5] rounded-b-lg -mt-8'>
                                <Link href="#" className=' md:text-[13px] text-left font-[PoppinsRegular]  text-[#252525] md:leading-[25px] '>
                                    {item.des}
                                </Link>
                                <div className="flex items-center mt-2.5 ">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg
                                            className="w-[18px] h-[18px] text-[#0E4D66]"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-[18px] h-[18px] text-[#0E4D66]"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-[18px] h-[18px] text-[#0E4D66]"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-[18px] h-[18px] text-[#0E4D66]"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-[18px] h-[18px] text-[#0E4D66]"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>

                                </div>
                                <h1 className='text-[20px] font-[Poppinssemibold] pt-2'>
                                    Emily George
                                </h1>
                            </div>
                        </div>
                    );
                })}
                


            </div>
            <hr class=" h-[1px] mx-auto mt-2 bg-[#CACACA] border-0 rounded  dark:bg-gray-700"></hr>
        </section>
    )
}

export default ReviewProducts


const data = [
    {
        img: "/images/reviews/Mask group (18).png",
        des: "The quality in the paper stock,printing, and customer service was great. Super responsive and helpful."
    },
    {
        img: "/images/reviews/Mask group (17).png",
        des: "The quality in the paper stock,printing, and customer service was great. Super responsive and helpful."
    },
    {
        img: "/images/reviews/Mask group (18).png",
        des: "The quality in the paper stock,printing, and customer service was great. Super responsive and helpful."
    },
    {
        img: "/images/reviews/Mask group (19).png",
        des: "The quality in the paper stock,printing, and customer service was great. Super responsive and helpful."
    },
]
