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
 
const feelings = [
  [
    {
        "id": 1,
        "name": "playful",
        "category": "HAPPY"
    },
    {
        "id": 2,
        "name": "content",
        "category": "HAPPY"
    },
    {
        "id": 3,
        "name": "confident",
        "category": "HAPPY"
    },
    {
        "id": 4,
        "name": "lonely",
        "category": "SAD"
    },
    {
        "id": 5,
        "name": "hopeless",
        "category": "SAD"
    },
    {
        "id": 6,
        "name": "guilty",
        "category": "SAD"
    },
    {
        "id": 7,
        "name": "amazed",
        "category": "SURPRISED"
    },
    {
        "id": 8,
        "name": "confused",
        "category": "SURPRISED"
    }
]
]

export default function Submit() {
  return (
    <div>
      <Navbar />
      <SubmissionForm categories={feelingCategories}/>
    </div>
  )
}
