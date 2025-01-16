import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
        <div className='fixed top-0 left-0 w-full z-10 p-9 bg-slate-200'>
          <div className='absolute left-0 top-6 ml-52'>
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
            <NavLink 
              to="/entries" 
              className={({isActive}) => 
                isActive ? 'p-6 bg-slate-400 text-white hover:bg-slate-300 hover:text-white active:bg-slate-400 ' : 'p-6 hover:bg-slate-300 active:bg-slate-400'}>
              Browse
            </NavLink>  
          </div>
            
            <div className='absolute right-0 top-6 mr-52'>
             <NavLink 
                to="/account" 
                className={({isActive}) => 
                  isActive ? 'p-6 bg-slate-400 text-white hover:bg-slate-300 hover:text-white ' : 'p-6 hover:bg-slate-300 active:bg-slate-400'}>
                Account
              </NavLink>
            </div>     
               
        </div>
    </div>
  )
}
