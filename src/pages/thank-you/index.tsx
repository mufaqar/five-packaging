import Link from 'next/link'
import React from 'react'

const index = () => {
     return (
          <>
               <div className="flex items-center justify-center h-[calc(100vh-91px)]">
                    <div className="p-4 rounded shadow-lg ring ring-[#C13211]/50">
                         <div className="flex flex-col items-center space-y-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-[#C13211] w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <h1 className="text-4xl font-bold">Thank You !</h1>
                              <p>Thank you for your interest! Check your email for a link to the guide.</p>
                              <Link
                                   href="/"
                                   className="inline-flex items-center px-4 py-2 text-white bg-[#C13211] border border-[#C13211] rounded-full hover:bg-[#C13211] focus:outline-none focus:ring">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                   </svg>
                                   <span className="text-sm font-medium cursor-pointer">
                                        Home
                                   </span>
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default index