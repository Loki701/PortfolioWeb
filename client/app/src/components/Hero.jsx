import { motion } from "framer-motion";
import {fadeIn, textVariant, slideIn} from "../utils/motion";

const Hero = ()=>{

    return(
        <section className=" flex items-center bg-green-500" id='hero'>
        <motion.div variants={textVariant()}>
        <div className='home-content'>
          <h1>Hi, I'm <span>Jose Figueredo</span>
          {/* <span className='animate' style={{'--i': 2}}></span> */}
          </h1>
          <div className='text-animate'>
            <h3>Frontend Developer</h3>
            {/* <span className='animate' style={{'--i': 3}}></span> */}
          </div>
          <p>A passionate software developer dedicated to crafting digital solutions that redefine possibilities. With a blend of creativity and cutting-edge technology, I transform ideas into functional and elegant software.
          {/* <span className='animate' style={{'--i': 4}}></span> */}
          </p>

          <div className='btn-box'>
            {/* <a href='/' className='btn'>Hire Me</a> */}
            <a href='#contact' className='btn'>Let's Talk</a>
            {/* <span className='animate' style={{'--i': 5}}></span> */}
          </div>
        </div>
        </motion.div>

        <div className=" absolute bottom-4 w-44 flex justify-between bg-green-500">
          <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <a 
          className=" relative inline-block justify-center items-center w-10 h-10 bg-transparent border border-main rounded text-9xl text-main z-1 overflow-hidden transition" 
          href='/'
          >
            <i className='bx bxl-facebook text-lg'></i></a>
          <a href='/'><i className='bx bxl-twitter'></i></a>
          <a href='/'><i className='bx bxl-linkedin'></i></a>
          </motion.div>
          {/* <span className='animate' style={{'--i': 6}}></span> */}
        </div>
        {/* <div className='home-imgHover'></div> */}
        {/* <span className='animate' style={{'--i': 7}}></span> */}
      </section>
    );
}

export default Hero;