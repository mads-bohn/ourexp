import React from 'react'
import Navbar from '../components/Navbar'
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
    <div>
      <Navbar />
      <SubmissionForm categories={feelingCategories}/>
    </div>
  )
}
