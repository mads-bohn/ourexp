import React from 'react'
import DisplayFeelings from './DisplayFeelings'

export default function Entry({entryObject}) {
  return (
    <div>
        <h3>{entryObject.title}</h3>
        <h4>{entryObject.time}</h4>
        <p>{entryObject.text}</p>
        <DisplayFeelings feelingsArray={entryObject.feelings} />
    </div>
  )
}
