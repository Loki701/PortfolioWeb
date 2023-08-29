import { motion } from "framer-motion";
import {fadeIn, textVariant, slideIn, zoomIn} from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import Button from "./Button";
import backgroundVideo from '../images/world.mp4';
import b2 from "../images/m3.mp4";

const Hero = ()=>{

    return(
        <section className="min-h-[100vh] flex items-center py-[9%] bg-colorBlack bg-cover bg-center bg-no-repeat" id='hero'>
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

        <div className={`absolute ml-20 bottom-16 sm:w-40 flex justify-between w-[17rem] z-[99]`}>
          <motion.a 
          variants={slideIn("left", "tween", 0.2, .5)}
          className={styles.linkBall} 
          href='/'><i className='bx bxl-facebook'></i></motion.a>
          <motion.a
          variants={slideIn("left", "tween", 0.2, .5)}
          className={styles.linkBall}
          href='/'><i className='bx bxl-twitter'></i></motion.a>
          <motion.a 
          variants={slideIn("left", "tween", 0.2, .5)}
          className={styles.linkBall} 
          href='/'><i className='bx bxl-linkedin'></i></motion.a>
        </div>

        <video className="absolute top-0 left-0 w-full h-full min-w-[80rem] min-h-[100rem]" autoPlay loop muted id='video'>
          <source src={b2} type="video/mp4"/>
        </video>
      </section>
    );
}

//export default Hero;
export default SectionWrapper(Hero);