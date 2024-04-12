import React from 'react'
import { personalInfo } from '../../src/data'
import Reveal from '../reveal'

const Items = () => {
  return (
    <ul className='about__list'>
       {personalInfo.map(({title,description},index)=>
               {
                return(
                  <Reveal key={index}>  <li className='about__data'>
                     <span>{title}</span><span>{description}</span>
                    </li>
                    </Reveal>
                )
               } )}
    </ul>
  )
}

export default Items
