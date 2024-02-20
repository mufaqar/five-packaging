import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
export default function Why_ChooseUs() {


    return (
        <>
            <section>
                <div className='md:py-16 py-8 bg-[#FDF0D5]'>
                    <div className='container mx-auto px-4'>
                        <div className='md:w-[487px] md:h-[235px] relative m-auto'>
                            <Image src="/images/sliderbrand.png" width={487} height={235} alt='make-product' className='w-full object-cover rounded-lg' />
                            <Image src="/images/youtube.png" alt='make-product' width={100} height={100} className="    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <div className='pt-8'>
                            <h3 className='md:w-[854px] m-auto  text-center text-[#1F1F1F] text-[36px] leading-[41px] font-[Poppinssemibold]'>Custom packaging success with 360° half price packaging aproach</h3>
                        </div>

                        <div className='md:grid md:grid-cols-3  pt-8 md:gap-y-4 space-y-8 md:space-y-0'>

                            {
                                data?.map((item: any) => {
                                    return (
                                        <div className=''>
                                            <Image src={item.icon} className='w-[48px] h-[48px] md:mx-0 mx-auto' alt='make-product' width={48} height={48} />
                                            <h1 className='text-[#1F1F1F] text-[16px] leading-[18px] md:text-left text-center pt-2 font-[Poppinssemibold]'>{item.title}</h1>
                                            <p className='md:w-[350px] text-[#1F1F1F] text-[15px] md:text-left text-center leading-[17px] pt-1 font-[PoppinsRegular]'>{item.des}</p>
                                            <hr className="h-px md:hidden  my-8 bg-[#d1c1c1] border-0 dark:bg-gray-700"/>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

            </section>
            <div className='container mx-auto px-4 text-center py-10'>
                <button className='bg-[#C03213] font-[Poppinssemibold] md:w-[198px] w-full h-[54px] text-[#FFFFFF] text-[13px] leading-[19px]'> Request for Quote</button>
            </div>
        </>
    )
}




const data = [{
    icon: "/images/packaging/package1.png",
    title: "International Sourcing",
    des: "Unlock unbeatable packaging solutions with Five Packaging’s international sourcing"
},
{
    icon: "/images/packaging/package2.png",
    title: "Easy Price Matching",
    des: "Get from idea to finished design quickly, with professionally made and editable templates"
},
{
    icon: "/images/packaging/package3.png",
    title: "HPP as Premium Acquisition Partner",
    des: "Five Packaging - your premium acquisition partner for exceptional packaging solutions at half the cost."
},
{
    icon: "/images/packaging/package4.png",
    title: "Contract Packaging",
    des: "Streamline your packaging process with Five Packaging’s professional expert contract packaging service"
},
{
    icon: "/images/packaging/package5.png",
    title: "IWarehouse and IMS",
    des: "Efficient Warehousing and Inventory Management Solutions customized for your business needs."
},
{
    icon: "/images/packaging/package6.png",
    title: "Logistics Outstanding with 3PL Service",
    des: "Integrate your supply chain with Five Packaging’s 3PL logistics outsourcing for efficient and cost-effective solutions."
},
]