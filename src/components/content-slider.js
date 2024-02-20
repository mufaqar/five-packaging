import React from "react";
import Slider from "react-slick";
import ContentBox from "./category/contentBox";
import { urlForImage } from "../../sanity/lib/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Content_Slider = ({ data }) => {

    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const slider = React.useRef(null);
    return (
        <section className='pt-6 relative' id="grid_slider">
            <div className='container mx-auto px-4'>
                <Slider ref={slider} {...settings}>
                    {
                        data?.map((item, idx) => (
                            <ContentBox
                                img={urlForImage(item?.image?.asset?._ref).width(306)?.url()}
                                Cstm_class={``}
                                key={idx}
                                title={item.title}
                                list={item.list}
                            />
                        ))
                    }
                </Slider>
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl text-[#D3D5D4] " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl text-[#D3D5D4] " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
            </div>
        </section>
    );
};

export default Content_Slider;