import React from 'react'
import CTA from './CTA'

export default function Hero() {
  return (
    <div>
        <img src='src/assets/home/hero-background-full.jpg' 
            alt='Pen and notebook' 
            className='w-full absolute right-0 top-6' />
        <div className='relative top-[130px] text-left'>
          <div className='text-3xl font-semibold'>
            <h1 className='my-1'>Our Experience. <br /> Everybody's Journal.</h1>        
          </div>   
          <h2 className='my-7 mb-12 text-2xl'>Share stories and connect with people whose experiences resonate with you.</h2>
          <CTA />
        </div>     
    </div>
  )
}
