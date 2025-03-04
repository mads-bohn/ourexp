import React from 'react'

export default function Card({title, description, imageSrc}) {
  return (
    <div className='flex-auto p-2 mx-6'>
      <img src={imageSrc} className='p-4'/>
      <h3 className='my-2 text-2xl'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
