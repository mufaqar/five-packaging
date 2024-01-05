import Choose_Us from '@/components/category/choose-us'
import ContentBox from '@/components/category/contentBox'
import Cta from '@/components/category/cta'
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


export default function Product({ productRes, faqRes }: any) {
    console.log("🚀 ~ file: product.tsx:16 ~ Product ~ productRes:", productRes)
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
                <section className='py-16'>
                    <div className='container mx-auto px-4 grid gap-16'>
                        {
                            productRes?.grid?.map((item: any, idx: number) => (
                                <ContentBox
                                    img={urlForImage(item?.image?.asset?._ref).width(306)?.url()}
                                    Cstm_class={` ${idx % 2 === 0 ? 'lg:flex-row flex-col' : 'lg:flex-row-reverse flex-col'}`}
                                    key={idx}
                                    title={item.title}
                                    list={item.list}
                                />
                            ))
                        }
                    </div>
                </section>
                <InstantPrice />
                <Technical_Specs mailerbox={productRes?.mailerbox} />
                <Qoute_Sec />
                <Choose_Us />
                <Cat_Faqs faqRes={faqRes} />
                <Order_Process data={productRes?.orderprocess} />
                <Cta />
            </main>
        </>
    )
}


