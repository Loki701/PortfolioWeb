

import AboutImage from '../images/profile_pic.jpg';
import {aboutMe} from "../constants";
import { useState } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant, zoomIn } from "../utils/motion";
import Button from './Button';
import { styles } from '../styles';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[300px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' bg-bgColor rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () =>{
  const[fullP, setFullP] = useState(true);

  const handleReadMore = ()=>{
    setFullP(false);
  }
  const firstN = aboutMe.slice(0,3);
    return(
        <section className=' flex justify-center items-center flex-col gap-[2rem] bg-colorBlack pt-[10rem] pb-[20rem]' id='about'>
        <motion.h2 
        variants={slideIn("down", "tween", .2, 1)}
        className='heading'
        >About <span>Me</span></motion.h2>
        <EarthCanvas />
        <motion.div 
        variants={textVariant(0.3)}
        className='flex flex-col justify-center items-center gap-5'>
        <div className='px-[5rem]'>
          {fullP?
          <>
          {firstN.map((p, idx)=>(
            <p 
            key={idx}
            className="relative text-[1.6rem] max-w-[80rem] "
            >
              &emsp;&emsp;&emsp;
              {p}
            </p>
          ))}
          <div className={`${styles.aboutButtonCover} mt-10`}>
            <Button title="Read More" id="about" toggle={true} click={handleReadMore} />
          </div>
          </>:
          <>
          {aboutMe.map((p, idx)=>(
            <p key={idx} className="relative text-[1.6rem] max-w-[80rem] ">&emsp;&emsp;&emsp;{p}</p>
          ))}
          </>
          }
        </div>


        </motion.div>
        <div className='my-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </section>
    );
}
export default SectionWrapper(About);