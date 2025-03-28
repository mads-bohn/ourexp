import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SubmissionForm from '../components/submit/SubmissionForm'

const feelingCategories = [
  "HAPPY",
  "SAD",
  "SURPRISED",
  "DOWN",
  "DISGUSTED",
  "ANGRY",
  "FEARFUL"
]
 

export default function Submit() {
  return (
    <div className='relative top-8'>
      <Navbar />
      <SubmissionForm categories={feelingCategories}/>
    </div>
  )
}
