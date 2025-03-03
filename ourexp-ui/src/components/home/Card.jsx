import React from 'react'

export default function Card({title, description, imageSrc}) {
  return (
    <div className='flex-auto p-2 m-2'>
      <img src={imageSrc} />
      <h3 className='text-2xl'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
