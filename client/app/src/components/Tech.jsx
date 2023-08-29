import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {motion} from "framer-motion"

const Tech = () => {
  return (
    <section id="tech"className='py-[10rem]'>
      <div className="flex flex-wrap justify-center gap-10 mx-[10rem] h-[auto]">
      {technologies.map((technology) => (
        <motion.div 
        className='w-[10rem] h-[10rem]' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default Tech;