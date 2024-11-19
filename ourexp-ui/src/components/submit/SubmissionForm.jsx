import React, { useState } from 'react'

export default function SubmissionForm({categories, feelings}) {

    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedFeeling, setSelectedFeeling] = useState();

    const categoryButtons = categories.map(category =>
        <button onClick={() => {
            setSelectedCategory(category);
        }}
            key={category}>{category}</button>
    )

    const feelingButtons = feelings.map(feeling =>
        <button>{feeling.name}</button>
    )

  return (
    <div>
        <p>{selectedCategory}</p>
        {categoryButtons}
    </div>
  )
}
