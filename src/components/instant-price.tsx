import React, { FormEvent, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


function InstantPrice() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>()
    const onSubmit: SubmitHandler<any> = (data) => {
        const blobImage = new Blob([data.file[0]], { type: data.file[0].type });
        const imageUrl = URL.createObjectURL(blobImage);
        data.file = imageUrl
        setLoading(true);
        SendMail()
        function SendMail() {
            fetch('/api/inquery', {
                method: 'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((res) => {
                console.log('Response received');
                if (res.status === 200) {
                    console.log('Response succeeded!');
                    alert('Message Successfully send.!');
                    reset();
                    setLoading(false);
                }
            });
        }
    }

    return (
        <section className='py-7'>
            <div className='container mx-auto px-4 md:px-10 py-10 bg-[#FDF0D5] rounded-[18px]'>
                <div>
                    <h2 className='text-3xl font-medium text-title_Clr'>
                        Get Instant Prices
                    </h2>
                    <p className='text-base font-normal text-txt_Clr'>
                        Fill out the form to get in touch with our dedicated packaging consultant
                    </p>
                </div>
                <div className='bg-white rounded-[18px] px-4 md:px-10 py-10 mt-5'>
                    <form className='flex flex-col gap-7' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='box_type' className='text-base font-normal text-txt_Clr'>
                                    Box Type
                                </label>
                                <select id='box_type' {...register("box_type", { required: true })} className='text-xs font-normal text-[#B1B1B1] px-1 p-2 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'>
                                    <option disabled>Select Box Type</option>
                                    <option>Shipping Boxes</option>
                                    <option>Mailer Boxes</option>
                                    <option>Product Boxes</option>
                                    <option>Rigid Boxes</option>
                                </select>
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='material' className='text-base font-normal text-txt_Clr'>
                                    Materials
                                </label>
                                <select id='material' {...register("material", { required: true })} className='text-xs font-normal text-[#B1B1B1] p-2 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'>
                                    <option>Select Materials</option>
                                </select>
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='length' className='text-base font-normal text-txt_Clr'>
                                    Length
                                </label>
                                <input
                                    {...register("length", { required: true })}
                                    id='length'
                                    type='number'
                                    placeholder=''
                                    className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                />
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='width' className='text-base font-normal text-txt_Clr'>
                                    width
                                </label>
                                <input
                                    id='width'
                                    {...register("width", { required: true })}
                                    type='number'
                                    placeholder=''
                                    className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                />
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='height' className='text-base font-normal text-txt_Clr'>
                                    Height
                                </label>
                                <input
                                    id='height'
                                    {...register("height", { required: true })}
                                    type='number'
                                    placeholder=''
                                    className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                />
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='dimension' className='text-base font-normal text-txt_Clr'>
                                    Dimension Unit
                                </label>
                                <select id='dimension' {...register("dimension", { required: true })} className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'>
                                    <option>Inch</option>
                                    <option>CM</option>
                                    <option>MM</option>
                                </select>
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='quantity' className='text-base font-normal text-txt_Clr'>
                                    Quantity
                                </label>
                                <input
                                    id='quantity'
                                    {...register("quantity", { required: true })}
                                    type='number'
                                    placeholder=''
                                    className='text-xs font-normal p-2 text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='printing' className='text-base font-normal text-txt_Clr'>
                                    Printing Sides
                                </label>
                                <select id='printing' {...register("printing", { required: true })} className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'>
                                    <option>Outside Only</option>
                                </select>
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='thickness' className='text-base font-normal text-txt_Clr'>
                                    Card Thickness
                                </label>
                                <select id='thickness' {...register("thickness", { required: true })} className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'>
                                    <option>11 pt 230 GSM</option>
                                </select>
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='lamination' className='text-base font-normal text-txt_Clr'>
                                    Coating Lamination
                                </label>
                                <select id='lamination' {...register("lamination", { required: true })} className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'>
                                    <option>Glossy Lamination</option>
                                </select>
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <label htmlFor='finishing' className='text-base font-normal text-txt_Clr'>
                                    Extra Finishing
                                </label>
                                <select id='finishing' {...register("finishing", { required: true })} className='text-xs p-2 font-normal text-[#B1B1B1] px-1 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'>
                                    <option>Debossing</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col justify-between gap-7 items-center'>
                            <div className='md:w-2/3 w-full flex flex-col gap-1'>
                                <label htmlFor='description' className='text-base font-normal text-txt_Clr'>
                                    Description
                                </label>
                                <textarea
                                    id='description'
                                    rows={6}
                                    {...register("description", { required: true })}
                                    className='text-xs font-normal text-[#B1B1B1] p-2 border border-[#CDCFCE] rounded-[5px] focus:outline-none w-full'
                                    placeholder='Provide detailed packaging specifications'>
                                </textarea>
                            </div>
                            <div className='md:w-1/3 w-full flex flex-col gap-1'>
                                <label htmlFor='file' className='text-base font-normal text-txt_Clr'>
                                    Upload your art wrok or reference image
                                </label>
                                <input
                                    id='file'
                                    {...register("file", {
                                        required: "picture is required",
                                    })}
                                    type='file'
                                    placeholder=''
                                    className='text-xs font-normal text-[#B1B1B1] px-1 focus:outline-none w-full'
                                />
                                <p className='text-xs font-normal text-txt_Clr'>
                                    Max file size 20Mb
                                </p>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <button type='submit' className="text-base font-semibold text-white bg-primary hover:bg-secondary px-4 py-3 rounded-[5px] max-w-[471px] mx-auto w-full">
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default InstantPrice