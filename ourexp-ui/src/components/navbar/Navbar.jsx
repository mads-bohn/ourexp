import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Subnav from './Subnav'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false); //boolean state of subnav menu

  // toggles state of subnav menu
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function handleOnBlur() {
    setIsOpen(false);
  }

  return (
    <div className='fixed top-0 left-0 w-full'>
        <div className=' z-10 p-6 bg-slate-200'>
          <div className='mx-auto'>
            <NavLink 
              to="/" 
              className='p-6 hover:bg-slate-300 active:bg-slate-400'>
            Our Experience
            </NavLink>
            <NavLink 
              to="/submit" 
              className={({isActive}) => 
                isActive ? 'p-6 bg-slate-400 text-white hover:bg-slate-300 hover:text-white active:bg-slate-400' : 'p-6 hover:bg-slate-300 active:bg-slate-400'}>
              Write
            </NavLink>
            <NavLink className='p-6 hover:bg-slate-300 active:bg-slate-400' onClick={toggleOpen} >
              Browse
            </NavLink>  
            <NavLink 
                to="/account" 
                className={({isActive}) => 
                  isActive ? 'p-6 bg-slate-400 text-white hover:bg-slate-300 hover:text-white ' : 'p-6 hover:bg-slate-300 active:bg-slate-400'}>
                Account
              </NavLink>
          </div>        
        </div>
        <div className={isOpen ? null : 'hidden'} onBlur={handleOnBlur}>
          <Subnav />
        </div>
    </div>
  )
}
