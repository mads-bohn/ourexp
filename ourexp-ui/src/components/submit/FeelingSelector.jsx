import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function FeelingSelector({category}) {

  const [feelingsList, setFeelingsList] = useState([]);

  // gets feelings from backend with category passed as props
  function getFeelings() {
    axios.get(`http://localhost:8080/feeling/category/${category}`)
        .then(response => {
            setFeelingsList(response.data);
        })
        .catch(error => {
            console.error("Error fetching feelings:", error);
        });
  }

  // gets feelings when category is changed
  useEffect(() => {
    getFeelings();
  }, [category]);

  // maps feelingsList to buttons
    const feelingButtons = feelingsList.map(feeling =>
      <button>{feeling.name}</button>
    )


  return (
    <div>{feelingButtons}</div>
  )
}
