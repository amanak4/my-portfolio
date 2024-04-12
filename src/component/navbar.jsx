import React, { useState } from 'react'
import {links} from '../data'
import '../component/navbar.css'
import NavItem from './NavIte';
const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);
  
  return (
    <div>
    <nav className='nav'>
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`} >
        <ul className='nav__list'>
          {links.map(({name,icon,path},index)=>{
            return( 
              <li className='nav__item' key={index} >
            <NavItem
              onClick={() => {
                      setShowMenu(!showMenu);
              }}
              icon={icon}
              name={name}
              path={path}
            />
          </li>
            );
          })}
        </ul>
      </div>

      <div className={`${showMenu ? 'nav__toggle animated-toggle' : 'nav__toggle'}`} onClick={()=> setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

</div>
  )
}

export default Navbar