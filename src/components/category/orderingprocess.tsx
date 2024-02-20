import React from 'react'

function Orderingprocess() {
  return (
    <section className='py-16 mt-8 bg-[#F7F7F7]'>
    <div className='container mx-auto px-4'>
        <div>
            <h2 className='md:text-[35px] leading-[40px] text-[25px] font-[Poppinssemibold] text-[#252525]'>
                Mailer Box Ordering Process
            </h2>
            <p className='text-[17px] leading-[25px] text-[#666666] pt-4 font-[PoppinsRegular]'>
                A simple, 6-step process for getting custom mailer boxes, with dedicated support and ongoing consulting every step of the way.
            </p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10'>
            {
                data?.map((item: any, idx: number) => (
                    <div className='bg-white py-10 lg:px-8 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
            <div>
                <h3 className='text-xl font-semibold text-title_Clr my-4'>
                    {item.title}
                </h3>
                <p className='text-base font-normal text-txt_Clr'>
                    {item.des}
                </p>
            </div>
        </div>
                ))
            }


        </div>
    </div>
</section>


   
  )
}

export default Orderingprocess

const data =[{
    title:"1. Get a quote",
    des:"Go to Company name to customize your mailer boxes and get an instant quote."
},
{
    title:"2. Purchase a sample (optional)",
    des:"Get a sample of your mailer box to test size and quality before starting a bulk order."
},
{
    title:"3. Place your order",
    des:"Choose your preferred shipping method and place your production order on our platform."
},
{
    title:"4. Upload artwork",
    des:"Add your artwork to the dieline template that we tailor make to your box specifications."
},
{
    title:"5. Start production",
    des:"Once your artwork is approved, we'll start production, which typically takes 12-16 days."
},
{
    title:"6. Ship packaging",
    des:"After passing quality assurance, we'll ship your packaging to your specified location(s)."
},




]