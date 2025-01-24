import React from 'react'
import { deleteEntry } from '../../services/deleteEntry'

export default function DeleteButton({id}) {

    const handleClick = async () => {
        deleteEntry(id);
        // reload page?
    }

  return (
    <div>
        <button onClick={handleClick}>Delete</button>
    </div>
  )
}
