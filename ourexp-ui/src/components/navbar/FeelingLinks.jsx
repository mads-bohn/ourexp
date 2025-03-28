import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FeelingLinks({feelingList}) {

    let links = feelingList.map(feeling => (<li className='text-sm' key={feeling.id}><NavLink to={"/entries/" + feeling.id}>{feeling.name}</NavLink></li>))

  return (
    <ul>{links}</ul>
  )
}
