import React from 'react'
import Navbar from '../components/Navbar'
import Entry from '../components/entries/Entry'

const testEntry =     {
  "id": 202,
  "text": "Wow, this time feature really works!",
  "title": "Dev is amazing",
  "time": "2024-11-18T15:01:06.129092",
  "feelings": [
      {
          "id": 7,
          "name": "amazed",
          "category": "SURPRISED"
      }
  ]
}

export default function Entries() {
  return (
    <div>
      <Navbar />
      <Entry entryObject={testEntry} />
    </div>
  )
}
