import React from 'react'

const ServiceCards = ({imgUrl, name, description}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center bg-blue-oscu rounded-full'>
            <img
            src={imgUrl} alt={name}
            width={24} height={24}
            />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
            {name}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{description}</p>
    </div>
  )
}

export default ServiceCards