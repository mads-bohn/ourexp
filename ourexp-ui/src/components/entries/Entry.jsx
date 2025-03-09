import React from 'react'
import DisplayFeelings from './DisplayFeelings'
import OptionsDropdown from './OptionsDropdown'

export default function Entry({entryObject}) {
  return (
    <div className='max-w-2xl my-6 mx-40 p-4 border-2'>
        <div className='flex'>
            <h3 className='flex-auto text-xl text-left'>{entryObject.title}</h3>
            <h4 className='flex-auto text-right'>{entryObject.time.slice(0, 10)}</h4>
            <OptionsDropdown entry={entryObject} />
        </div>
        <p className='my-3 text-left'>{entryObject.text}</p>
        <DisplayFeelings feelingsArray={entryObject.feelings} />
    </div>
  )
}
