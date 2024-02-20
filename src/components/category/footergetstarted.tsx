import Image from 'next/image'
import React from 'react'

function Footergetstarted() {
  return (
    <section className=' bg-[#0E4D66] '>
        <div className='container mx-auto px-4 md:py-0 py-6'>
<div className='md:flex justify-between items-center'>
<div>
    <h1 className='md:text-[38px] md:leading-[43px] text-[20px] md:text-left text-center font-[PoppinsRegular] text-white'>Get Started with Mailer Boxes Today</h1>
    <p className='md:w-[626px] md:text-[20px] text-[13px] md:leading-[28px] md:text-left text-center font-[PoppinsRegular] pb-4 text-white'>Continue to Company name to customize your mailer boxes and get instant quotes.</p>
    <button className='bg-white text-[13px] md:w-[169px] h-[30px] md:h-[54px] w-full rounded-md font-[Poppinssemibold]'>Get started</button>
</div>
<div className='m-auto md:pt-4 pt-8'>
    <Image src={'/images/cta.png' } alt='img' width={462} height={278}/>
</div>
</div>
        </div>
    </section>
  )
}

export default Footergetstarted