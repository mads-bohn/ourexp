import React from 'react'

export default function DisplayFeelings({feelingsArray}) {

    let feelingLabels = feelingsArray.map(feeling => <p className='inline mx-2 py-1 px-2 rounded-2xl bg-slate-300'>{feeling.name}</p>)
  return (
    <div>{feelingLabels}</div>
  )
}
