import React, { useEffect, useState } from "react";
import {
  FaArrowCircleUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./contact.css";
import Reveal from "../../reveal";
const Contact = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      if(scrollTop>=2400){
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={isScrolled?'scroll_animation contact':'without_animation contact'}  id="Contact">
      <h1 className="contact__heading">Get In</h1>
      <div className="content" style={{display:"flex"}}>
        <div className="detail" style={{display:"flex"}} >
        <Reveal>  <FaLocationArrow className="icon" />
          <div className="location">
          <a href="https://www.linkedin.com/in/aman-kasaudhan-005b0a251/"
              target="_blank"
              rel="noreferrer noopener"
              >
            <h3>Location:</h3>
            <span style={{color:"#fff", opacity:"0.8"}}>Ikauna,Shravasti,UP</span>
            </a>
          </div>
          </Reveal>
          <Reveal> 
          <FaMailBulk className="icon" />
          <div className="mail">
            <h3>Email:</h3>
            <span>amankasaudhanak07@gmail.com</span>
          </div>
</Reveal>
<Reveal> 
          <FaPhone className="icon" />
          <div className="call">
            <h3>Call:</h3>
            <span>8471022320</span>
          </div>
</Reveal>
<Reveal> 
          <div className="link">
            <a
              href="https://www.google.com/maps/place/Ikauna,+Uttar+Pradesh/@27.5289954,81.969113,15z/data=!3m1!4b1!4m6!3m5!1s0x3999cf393074f82f:0x24b23d960bb0973d!8m2!3d27.5315002!4d81.9671185!16zL20vMGY0Xzdj?entry=ttu"
           target="_blank"
              rel="noreferrer noopener"
              className="site"
            >
              <FaLinkedin className="iconl" />
            </a>
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noreferrer noopener"
              className="site"
            >
              <FaGithub className="iconl" />
            </a>
            <a
              href="https://www.instagram.com/amanak_07/?hl=en"
              target="_blank"
              rel="noreferrer noopener"
              className="site"
            >
              <FaInstagram className="iconl" />
            </a>
          </div>
          </Reveal>
        </div>   
      </div>
      <a href="#" className="intial">
          <FaArrowCircleUp />
        </a>
    </div>
  );
};

export default Contact;
