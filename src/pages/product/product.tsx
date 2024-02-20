import Choose_Us from '@/components/category/choose-us'
import ContentBox from '@/components/category/contentBox'
import Ordermail from '@/components/category/ordermail'
import Cat_Faqs from '@/components/category/faqs'
import Get_Started from '@/components/category/get-started'
import Order_Process from '@/components/category/order-process'
import Technical_Specs from '@/components/category/technical-specs'
import Banner from '@/components/products/banner'
import Qoute_Sec from '@/components/products/qoute-sec'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Head from 'next/head'
import InstantPrice from '@/components/instant-price'
import Content_Slider from '@/components/content-slider'
import Blog_Sec from '@/components/blog-sec'
import ProductFeatures from '@/components/productfeatures'
import CustomBox from '@/components/custombox'
import ReviewProducts from '@/components/reviewproducts'
import RelatedProducts from '@/components/relatedproducts'
export default function Product({ productRes, faqRes }: any) {
    return (
        <>
            <Head>
                <title>{productRes?.metatitle}</title>
                <meta name='keywords' content={productRes?.metatags} />
                <meta name='description' content={productRes?.metadescription} />
                <meta name='subject' content="products" />
                <meta name='copyright' content='packhoop' />
                <meta name='language' content='En' />
                <meta name='robots' content='index,follow' />
                <meta name='subtitle' content={productRes?.metadescription} />
                <meta name='target' content={productRes?.metatitle} />
            </Head>
            <main>
                <Banner data={productRes} />
                <Get_Started data={productRes} />
                <ProductFeatures/>
                <Content_Slider data={productRes?.grid} />
               <CustomBox/>
               <Order_Process data={productRes?.orderprocess} />
                <InstantPrice />
                <Technical_Specs mailerbox={productRes?.mailerbox} />
                <Qoute_Sec />
                <Choose_Us />
                <ReviewProducts/>
                <Cat_Faqs faqRes={faqRes} />
                <Ordermail />
                <RelatedProducts/>
                <Blog_Sec />

            </main>
        </>
    )
}


