import React from 'react'
import Navbar from '../components/navbar/Navbar'
import DisplayEntries from '../components/entries/DisplayEntries'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { getEntriesByFeeling } from '../services/getEntriesByFeeling'


export default function Entries() {

    const { feelingId } = useParams();
    const [entries, setEntries] = useState([
        {
            "id": 0,
            "text": "",
            "title": "Loading...",
            "time": "",
            "feelings": []
        }]);

    async function fetchEntries(id) {
        try {
            const result = await axios.get(`http://localhost:8080/entry/feeling/${id}`);
            setEntries(result.data);
        } catch (error) {
            console.error('Error fetching entries by feeling:', error);
            setEntries([
                {
                    "id": 0,
                    "text": "",
                    "title": "Error fetching entries.",
                    "time": "",
                    "feelings": []
                }])
        }
    }

    useEffect(() => {
        fetchEntries(feelingId);
    },[]);


    return (
        <div className='relative top-8'>
        <Navbar />
            <DisplayEntries entryArray={entries} />
        </div>
    )
}
