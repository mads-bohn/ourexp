import React from 'react'

export default function DisplayFeelings({feelingsArray}) {

    let feelingLabels = feelingsArray.map(feeling => <p key={feeling.id} className='inline m-2 py-1 px-2 rounded-lg bg-slate-300'>{feeling.name}</p>)
  return (
    <div className='mt-5'>{feelingLabels}</div>
  )
}
