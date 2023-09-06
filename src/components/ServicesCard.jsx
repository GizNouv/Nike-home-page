import React from 'react'

const ServicesCard = ({imgURL , subtext , label}) => {
  return (
    <div className='flex flex-col flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px shadow-3xl px-10 py-16'>
        <div className='bg-coral-red flex justify-center items-center w-11 h-11 rounded-full'>
            <img 
            src={imgURL} 
            alt={label}
            className='w-6 h-6' 
            />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServicesCard