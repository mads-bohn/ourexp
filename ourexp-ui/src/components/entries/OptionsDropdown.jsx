import React from 'react'
import { useState } from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton'

export default function OptionsDropdown({entry}) {

    const [isVisible, setIsVisible] = useState(false);

    const toggleDropdown = () => {
        setIsVisible(!isVisible);
    }

  return (
    <div>
        <button onClick={toggleDropdown}>...</button>
        <div className={isVisible ? null : 'hidden'}>
            <EditButton entry={entry} />
            <DeleteButton id={entry.id} />
        </div>
    </div>
  )
}
