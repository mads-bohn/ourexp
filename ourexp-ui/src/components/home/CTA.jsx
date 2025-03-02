import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div>
        <Link 
            to='/submit'
            className='p-4 bg-indigo-800 text-white rounded-lg hover:text-white hover:bg-indigo-600'>
                Write an Entry
        </Link>
    </div>
  )
}
