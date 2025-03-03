import React from 'react'

export default function Card({title, description, imageSrc}) {
  return (
    <div>
      <img src={imageSrc} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
