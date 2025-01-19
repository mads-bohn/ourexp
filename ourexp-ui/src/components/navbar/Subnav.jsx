import React from 'react'
import FeelingLinks from './FeelingLinks'
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

export default function Subnav() {

  return (
    <div className='flex flex-row justify-center relative p-8 bg-slate-200'>
      <div className='mx-4'>
        <p>Happy</p>
        <FeelingLinks feelingList={happyFeelings}/>
      </div>
      <div className='mx-4'>
        <p>Sad</p>
        <FeelingLinks feelingList={sadFeelings}/>
      </div>
      <div className='mx-4'>
        <p>Surprised</p>
        <FeelingLinks feelingList={surprisedFeelings}/>
      </div>
      <div className='mx-4'>
        <p>Down</p>
        <FeelingLinks feelingList={downFeelings}/>
      </div>
      <div className='mx-4'>
        <p>Disgusted</p>
        <FeelingLinks feelingList={disgustedFeelings}/>
      </div>
      <div className='mx-4'>
        <p>Angry</p>
        <FeelingLinks feelingList={angryFeelings}/>
      </div>
      <div className='mx-4'>
        <p>Fearful</p>
        <FeelingLinks feelingList={fearfulFeelings}/>
      </div>    
        
    </div>
  )
}
