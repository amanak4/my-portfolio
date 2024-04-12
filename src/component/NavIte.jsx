import React, { useState, useEffect } from 'react';

function NavItem({ onClick, icon, name, path }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if(scrollTop > 100&& scrollTop<1590){
      setIsScrolled('#about'); 
      }
      else if(scrollTop<=100){
        setIsScrolled('#');
      }
      else if(scrollTop>=1590&&scrollTop<2400){
        setIsScrolled('#Portfolio');
      }
      else{
        setIsScrolled('#Contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href={path} className={isScrolled===path?'nav__link scrolled' : 'nav__link'} onClick={onClick}>
      {icon}
      <h3 className='nav__name'>{name}</h3>
    </a>
  );
}

export default NavItem;
