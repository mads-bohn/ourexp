import React from 'react'

export default function ErrorMessage({message}) {
  return (
    <p className='text-sm text-red-500 text-left'>{message}</p>
  )
}
