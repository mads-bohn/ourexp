import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const happyFeelings = [{"id": 1, "name": "Playful"},{"id": 2, "name": "Content"},{"id": 3,"name": "Interested"},{"id": 4,"name": "Proud"},
{"id": 5,"name": "Confident"},{"id": 6,"name": "Courageous"},{"id": 7,"name": "Joyful"},{"id": 8,"name": "Grateful"},{"id": 9,"name": "Trusting"},
{"id": 10,"name": "Optimistic"},{"id": 11,"name": "Inspired"},{"id": 12,"name": "Comfortable"}]

const sadFeelings = [{"id": 13,"name": "Lonely"},{"id": 14,"name": "Vulnerable"},{"id": 15,"name": "Guilty"},{"id": 16,"name": "Hurt"},
{"id": 17,"name": "Empty"},{"id": 18,"name": "Hopeless"},{"id": 19,"name": "Disheartened"},{"id": 20,"name": "Disconnected"}]

const surprisedFeelings = [{"id": 21,"name": "Excited"},{"id": 22,"name": "Amazed"},{"id": 23,"name": "Confused"},
{"id": 24,"name": "Shocked"},{"id": 25,"name": "Lost"},{"id": 26,"name": "Alarmed"}]

const downFeelings = [{"id": 27,"name": "Tired"},{"id": 28,"name": "Upset"},{"id": 29,"name": "Overwhelmed"},{"id": 30,"name": "Bored"},
{"id": 31,"name": "Stressed"},{"id": 32,"name": "Bored"},{"id": 33,"name": "Exhausted"},{"id": 34,"name": "Uncomfortable"}]

const disgustedFeelings = [{"id": 35,"name": "Disappointed"},{"id": 36,"name": "Embarassed"},{"id": 37,"name": "Disapproving"},
{"id": 38,"name": "Repelled"},{"id": 39,"name": "Awful"},{"id": 40,"name": "Horrified"}]

const angryFeelings = [{"id": 41,"name": "Mad"},{"id": 42,"name": "Hostile"},{"id": 43,"name": "Critical"},{"id": 44,"name": "Frustrated"},
{"id": 45,"name": "Bitter"},{"id": 46,"name": "Resentful"},{"id": 47,"name": "Jealous"},{"id": 48,"name": "Furious"},
{"id": 49,"name": "Annoyed"},{"id": 50,"name": "Distant"}]

const fearfulFeelings = [{"id": 51,"name": "Afraid"},{"id": 52,"name": "Anxious"},{"id": 53,"name": "Worried"},{"id": 54,"name": "Insecure"},
{"id": 55,"name": "Weak"},{"id": 56,"name": "Threatened"},{"id": 57,"name": "Nervous"},{"id": 58,"name": "Restless"},
{"id": 59,"name": "Tense"},{"id": 60,"name": "Suspicious"},{"id": 61,"name": "Dreadful"}]



export default function FeelingSelector({category}) {

  const [feelingsList, setFeelingsList] = useState([]);   // list of feelings to display
  const [selectedFeeling, setSelectedFeeling] = useState(); // user-selected feeling
  const [entry, setEntry] = useState({title: "", text: ""}); // entry object

  const{title, text} = entry;

  // sends current state to backend in JSON format on submit
  const handleSubmit = async () => {
    axios.post('http://localhost:8080/entry', {
      title: title,
      text: text,
      feelings: {id: selectedFeeling.id}
    })
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
        className='bg-indigo-800 text-white m-1'
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
              onSubmit={handleSubmit}>Submit</button>
    </div>
  )
}
  
}
