import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import { validateEntry } from '../../services/validateEntry';
import { editEntry } from '../../services/editEntry';

export default function EditForm({entry}) {

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
        <div className='divide-y-2 border-solid border-2 border-slate-200'>
        <input type='text' id='title' name='title' value={newEntry.title} size={75} 
        onChange={(e)=>handleChange(e)}/>
        <ErrorMessage message={errors.title} />
        <textarea id='text' name='text' rows={9} cols={75} value={newEntry.text}
        onChange={(e)=>handleChange(e)}></textarea>
        <ErrorMessage message={errors.text} />
      </div>
      
      <br />
      <button className='bg-indigo-800 text-white my-4 inline'
              onClick={handleSubmit}>Submit</button>
    </div>
  )
}
