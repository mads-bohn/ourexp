import React from 'react'
import ErrorMessage from '../submit/ErrorMessage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditButton({entry}) {

        // edit form modal visibility
        const [isEditVisible, setIsEditVisible] = useState(false);

        const toggleModal = () => {
            setIsEditVisible(!isEditVisible);
        }

        const navigate = useNavigate(); // navigation hook

    const [newEntry, setNewEntry] = useState({id: entry.id, title: entry.title, text: entry.text}); // entry object
    const [errors, setErrors] = useState({}); // errors object

    const handleChange =(e)=> {
        setNewEntry({...entry,[e.target.name]:e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateEntry({title: newEntry.title, text: newEntry.text});
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          editEntry(entry.id, newEntry.title, newEntry.text, entry.feelings);
          return navigate(`/entries/${entry.feelings[0].id}`);
        }
      }
  
    return (
        <div>
            <div className={isEditVisible ? null : 'hidden'}>
                <div className='divide-y-2 border-solid border-2 border-slate-200'>
                    <input type='text' id='title' name='title' value={newEntry.title} size={75} onChange={(e)=>handleChange(e)}/>
                    <ErrorMessage message={errors.title} />
                    <textarea id='text' name='text' rows={9} cols={75} value={newEntry.text} onChange={(e)=>handleChange(e)}></textarea>
                    <ErrorMessage message={errors.text} />
                </div>
                <br />
                <button className='bg-indigo-800 text-white my-4 inline' onClick={handleSubmit}>Submit</button>
                <button onClick={toggleModal} className='m-2 inline'>Cancel</button> 
            </div>
            <button onClick={toggleModal} className='text-slate-600 font-bold hover:border-slate-600'>Edit</button>
        </div>
  )
}
