import React from 'react'
import ServiceCards from '../components/ServiceCards'
import { services } from '../Data'

const Service = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {
       services.map((service)=>(
         <ServiceCards key={service.name} {...service} />
       ))
      }
    </section>
  )
}

export default Service