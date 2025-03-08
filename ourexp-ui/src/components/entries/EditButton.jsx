import React from 'react'
import { useState } from 'react';
import EditForm from '../submit/EditForm';

export default function EditButton({entry}) {

        // edit form modal visibility
        const [isEditVisible, setIsEditVisible] = useState(false);

        const toggleModal = () => {
            setIsEditVisible(!isEditVisible);
        }
  
    return (
        <div>
            <div className={isEditVisible ? null : 'hidden'}>
                <EditForm entry={entry} />
                <button onClick={toggleModal} className='m-2 inline'>Cancel</button> 
            </div>
            <button onClick={toggleModal} className='text-slate-600 font-bold hover:border-slate-600'>Edit</button>
        </div>
  )
}
