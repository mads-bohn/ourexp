import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

export default function Navbar() {
  return (
    <div>
        <ul className='fixed top-0 left-0 w-full z-10 p-6 bg-slate-200'>
            <Link to="/" className='p-6 hover:bg-slate-300 active:bg-slate-400'>Our Experience</Link>
            <Link to="/submit" className='p-6 hover:bg-slate-300 active:bg-slate-400'>Write</Link>
            <Link to="/entries" className='p-6 hover:bg-slate-300 active:bg-slate-400'>Browse</Link>
            <Link to="/account" className='p-6 hover:bg-slate-300 active:bg-slate-400'>Account</Link>
        </ul>
    </div>
  )
}
