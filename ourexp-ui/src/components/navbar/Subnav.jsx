import React from 'react'
import FeelingLinks from './FeelingLinks'

const happyFeelings = [{"id": 1, "name": "Playful"},{"id": 2, "name": "Content"},{"id": 3,"name": "Interested"},{"id": 4,"name": "Proud"},
  {"id": 5,"name": "Confident"},{"id": 6,"name": "Courageous"},{"id": 7,"name": "Joyful"},{"id": 8,"name": "Grateful"},{"id": 9,"name": "Trusting"},
  {"id": 10,"name": "Optimistic"},{"id": 11,"name": "Inspired"},{"id": 12,"name": "Comfortable"}]
  
  const sadFeelings = [{"id": 13,"name": "Lonely"},{"id": 14,"name": "Vulnerable"},{"id": 15,"name": "Guilty"},{"id": 16,"name": "Hurt"},
  {"id": 17,"name": "Empty"},{"id": 18,"name": "Hopeless"},{"id": 19,"name": "Disheartened"},{"id": 20,"name": "Disconnected"}]
  
  const surprisedFeelings = [{"id": 21,"name": "Excited"},{"id": 22,"name": "Amazed"},{"id": 23,"name": "Confused"},
  {"id": 24,"name": "Shocked"},{"id": 25,"name": "Lost"},{"id": 26,"name": "Alarmed"}]
  
  const downFeelings = [{"id": 27,"name": "Tired"},{"id": 28,"name": "Upset"},{"id": 29,"name": "Overwhelmed"},{"id": 30,"name": "Bored"},
  {"id": 31,"name": "Stressed"},{"id": 33,"name": "Exhausted"},{"id": 34,"name": "Uncomfortable"}]
  
  const disgustedFeelings = [{"id": 35,"name": "Disappointed"},{"id": 36,"name": "Embarassed"},{"id": 37,"name": "Disapproving"},
  {"id": 38,"name": "Repelled"},{"id": 39,"name": "Awful"},{"id": 40,"name": "Horrified"}]
  
  const angryFeelings = [{"id": 41,"name": "Mad"},{"id": 42,"name": "Hostile"},{"id": 43,"name": "Critical"},{"id": 44,"name": "Frustrated"},
  {"id": 45,"name": "Bitter"},{"id": 46,"name": "Resentful"},{"id": 47,"name": "Jealous"},{"id": 48,"name": "Furious"},
  {"id": 49,"name": "Annoyed"},{"id": 50,"name": "Distant"}]
  
  const fearfulFeelings = [{"id": 51,"name": "Afraid"},{"id": 52,"name": "Anxious"},{"id": 53,"name": "Worried"},{"id": 54,"name": "Insecure"},
  {"id": 55,"name": "Weak"},{"id": 56,"name": "Threatened"},{"id": 57,"name": "Nervous"},{"id": 58,"name": "Restless"},
  {"id": 59,"name": "Tense"},{"id": 60,"name": "Suspicious"},{"id": 61,"name": "Dreadful"}]

export default function Subnav() {

  return (
    <div className='relative p-8 bg-slate-200'>
        <FeelingLinks feelingList={happyFeelings}/>
        <FeelingLinks feelingList={sadFeelings}/>
        <FeelingLinks feelingList={surprisedFeelings}/>
        <FeelingLinks feelingList={downFeelings}/>
        <FeelingLinks feelingList={angryFeelings}/>
        <FeelingLinks feelingList={fearfulFeelings}/>
    </div>
  )
}
