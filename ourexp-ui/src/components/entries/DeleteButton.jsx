import React, { useState } from 'react'
import { deleteEntry } from '../../services/deleteEntry'

export default function DeleteButton({id}) {

    // confirmation modal visibility
    const [isVisible, setIsVisible] = useState(false);

    const handleDelete = async () => {
        try {
            await deleteEntry(id);
            window.location.reload(false);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        
    }

    const toggleModal = () => {
        setIsVisible(!isVisible);
    }

  return (
    <div>
        <div className={isVisible ? null : 'hidden'}>
            <div className='w-full h-full fixed top-0 left-0 bg-slate-600 opacity-50'></div>
            <div className='fixed top-1/2 left-1/2 ml-[-196px] mt-[-85px] p-8 border-2 border-slate-300 rounded-xl bg-white z-50'>
                <p className='m-2'>Are you sure you want to delete your entry?</p>
                <button onClick={handleDelete} className='m-2 text-red-600 font-bold hover:border-red-600'>Delete</button>
                <button onClick={toggleModal} className='m-2'>Cancel</button> 
            </div>
        </div>
        <button onClick={toggleModal} className='p-1 text-red-600 font-bold hover:border-red-600'>Delete</button>
    </div>
  )
}
