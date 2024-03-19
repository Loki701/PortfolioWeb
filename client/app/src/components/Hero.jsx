import { motion } from "framer-motion";
import {fadeIn, textVariant, slideIn} from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import Button from "./Button";
import b2 from "../images/m3.mp4";
import b1 from "../images/1.mp4";
import fastHero from "../images/fastHero.mp4"
import { useEffect, useState } from "react";

const Hero = ()=>{
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(()=>{
    const resizeBehavior = ()=>{
      setScreenHeight(window.innerHeight);
    }
    window.addEventListener("resize", resizeBehavior)

    return ()=>{window.removeEventListener("resize", resizeBehavior)}
  },[])

    return(
        <section className="flex flex-col min-h-[100vh] justify-center py-[9%]" id='hero'>
        <div className={`max-w-[60rem] ${styles.padding} mx-10 z-[99]`}>
          <motion.h1 
          variants={fadeIn("","",0.1,1)}
          className=" relative inline-block text-[5.6rem] font-bold leading-[1.3]  ">Hi, I'm <span className=" text-textColor">Jose Figueredo</span>
          {/* <span className='animate' style={{'--i': 2}}></span> */}
          </motion.h1>

          <div className="w-max mt-2">
          <h1 className='animate-typing text-[2rem] overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>Full Stack Developer</h1>
          </div>
        
          <motion.p 
          variants={textVariant()}
          className="relative text-[1.6rem] my-10 pr-[15rem] ggg:pr-[0]">A passionate software developer dedicated to crafting digital solutions that redefine possibilities. With a blend of creativity and cutting-edge technology, I transform ideas into functional and elegant software.
          {/* <span className='animate' style={{'--i': 4}}></span> */}
          </motion.p>
          
          <motion.div 
          variants={slideIn("right", "tween", 0.2, 1)}
          className={styles.buttonCover}
          >
            <Button title="Let's Talk" id="contact"/>
          </motion.div>
        </div>
        
        <div className={`${screenHeight > 620?"absolute": ""} mt-20 ml-20 bottom-16 sm:w-40 flex justify-between w-[17rem] z-[99]`}>
          {/* <motion.a 
          variants={slideIn("left", "tween", 0.2, .5)}
          className={styles.linkBall} 
          href='/'><i className='bx bxl-facebook'></i></motion.a>
          <motion.a
          variants={slideIn("left", "tween", 0.2, .5)}
          className={styles.linkBall}
          href='/'><i className='bx bxl-twitter'></i></motion.a> */}
          <motion.a 
          variants={slideIn("left", "tween", 0.2, .5)}
          className={styles.linkBall} 
          href='https://www.linkedin.com/in/jose-a-figueredo'><i className='bx bxl-linkedin'></i></motion.a>
        </div>
        
        <div className="videoBackground-container">
        </div>

        <video className="absolute top-[-20px] left-0 w-full h-full min-h-[90rem] max-lg:hidden z-[-1]" preload playsInline autoPlay loop muted id='video'>
          <source src={b2} type="video/mp4"/>
        </video>
        
        <video className="absolute right-0  min-w-[100rem] lg:hidden z-[-1]" preload playsInline autoPlay loop muted id='video'>
          <source src={b1} type="video/mp4"/>
        </video>

      </section>
    );
}

//export default Hero;
export default SectionWrapper(Hero);