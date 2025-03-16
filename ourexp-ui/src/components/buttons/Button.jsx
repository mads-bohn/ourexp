import React from 'react'

export default function Button({title, size, onClick}) {
  return (
    <button 
      className={`bg-lime-700 text-white text-${size} rounded-lg`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
