import React from 'react'

const feelings = [
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

export default function FeelingSelector({category}) {


    // if feeling.category matches category prop, push to feelingsList

    // map feelingsList into buttons

  return (
    <div>FeelingSelector</div>
  )
}
