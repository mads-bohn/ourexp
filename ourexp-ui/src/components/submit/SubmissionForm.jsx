import React from 'react'

export default function SubmissionForm({categories}) {

    const categoryButtons = categories.map(category =>
        <button>{category}</button>
    )
    
  return (
    <div>{categoryButtons}</div>
  )
}
