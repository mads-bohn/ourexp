import React from 'react'
import CTA from './CTA'

export default function Hero() {
  return (
    <div className='relative'>
        <img src='src/assets/hero-background.png' 
            alt='Pen and notebook' 
            className='w-[45%] fixed right-0 top-6' />
        <div className='fixed left-0 top-1/4 ml-[10%] text-left'>
          <div className='text-3xl font-semibold'>
            <h1 className='my-1'>Our Experience. <br /> Everybody's Journal.</h1>        
          </div>   
          <h2 className='my-7 mb-9 text-2xl'>Share stories and connect with people whose experiences resonate with you.</h2>
          <CTA />
        </div>
        
    </div>
  )
}
