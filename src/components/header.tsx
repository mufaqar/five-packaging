import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks } from '@/const/navlinks'
import { BsTelephone } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import SearchForm from './searchForm'
import { useRouter } from 'next/router'

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)
  const router = useRouter()

  return (
    <>
      <header className='lg:block hidden border-b border-[#D9D9D987]'>
        <div className='border-b border-[#D9D9D987] py-1'>
          <div className='container mx-auto px-4 py-3'>
            <ul className='flex md:flex-row flex-col items-center justify-center gap-1.5'>
              <li>
                <Link href="#" className='text-xs font-semibold text-white bg-primary hover:bg-secondary rounded-full py-1.5 px-14'>
                  Do You Need More This Year?
                </Link>
              </li>
              <li>
                <span className='text-base font-bold text-black'>
                  Special  offers.
                </span>
              </li>
              <li>
                <Link href="#" className='text-xs font-semibold text-white bg-primary hover:bg-secondary rounded-full py-1.5 px-14'>
                  Buy Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='container mx-auto px-4 py-1 flex gap-5 items-center justify-between'>
          <div className='lg:w-[15%] w-1/2'>
            <Link href="/">
              <Image src="/images/logo.png" alt='logo' width={139} height={58} />
            </Link>
          </div>
          <div className='md:w-[45%] w-1/2 flex justify-start'>
            <SearchForm />
          </div>
          <ul className='lg:w-[40%] flex justify-between items-center'>
            <li className='lg:border-x border-x-0 border-[#D9D9D987] lg:px-5 lg:flex gap-5 justify-between group'>
              <Link href="tel:+13211235678" className='text-base font-bold text-darkBlue group-hover:text-[#0E4D66] flex gap-1 items-center'>
                <BsTelephone className="text-3xl rotate-12" />
                <span className='grid'>
                  <span className='text-sm font-normal text-black'>
                    Talk to our packaging expert
                  </span>
                  +1 (321) 123 5678
                </span>
              </Link>
            </li>
            <li className=''>
              <Link href="mailto:youremail@example.com" target='_blank' className='text-sm font-normal text-[#0E4D66] hover:underline flex gap-1 items-center justify-end'>
                youremail@example.com
              </Link>
            </li>
          </ul>
        </div>
        <div className='container mx-auto px-4 py-3 flex gap-5 items-center justify-between'>
          <nav className='lg:w-[60%] w-1/2 flex items-center'>
            <div className='menu_icon text-3xl lg:hidden block w-fit ml-auto'
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (<IoMdClose />) : (<FaBars />)}
            </div>
            <ul className={`lg:gap-10 gap-5 lg:items-center lg:justify-between lg:static lg:flex-row flex-col lg:px-0 lg:py-0 px-4 py-8 lg:bg-transparent ${openNav === true ? "flex absolute left-0 right-0 top-20 z-10 bg-darkBlue" : "lg:flex hidden"}`}>
              {NavLinks?.map((item: any, idx: number) => {
                return (
                  <li key={idx}>
                    <Link href={`${item?.link}`} className={`text-base font-bold md:text-title_Clr text-white  ${router.pathname === item.link ? "link_activ" : "link_hovr"}`}>
                      {item?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className='flex justify-between gap-5'>
            <li>
              <Link href="#" className='bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 text-sm font-semibold rounded-[5px] inline-flex'>
                Beat the Price
              </Link>
            </li>
            <li>
              <Link href="#" className='bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 text-sm font-semibold rounded-[5px] inline-flex'>
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <header className='lg:hidden block border-b border-[#D9D9D987]'>
        <div className='bg-[#F3F3F3] py-1'>
          <div className='container mx-auto px-4 py-3 flex gap-5 items-center justify-between'>
            <div className='w-1/2'>
              <Link href="/">
                <Image src="/images/logo.png" alt='logo' width={139} height={58} />
              </Link>
            </div>
            <nav className='w-1/2 flex items-center'>
              <div className='menu_icon text-3xl lg:hidden block w-fit ml-auto'
                onClick={() => setOpenNav(!openNav)}>
                {openNav ? (<IoMdClose />) : (<FaBars />)}
              </div>
              <ul className={`lg:gap-10 gap-5 lg:items-center lg:justify-between lg:static lg:flex-row flex-col lg:px-0 lg:py-0 px-4 py-8 lg:bg-transparent ${openNav === true ? "flex absolute left-0 right-0 top-20 z-10 bg-darkBlue" : "lg:flex hidden"}`}>
                {NavLinks?.map((item: any, idx: number) => {
                  return (
                    <li key={idx}>
                      <Link href={`${item?.link}`} className={`text-base font-bold md:text-title_Clr text-white  ${router.pathname === item.link ? "link_activ" : "link_hovr"}`}>
                        {item?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className='container mx-auto px-4 py-2 flex gap-5 items-center justify-center'>
          <SearchForm />
        </div>
      </header>
    </>
  )
}

export default Header