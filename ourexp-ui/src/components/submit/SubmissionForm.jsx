import React, { useState } from 'react'
import FeelingSelector from './FeelingSelector';

export default function SubmissionForm({categories}) {

    const [selectedCategory, setSelectedCategory] = useState();


    const categoryButtons = categories.map(category =>
        <button onClick={() => {
            setSelectedCategory(category);
        }}
            key={category}>{category}</button>
    )



  return (
    <div>
        <p>{selectedCategory}</p>
        {categoryButtons}
        <FeelingSelector category={selectedCategory}/>
    </div>
  )
}
