import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/home/Hero'
import Instructions from '../components/home/Instructions'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Instructions />
    </div>
  )
}
