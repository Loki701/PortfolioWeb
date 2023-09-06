import React from "react";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import {motion} from "framer-motion"

const Tech = () => {
  return (
    <section id="tech"className='py-[10rem]'>
      <div className="flex flex-wrap justify-center gap-10 max-sm:mx-0 mx-[10rem] h-[auto]">
      {technologies.map((technology) => (
        <motion.div 
        className='w-[20rem] h-[10rem]' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default Tech;