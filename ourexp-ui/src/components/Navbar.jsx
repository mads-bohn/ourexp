import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

export default function Navbar() {
  return (
    <div>
        <ul className='fixed top-0 left-0 w-full p-6 bg-slate-200'>
            <Link to="/" className='mx-6'>Our Experience</Link>
            <Link to="/submit" className='mx-6'>Write</Link>
            <Link to="/entries" className='mx-6'>Browse</Link>
            <Link to="/account" className='mx-6'>Account</Link>
        </ul>
    </div>
  )
}
