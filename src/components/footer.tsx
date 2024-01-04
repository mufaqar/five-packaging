import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='pt-20 relative bg-[#373F3C]'>
      <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7'>
        <h6 className='text-2xl font-semibold text-white'>
          We collaborate with people and brands;
          let’s build something great together.
        </h6>
      </div>
      <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
        <div>
          <p className='text-base font-normal text-white/90'>
            Connect with us!
          </p>
          <ul className='flex gap-2 mt-5'>
            <li>
              <Link href="#" className='inline-block hover:border-primary border border-[#CACACA] p-2.5 rounded text-white hover:text-primary'>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block hover:border-primary border border-[#CACACA] p-2.5 rounded text-white hover:text-primary'>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block hover:border-primary border border-[#CACACA] p-2.5 rounded text-white hover:text-primary'>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block hover:border-primary border border-[#CACACA] p-2.5 rounded text-white hover:text-primary'>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-block hover:border-primary border border-[#CACACA] p-2.5 rounded text-white hover:text-primary'>
                <FaPinterestP />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base font-normal text-white/90'>
            Sign up for exclusive offers and updates!
          </p>
          <form className="grid md:grid-cols-3 grid-cols-2 w-full gap-4 items-center mt-5">
            <div className="w-full">
              <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
              <input
                className="text-sm font-medium text-white bg-txt_Clr placeholder:text-white px-4 py-2 border border-transparent focus:border-txt_Clr  outline-none rounded-[5px] w-full"
                type="text"
                name="name"
                id='name'
                placeholder="Your Name" />
            </div>
            <div className="w-full">
              <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
              <input
                className="text-sm font-medium text-white bg-txt_Clr placeholder:text-white px-4 py-2 border border-transparent focus:border-txt_Clr  outline-none rounded-[5px] w-full"
                type="email"
                name="email"
                id='email'
                placeholder="Email  Address" />
            </div>
            <div className="w-full">
              <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-secondary px-4 py-2 rounded-[5px] w-full">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='container mx-auto px-4 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-7 pt-10 mt-10 border-t border-[#86868624] justify-between'>
        <div>
          <h6 className='text-base font-medium text-white mb-5'>
            Solutions
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="/about-us" className='text-sm font-normal text-white hover:text-white/70'>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className='text-sm font-normal text-white hover:text-white/70'>
                Industries
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className='text-sm font-normal text-white hover:text-white/70'>
                Option Library
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className='text-sm font-normal text-white hover:text-white/70'>
                Inspiration Library
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className='text-sm font-normal text-white hover:text-white/70'>
                Digital Corrugated
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-base font-medium text-white mb-5'>
            Company
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="/about-us" className='text-sm font-normal text-white hover:text-white/70'>
                Why Five Packaging
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className='text-sm font-normal text-white hover:text-white/70'>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className='text-sm font-normal text-white hover:text-white/70'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className='text-sm font-normal text-white hover:text-white/70'>
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/about-us" className='text-sm font-normal text-white hover:text-white/70'>
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-base font-medium text-white mb-5'>
            Resources
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="/about-us" className='text-sm font-normal text-white hover:text-white/70'>
                Help Center & FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className='text-sm font-normal text-white hover:text-white/70'>
                Artwork and Guidelines
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className='text-sm font-normal text-white hover:text-white/70'>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className='text-sm font-normal text-white hover:text-white/70'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className='text-sm font-normal text-white hover:text-white/70'>
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='text-base font-medium text-white mb-5'>
            Sustainability
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="#" className='text-sm font-normal text-white hover:text-white/70'>
                Let’s work together for a
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-normal text-white hover:text-white/70'>
                greener environment
              </Link>
            </li>
          </ul>
          <Image src="/images/national.png" alt="national" width={139} height={40} className='mt-5' />
        </div>
        <div>
          <h6 className='text-base font-medium text-white mb-5'>
            Compliance
          </h6>
          <ul className='grid gap-2'>
            <li>
              <Link href="#" className='text-sm font-normal text-white hover:text-white/70'>
                Five Packaging is committed
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm font-normal text-white hover:text-white/70'>
                to deliver manufacturing excellence
              </Link>
            </li>
          </ul>
          <div className='flex gap-2 mt-5'>
            <Image src="/images/iso.png" alt="iso" width={100} height={57} />
            <Image src="/images/fsc.png" alt="fsc" width={60} height={61} />
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 py-5 mt-10 border-t border-[#86868624]'>
        <p className='text-base font-normal text-white md:text-start text-center'>
          © 2023 logo. All Rights Reserved
        </p>
        <div>
          <Image src="/images/payments.png" alt="payments" width={277} height={34} className='ml-auto md:mr-0 mr-auto' />
        </div>
      </div>
    </footer>
  )
}

export default Footer