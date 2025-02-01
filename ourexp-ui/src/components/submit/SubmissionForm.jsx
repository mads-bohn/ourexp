import React, { useState } from 'react'
import FeelingSelector from './FeelingSelector';

export default function SubmissionForm({categories}) {

    const [selectedCategory, setSelectedCategory] = useState();


    // maps categories passed as prop into list of buttons that set selectedCategory state on click
    const categoryButtons = categories.map(category =>
        <button 
            className= {selectedCategory == category ? 'bg-indigo-500 text-white m-1' : 'bg-indigo-800 text-white m-1'}
            onClick={() => {
                setSelectedCategory(category);
            }}
            key={category}>{category.slice(0,1) + category.slice(1).toLowerCase()}</button>
    )



  return (
    <div className='max-w-[43rem] z-0'>
        <h3 className='text-xl text-left my-4'>How are you feeling today?</h3>
        {categoryButtons}
        <FeelingSelector category={selectedCategory}/>
    </div>
  )
}
