import React from 'react'
import { client } from '../../../sanity/lib/client';
import { Qproducts } from '../../../sanity/queries';
import Packing_Design from '@/components/home/packing-design';

const Products = ({productsRes}:any) => {
  return (
    <section className='container mx-auto px-3'>
        <Packing_Design data={productsRes} title="All Products" content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques."/>
    </section>
  )
}

export default Products


export async function getServerSideProps() {
     const productsRes = await client.fetch(Qproducts);
     return {
       props: {
         productsRes,
         preview: true
       }
     };
   }