import React from 'react'

const ContactUs = () => {
  return (
    <section className='py-16 '>
      <div className='container mx-auto px-4'>
        <div className='max-w-[480px] mx-auto'>
          <h2 className='text-2xl font-semibold  text-center'>
            Get Custom Quote
          </h2>
          <p className='text-sm font-medium  text-center mt-2'>
            Fill out the form to get in touch with our dedicated packaging consultant
          </p>
          <form className="grid w-full gap-5 items-center mt-5">
            <div className="w-full flex flex-col">
              <label htmlFor='name' className="text-sm font-medium leading-none hidden">Name</label>
              <input
                className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                type="text"
                name="name"
                id='name'
                placeholder="Your Name" />
              {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
              <input
                className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                type="email"
                name="email"
                id='email'
                placeholder="Email  Address" />
              {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor='phone' className="text-sm font-medium leading-none hidden">Your Contact</label>
              <input
                className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                type="tel"
                name="phone"
                id='phone'
                placeholder="Your Contact" />
              {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor='packing' className="text-sm font-medium leading-none hidden">Cosmetics Packaging</label>
              <input
                className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                type="text"
                name="packing"
                id='packing'
                placeholder="Cosmetics Packaging" />
              {/* {errors.packing && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor='detail' className="text-sm font-medium leading-none hidden">Write your Project Details and Sizes</label>
              <textarea
                className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
                name="detail"
                id='detail'
                rows={3}
                placeholder="Write your Project Details and Sizes"></textarea>
              {/* {errors.detail && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full">
              <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-secondary px-4 py-3 rounded-[5px] w-full">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs