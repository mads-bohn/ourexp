import React from 'react'

export default function Entry({entryObject}) {
  return (
    <div>
        <h3>{entryObject.title}</h3>
        <h4>{entryObject.time}</h4>
        <p>{entryObject.text}</p>
    </div>
  )
}
