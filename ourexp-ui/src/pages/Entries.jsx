import React from 'react'
import Navbar from '../components/Navbar'
import Entry from '../components/entries/Entry'

const testEntry =     {
  "id": 202,
  "text": "Wow, this time feature really works! It's awesome to see his hard work paying off.",
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

const testEntryTwo =  {
  "id": 252,
  "text": "He's so talented. He's a pro at playing fetch. I like to throw his toys for him. After he's done tearing apart the house, he likes to nap. He's got life figured out!",
  "title": "I love my cat",
  "time": "2024-11-29T12:43:46.982854",
  "feelings": [
      {
          "id": 1,
          "name": "playful",
          "category": "HAPPY"
      },
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
        <Entry entryObject={testEntryTwo} />

      
    </div>
  )
}
