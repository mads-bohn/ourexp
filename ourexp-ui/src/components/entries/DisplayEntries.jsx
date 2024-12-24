import React from 'react'
import Entry from './Entry';

export default function DisplayEntries({entryArray}) {

  let entries = entryArray.map(entry => <Entry entryObject={entry}/>);
  return (
    <div>{entries}</div>
  )
}
