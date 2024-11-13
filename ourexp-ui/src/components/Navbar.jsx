import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

export default function Navbar() {
  return (
    <div>
        <ul>
            <Link to="/">Our Experience</Link>
            <Link to="/submit">Write Entry</Link>
            <Link to="/profile">Account</Link>
        </ul>
    </div>
  )
}
