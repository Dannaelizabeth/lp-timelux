import React from 'react'
import {arrow} from '../assets/icon'
import { offerts } from '../assets/image'
import Button from '../components/Button'

const Offerts = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>  
        <img 
        src={offerts}
        alt='Promotion'
        width={573}
        height={487}
        className='object-contain w-full'
        />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-blue-oscu'>Uncover </span>
          Unbeatable Offers!
        </h2>
        <p className='mt-4 info-text'>
        Embark on a shopping journey that redefines your experience with unbeatable offers. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
        Explore a World of Possibilities Crafted to Meet Your Unique Desires, Exceeding the Highest Expectations. Your Journey with Us is Simply Exceptional
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconArrow={arrow}/>
          <Button label='Learn more'
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default Offerts