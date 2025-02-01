import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitEntry } from '../../services/submitEntry';
import happy from '../../assets/feelings/happy.json'
import sad from '../../assets/feelings/sad.json'
import surprised from '../../assets/feelings/surprised.json'
import down from '../../assets/feelings/down.json'
import disgusted from '../../assets/feelings/disgusted.json'
import angry from '../../assets/feelings/angry.json'
import fearful from '../../assets/feelings/fearful.json'

const happyFeelings = happy;
const sadFeelings = sad;
const surprisedFeelings = surprised;
const downFeelings = down;
const disgustedFeelings = disgusted;
const angryFeelings = angry;
const fearfulFeelings = fearful;

export default function FeelingSelector({category}) {

  const [feelingsList, setFeelingsList] = useState([]);   // list of feelings to display
  const [selectedFeeling, setSelectedFeeling] = useState(); // user-selected feeling
  const [entry, setEntry] = useState({title: "", text: ""}); // entry object

  const navigate = useNavigate(); // navigation hook

  const{title, text} = entry;

  // sends current state to backend and redirects to entries with given feeling
  const handleSubmit = async () => {
    submitEntry(entry.title, entry.text, [{id: selectedFeeling.id}]);
    return navigate(`/entries/${selectedFeeling.id}`);
  }

  // updates entry on input change
  const handleChange =(e)=> {
      setEntry({...entry,[e.target.name]:e.target.value})
  }

  // sets feelingsList when category is changed
  useEffect(() => {
    if (category == "HAPPY") {
      setFeelingsList(happyFeelings);
    } else if (category == "SAD") {
      setFeelingsList(sadFeelings);
    } else if (category == "SURPRISED") {
      setFeelingsList(surprisedFeelings);
    } else if (category == "DOWN") {
      setFeelingsList(downFeelings);
    } else if (category == "DISGUSTED") {
      setFeelingsList(disgustedFeelings);
    } else if (category == "ANGRY") {
      setFeelingsList(angryFeelings);
    } else if (category == "FEARFUL") {
      setFeelingsList(fearfulFeelings);
    }
  }, [category]);

  // maps feelingsList to buttons
    const feelingButtons = 
    feelingsList.map(feeling =>
      <button 
      className= {selectedFeeling == feeling ? 'bg-indigo-500 text-white m-1' : 'bg-indigo-800 text-white m-1'}
        onClick={() => {
          setSelectedFeeling(feeling);
        }}
        key={feeling.name}>{feeling.name}</button>
    )

if (!category) {
  return (<></>);
}
else if (!selectedFeeling) {
  return (
    <div className='my-6'>
      <p className='text-xl text-left my-4'>Dig a little deeper.</p>
      {feelingButtons}
    </div>
  )
} else {
  return (
    <div className='relative'>
      <div className='my-6'>
        <p className='text-xl text-left my-4'>Dig a little deeper.</p>
        {feelingButtons}
      </div>
      
      <p className='text-xl text-left my-4'>What has you feeling {selectedFeeling.name.toLowerCase()}?</p>
      <div className='divide-y-2 border-solid border-2 border-slate-200'>
        <input type='text' id='title' name='title' value={title} size={75} 
        onChange={(e)=>handleChange(e)}/>
        <textarea id='text' name='text' rows={9} cols={75} value={text}
        onChange={(e)=>handleChange(e)}></textarea>
      </div>
      
      <br />
      <button className='bg-indigo-800 text-white my-4 absolute right-0'
              onClick={handleSubmit}>Submit</button>
    </div>
  )
}
  
}
