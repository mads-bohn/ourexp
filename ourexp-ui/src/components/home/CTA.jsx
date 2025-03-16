import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div>
        <Link 
            to='/submit'
            className='p-4 bg-lime-700 text-white text-lg rounded-lg hover:text-white hover:bg-lime-500'>
                Write an Entry
        </Link>
    </div>
  )
}
