import React from 'react'
import { services } from '../constants'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
    <section className='flex flex-wrap gap-9 justify-center items-center '>
      {
        services.map((service) => <ServicesCard key={service.label} {...service}/>)
      }
    </section>
  )
}

export default Services