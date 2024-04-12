import React, { useEffect, useState } from 'react'
import './portfolio.css';
import { portfolio } from '../../data';
import Portfolioitems from '../../component/portfolioitems';
import Reveal from '../../reveal';
const Portfolio = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
     if(scrollTop>=1590&&scrollTop<2400){
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*---------------*/


  return (
    <div className={isScrolled?'scroll_animation':'without_animation'} id='Portfolio'>
       <h1 className='heading'>My </h1>
       <div className='projects'>

       {
        portfolio.map((item)=>{
          return <Portfolioitems key={item.id} {...item}/>
        })
       }
      
       </div>
       </div>
  )
}

export default Portfolio
