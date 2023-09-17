import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import {products} from '../Data/index'
const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
        Explore Our <span className='text-blue-oscu'>Bestselling </span>Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Indulge in Unparalleled Quality and Style with Our Coveted Selections. Explore a Universe of Comfort, Design, and Value
        </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-14 '>
        {products.map ((product)=>(
         <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProduct