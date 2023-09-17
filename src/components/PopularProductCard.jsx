import React from 'react'
import star from '../assets/icon/star.svg'

const PopularProductCard = ({imgUrl, name, price, calification}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgUrl} alt={name}
        className='w-[282px] h-[282]'
        />
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt='Calification icon' width={24} height={24} />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>{calification}</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-blue-oscu leading-normal'>
            {price}
        </p>
    </div>
  )
}

export default PopularProductCard