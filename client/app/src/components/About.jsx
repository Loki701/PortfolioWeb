

import AboutImage from '../images/profile_pic.jpg';
import {aboutMe} from "../constants";
import { useState } from 'react';

const About = () =>{
  const[fullP, setFullP] = useState(true);

  const handleReadMore = ()=>{
    setFullP(false);
  }
  const firstN = aboutMe.slice(0,3);
    return(
        <section className='about' id='about'>
        <h2 className='heading'>About <span>Me</span><span className='animate scroll' style={{'--i': 1}}></span></h2>
        <div className='about-img'>
          <img src={AboutImage} alt='profile'/>
          <span className='circle-spin'></span>
          <span className='animate scroll' style={{'--i': 2}}></span>
        </div>
        <div className='about-content'>
          <h3>Frontend Developer<span className='animate scroll' style={{'--i': 3}}></span></h3>
          {fullP?
          <>
          {firstN.map((p, idx)=>(
            <p 
            key={idx}
            >
              {p}
              <span className='animate scroll' style={{'--i': 4}}></span>
            </p>
          ))}
          <div className='btn-box btns'>
            <a className='btn' href='#about' onClick={handleReadMore}>Read More</a>
            <span className='animate scroll' style={{'--i': 5}}></span>
          </div>
          </>:
          <>
          {aboutMe.map((p, idx)=>(
            <p key={idx}>{p}<span className='animate scroll' style={{'--i': 4}}></span></p>
          ))}
          </>
          }


        </div>
      </section>
    );
}
export default About;