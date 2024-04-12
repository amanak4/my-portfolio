import React , { useEffect, useState }from "react";
import "./about.css";
import Aboutimg from "../../assets/dp2.jpg";
import { FaDotCircle, FaDownload } from "react-icons/fa";
import CV from "../../assets/cv.pdf";
import Items from "../../component/items";
import Skill from "../../component/skill";
import Reveal from "../../reveal";
const About = () => {
  const [isScrolled_heading, setIsScrolled_heading] = useState(false);
  const [isScrolled_content, setIsScrolled_content] = useState(false);

  const [isScrolled_skill, setIsScrolled_skill] = useState(false);

  const [isScrolled_edu, setIsScrolled_edu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if(scrollTop > 100&& scrollTop<150){
      setIsScrolled_heading(true); 
      }
      else if(scrollTop > 280&& scrollTop<600){
        setIsScrolled_content(true); 
      }
      else if(scrollTop > 850&& scrollTop<1090){
        setIsScrolled_skill(true); 
      }
      else if(scrollTop > 1330&& scrollTop<1590){
        setIsScrolled_edu(true); 
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main id="about">
      <div className="about">
     <Reveal>   <h1 className={isScrolled_heading?'scroll_animation about__heading':'without_animation about__heading'}>About</h1>
     </Reveal> 
        <div 
        className={isScrolled_content?'scroll_animation about__content':'without_animation about__content'}>
          <div className="detail">
          <Reveal>  <span className="subheading">Personal Info</span>
          </Reveal> 
            <Items />
            <Reveal>    <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
            </Reveal> 
          </div>
          <img src={Aboutimg} alt="" className="about__img" />
        </div>
      </div>

      <div className="separator"></div>

      <section className={isScrolled_skill?'scroll_animation skill':'without_animation skill'}>
      <Reveal>  <h1 className="skill__heading">My Skills</h1>
      </Reveal>
        <div className="skill__container">
          {" "}
          <Skill />
        </div>
      </section>

      <div className="separator"></div>

      <section className={isScrolled_edu?'scroll_animation resume':'without_animation resume'}>
      <Reveal>  <h1 className="edu__heading">Education</h1>
      </Reveal>
      <Reveal> <div className="collage">
      <Reveal>   <h1>Indian Institute of Technology (ISM) Dhanbad</h1>
</Reveal> 
        <Reveal>   <span>
            B.Tech in Mechanical Engineering <FaDotCircle /> Nov 2022 - May 2026
          </span>
          </Reveal>
          <Reveal>
          <span>CGPA - 8.51</span>
          </Reveal> 
        </div>
</Reveal> 
        <div className="collage">
        <Reveal>   <h1>Satya's The Aryan School</h1>
</Reveal> 
        <Reveal>   <span>
            PCM with Physical Education <FaDotCircle /> April 2019 - July 2021
          </span>
          </Reveal>
          <Reveal>
          <span>Scored : 92.60%</span>
          </Reveal> 
        </div>
      </section>
    </main>
  );
};

export default About;
