import React from 'react'

export default function Button({title, onClick}) {
  return (
    <button 
      className={`bg-lime-700 text-white rounded-lg`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
