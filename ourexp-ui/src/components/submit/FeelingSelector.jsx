import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function FeelingSelector({category}) {

  const [feelingsList, setFeelingsList] = useState([]);

  function getFeelings() {
    axios.get(`http://localhost:8080/feeling/category/${category}`)
        .then(response => {
            setFeelingsList(response.data);
        })
        .catch(error => {
            console.error("Error fetching feelings:", error);
        });
  }

  useEffect(() => {
    getFeelings();
  }, [category]);

    const feelingButtons = feelingsList.map(feeling =>
      <button>{feeling.name}</button>
    )


  return (
    <div>{feelingButtons}</div>
  )
}
