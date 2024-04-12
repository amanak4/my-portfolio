import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Reveal from '../reveal';

const Skill = () => {
  return (
    <>
      {skills.map(({title,percentage},index)=>{
       return( 
        <Reveal key={index}> <div className='progress__box' key={index}>
        <div className='progress__circle'>
          <Reveal> <CircularProgressbar
             className="circle-animation"
             strokeWidth={7.5} 
             text={`${percentage}%`} 
             value={percentage} 
             />
             </Reveal> 
        </div>
        <Reveal>
        <h3 className='skill__title'>{title}</h3>
</Reveal>
         </div>
         </Reveal>
       ) })
      }
    </>
  )
}

export default Skill
