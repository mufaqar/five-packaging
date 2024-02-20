import React from 'react'
import OrderBox from './orderBox'
import Image from 'next/image'

function Mailer() {
    return (
        <section className=' pt-8 '>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-[35px] text-[20px]  md:leading-[40px]font-[Poppinssemibold] text-[#252525]'>
                    Mailer Boxes Products
                    </h2>
                   
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-x-4 mt-10'>
                    {
                        data?.map((item, idx) =>{
                            return(
                                <div>
                                    <Image src={item.img} alt='img' width={306} height={264}/>
                                    <h1 className='text-center text-[#242424] text-[17px] py-8 font-[Poppinsmedium]'>{item.title}</h1>
                                </div>
                            )
                        } )}
                          


                </div>
            </div>
        </section>
    )
}

export default Mailer


const data =[{
    img:'/images/mailer box/image 8.png',
    title:"Corrugated Mailer Boxes"
},
{
    img:'/images/mailer box/image 10.png',
    title:"Tuck Top Mailer Boxes"
},
{
    img:'/images/mailer box/image 11.png',
    title:"Tuck Top Mailer Boxes"
},
{
    img:'/images/mailer box/image 12.png',
    title:"Mailer Gift Boxes"
},
{
    img:'/images/mailer box/image 33 (1).png',
    title:"Luxury Mailer Boxes"
},
{
    img:'/images/mailer box/image 34.png',
    title:"Mailer Shipping Boxes"
},
{
    img:'/images/mailer box/image 35.png',
    title:"Cardboard Mailer Boxes"
},
{
    img:'/images/mailer box/image 36.png',
    title:"Tab Lock Mailer Boxes"
},

]