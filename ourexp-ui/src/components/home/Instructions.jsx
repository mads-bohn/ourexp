import React from 'react'
import Card from './Card'

export default function Instructions() {
  return (
    <div className='relative top-[160px] my-24 mx-auto max-w-[80%] p-8 bg-white rounded-3xl shadow-2xl'>
        {/* <h2 className='p-2 text-3xl font-semibold'>How It Works</h2> */}
        <div className='flex flex-row'>
            <Card title={"Journal"} description={"Identify feelings from a list and write about your experiences."} imageSrc={'src/assets/home/share.png'}/>
            <Card title={"Share"} description={"Submit your journal entry to the Our Experience database."} imageSrc={'src/assets/home/journal.png'}/>
            <Card title={"Connect"} description={"Read entries from other users with the same feelings as you."} imageSrc={'src/assets/home/connect.png'}/>
        </div>
    </div>
  )
}
