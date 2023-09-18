import React from 'react'
import Button from '../components/Button'
import { clock9 } from '../assets/image'
const Quality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        Explore the Elegance and Precision of Our  
        <span className='text-blue-oscu'> Exquisite Watches</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text '>
        Elevate Every Moment: Our Timepieces are Exquisitely Crafted for Unmatched Quality, Innovation, and Elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'> 
        Our Commitment to Precision and Excellence Guarantees Your Satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details'/>
        </div>
      </div>

<div className='flex-1 flex justify-center items-center'>
  <img
  src={clock9}
  alt='colection'
  width={570}
  className='object-contain' />
</div>
    </section>
  )
}

export default Quality