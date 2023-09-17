import React from 'react'
import { clocks, stadistics } from '../Data'
import Arrow from '../assets/icon/arrow.svg'
import Reloj1 from '../assets/image/clock1.png'
import Button from '../components/Button'
import RelojCard from '../components/RelojCard'
import { useState } from 'react'

const Hero = () => {
  const [bigRelojImg, setBigRelojImg] = useState(Reloj1)
  return (
    <section id='home' 
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-blue-500 '>
      <div className='relative xl:w-1/2 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-blue-oscu'>
          Discover Our Universe of Style
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
        
          <span className='   text-blue-oscu inlilne'>Timelux </span>
          <br />
          <span className='xl:bg-white xl:inline-block xl:whitespace-nowrap relative z-10 pr-4'>
          In Luxury Every
          </span>
         
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Explore Elegance, Precision, and Innovation for Your Timepiece Journey.
        </p>

        <Button label='More' iconArrow={Arrow} />
        
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {stadistics.map((s,index)=>(
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{s.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{s.id}</p>
            </div>
          ))}

        </div>   
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-black bg-cover bg-center'>
        <img 
         src={bigRelojImg}
        alt='Reloj Collection'
        width={420}
        height={602}
        className='object-contain relative z-5 ml-12'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[0.5%] xl:left-0 sm:left-[18%] max-sm:px-2'>
          {
            clocks.map((image, index)=>(
              <div key={index}>
                <RelojCard 
                index={index}
                imgUrl={image}
                changeBigRelojImg={(reloj)=> setBigRelojImg(reloj)}
                bigClockImg={bigRelojImg}
                />
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Hero