import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Ordermail() {
    return (
        <section className='bg-[#0E4D66] max-w-[1200px]  container mx-auto rounded-3xl'>

            <div className=' py-16 px-4'>

                <h2 className='md:text-[40px]  text-center font-[Poppinssemibold] text-white'>
                    Want <strong className='text-[#E3D631]'>10%</strong> off your first order?
                </h2>
                <p className='md:text-[17px] text-center font-[Poppinsmedium] text-white py-5'>
                    Type your email address and we’ll send you the discount code directly to your inbox.
                </p>
                <form className=" mx-auto pb-5">

                    <div className="relative">

                        <input type="search" id="default-search" className="block w-full md:w-[995px] md:h-[60px] md:text-[24px] text-sm font-[Poppinssemibold] mx-auto  p-4 md:ps-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#A4A4A4] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
                        <button type="submit" className="text-white  absolute md:text-[17px] font-[Poppinsmedium] end-4 md:end-24  bottom-2 h-[35px] md:h-[45px] md:w-[150px]  bg-[#C13112] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#C13112] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Code</button>
                    </div>
                </form>
                <h3 className='text-center pb-6 text-white md:text-[17px] font-[Poppinsmedium] ' >JOIN 1000S OF OTHERS, YES. IT’S COMPLETELY FREE.</h3>
                <p className='text-center text-[#738992] md:text-[17px] font-[Poppinsmedium]'>By submitting this form you agree to our “ Terms of Service and Privacy Policy.</p>
            </div>



        </section>
    )
}

export default Ordermail