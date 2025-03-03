import React from 'react'
import Card from './Card'

export default function Instructions() {
  return (
    <div>
        <h2>How Our Experience Works</h2>
        <Card title={"Journal"} description={"Identify feelings from a list and write about your experiences."} imageSrc={'src/assets/placeholder.jpg'}/>
        <Card title={"Share"} description={"Submit your journal entry."} imageSrc={'src/assets/placeholder.jpg'}/>
        <Card title={"Connect"} description={"Read entries from other users with the same feelings."} imageSrc={'src/assets/placeholder.jpg'}/>
    </div>
  )
}
