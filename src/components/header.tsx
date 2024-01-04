import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLinks } from '@/const/navlinks'
import { AiOutlineSearch } from 'react-icons/ai'
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
      <header className='py-4 border-b border-[#D9D9D987]'>
        <div className='container mx-auto px-4 flex gap-5 items-center justify-between'>
          <div className='lg:w-[20%] w-1/2'>
            <Link href="/">
              <Image src="/images/logo.png" alt='logo' width={139} height={58} />
            </Link>
          </div>
          <nav className='lg:w-[43%] w-1/2 flex items-center'>
            <div className='menu_icon text-3xl lg:hidden block w-fit ml-auto'
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (<IoMdClose />) : (<FaBars />)}
            </div>
            <ul className={`lg:gap-7 gap-5 lg:items-center lg:justify-center lg:static lg:flex-row flex-col lg:px-0 lg:py-0 px-4 py-8 lg:bg-transparent ${openNav === true ? "flex absolute left-0 right-0 top-16 bg-white" : "lg:flex hidden"}`}>
              {NavLinks?.map((item: any, idx: number) => {
                return (
                  <li key={idx}>
                    <Link href={`${item?.link}`} className={`text-base font-bold text-title_Clr hover:link_activ  ${router.pathname === item.link && "link_activ"}`}>
                      {item?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className='lg:w-[37%] lg:flex gap-5 justify-between hidden'>
            <div className='lg:border-x border-x-0 border-[#D9D9D987] lg:px-5 lg:flex gap-5 justify-between'>
              <button onClick={() => setOpenSearch(!openSearch)}>
                <AiOutlineSearch className="text-2xl" />
              </button>
              <Link href="#" className='text-base font-bold text-title_Clr hover:text-secondary flex gap-1 items-center'>
                <BsTelephone className="text-2xl rotate-12" />
                <span className='grid'>
                  <span className='text-sm font-normal text-primary'>
                    Live chat or:
                  </span>
                  +1 (321) 123 5678
                </span>
              </Link>
            </div>
            <Link href="#" className='bg-primary hover:bg-secondary px-8 py-4 text-sm font-semibold text-white rounded-[5px]'>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </header>
      <div className={`${openSearch === true ? "block" : "hidden"}`}>
        <SearchForm />
      </div>
    </>
  )
}

export default Header