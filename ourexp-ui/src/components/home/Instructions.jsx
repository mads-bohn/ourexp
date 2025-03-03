import React from 'react'
import Card from './Card'

export default function Instructions() {
  return (
    <div className='max-w-[80%]'>
        <h2 className='text-2xl'>How Our Experience Works</h2>
        <div className='flex flex-row'>
            <Card title={"Journal"} description={"Identify feelings from a list and write about your experiences."} imageSrc={'src/assets/home/journal.png'}/>
            <Card title={"Share"} description={"Submit your journal entry."} imageSrc={'src/assets/home/share.png'}/>
            <Card title={"Connect"} description={"Read entries from other users with the same feelings as you."} imageSrc={'src/assets/home/connect.png'}/>
        </div>
    </div>
  )
}
