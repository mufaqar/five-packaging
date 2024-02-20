import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Process = () => {
    return (
        <section className='container mx-auto px-4 py-8'>
            <div>
                <h1 className='md:text-[35px] text-[25px] md:mx-0 mx-auto text-center md:text-left leading-[40px] text-[#252525] font-[Poppinssemibold]'>Step-by-Step Packaging Process</h1>
                <p className='font-[PoppinsRegular] md:mx-0 mx-auto text-center md:text-left text-[#252525] text-[17px] pt-2'>Get the freedom to personalize style, size, images, text, and colors while getting an instant quote.</p>
            </div>
            <div className='md:w-[950px] md:flex md:space-x-20 md:pl-2 pl-8 md:pt-6 pt-4'>
                <li className='text-[18px] leading-[27px] font-[PoppinsRegular] text-[#666666] md:list-none list-disc ' >Consultation</li>
                <li className='text-[18px] leading-[27px] font-[PoppinsRegular] text-[#666666] md:list-none list-disc' >Design</li>
                <li className='text-[18px] leading-[27px] font-[PoppinsRegular] text-[#666666] md:list-none list-disc' >Prototype</li>
                <li className='text-[18px] leading-[27px] font-[PoppinsRegular] text-[#666666] md:list-none list-disc' >Production</li>
                <li className='text-[18px] leading-[27px] font-[PoppinsRegular] text-[#666666] md:list-none list-disc' >Logistics</li>
                <li className='text-[18px] leading-[27px] font-[PoppinsRegular] text-[#666666] md:list-none list-disc' >Optimize</li>
                
            </div>
            <hr class="h-px md:mt-1 mt-4 bg-[#DEDEDE] border-0 dark:bg-gray-700"/>
            <div className='md:grid md:grid-cols-3'>
                {data.map((item) => {
                    return (

                        <div className='bg-[#FBFBFB] md:w-[390px] md:h-[223px] mt-6 px-5 md:py-2 py-4 rounded-3xl border-[#D9D9D9] border-[1px]'>
                            <Image className='md:pt-4 pt-2 md:pb-0 pb-4' src={item.img} alt='make-product' width={50} height={50}></Image>
                            <h3 className='text-[20px] leading-[23px] pt-2 font-[Poppinssemibold]  text-[#252525] '>
                                {item.title}
                            </h3>
                            <p className='md:w-[350px] font-[Poppinsmedium] pt-3 text-[#1F1F1F] text-[15px] leading-[20px]'>{item.des}</p>

                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default Process

const data = [{
    img: "/images/process/clapping.png",
    title: "Customer Satisfaction",
    des: "Win over your audience and keep them coming back for more with tailor-made solutions"
},
{
    img: "/images/process/analysis.png",
    title: "Project Analysis",
    des: "Evaluate your packaging process with a packaging expert to develop strategies for smoother operations."
},
{
    img: "/images/process/optimization.png",
    title: "Project Optimization",
    des: "Pack it tight, ship it right Optimize your Packaging for a smooth supply chain ride."
}]