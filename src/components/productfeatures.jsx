import React from 'react'
import Image from 'next/image'
function ProductFeatures() {
    return (
        <section className='bg-[#F7F7F7] mt-2 md:px-0 px-2'>
            <div className='container px-4 mx-auto'>
                <h1 className='text-[#252525] pt-6 text-center font-[PoppinsBold] md:text-[32px] leading-[36px]'>Product Features</h1>
                <div className='md:grid md:grid-cols-4 gap-10 grid grid-cols-2 md:max-w-[1051px] mx-auto py-8'>

                    {data.map((item) => {
                        return (
                            <div className='text-center'>

                                <Image className='bg-[#0E4D66] px-4 py-4 rounded-xl mx-auto' width={73} height={72} src={item.img} alt='image' />
                                <h1 className='pt-6 md:text-[20px] text-[15px] text-[#252525] font-[PoppinsBold]'>{item.title}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductFeatures



const data = [{
    img: '/images/featuersproduct/Mask group (9).png',
    title: "Protecting Dust Flaps"
},
{
    img: '/images/featuersproduct/Mask group (10).png',
    title: "Self Locking"
},
{
    img: '/images/featuersproduct/Mask group (11).png',
    title: "Fast Turnarounds"
},
{
    img: '/images/featuersproduct/Mask group (12).png',
    title: "Two-Sided Printing"
},
{
    img: '/images/featuersproduct/Mask group (13).png',
    title: "Artwork Variations"
},
{
    img: '/images/featuersproduct/Mask group (14).png',
    title: "Digital CMYK Printing"
},
{
    img: '/images/featuersproduct/Mask group (15).png',
    title: "Durable Construction"
},
{
    img: '/images/featuersproduct/Mask group (16).png',
    title: "Free Online Proofing"
},
]
