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
        <button onClick={toggleDropdown} className='ml-2 py-0 px-2 bg-slate-300 text-xl'>...</button>
        <div className={isVisible ? 'fixed p-2 bg-white shadow-lg' : 'hidden'}>
            <EditButton entry={entry} />
            <DeleteButton id={entry.id} />
        </div>
    </div>
  )
}
