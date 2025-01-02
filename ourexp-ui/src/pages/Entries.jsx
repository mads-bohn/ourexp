import React from 'react'
import Navbar from '../components/Navbar'
import DisplayEntries from '../components/entries/DisplayEntries'
import { useParams } from 'react-router-dom'

const testEntryArray = [
  {
      "id": 1,
      "text": "I think 2025 is going to be a good year for me.",
      "title": "New Year",
      "time": "2024-12-24T15:26:02.21123",
      "feelings": [
          {
              "id": 10,
              "name": "Optimistic",
              "category": "HAPPY"
          }
      ]
  },
  {
      "id": 2,
      "text": "This journey of getting a tech job has been scary, with a lot of uncertainties. But I know I can count on myself to keep going, and that's what makes me believe it will work out in the end!",
      "title": "Hope in Tech",
      "time": "2024-12-24T15:28:15.452663",
      "feelings": [
          {
              "id": 6,
              "name": "Courageous",
              "category": "HAPPY"
          },
          {
              "id": 10,
              "name": "Optimistic",
              "category": "HAPPY"
          }
      ]
  },
  {
      "id": 3,
      "text": "I've had a feeling that something really good is about to happen to me. I can't wait to find out what it is.",
      "title": "Feeling lucky",
      "time": "2024-12-24T15:29:59.886364",
      "feelings": [
          {
              "id": 10,
              "name": "Optimistic",
              "category": "HAPPY"
          },
          {
              "id": 21,
              "name": "Excited",
              "category": "SURPRISED"
          }
      ]
  },
  {
    "id": 1,
    "text": "I think 2025 is going to be a good year for me.",
    "title": "New Year",
    "time": "2024-12-24T15:26:02.21123",
    "feelings": [
        {
            "id": 10,
            "name": "Optimistic",
            "category": "HAPPY"
        }
    ]
}
]


export default function Entries() {

    const { feeling } = useParams();

  return (
    <div className='relative top-8'>
      <Navbar />
        <DisplayEntries entryArray={testEntryArray} />

      
    </div>
  )
}
