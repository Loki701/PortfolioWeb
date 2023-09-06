import React, {useState, useEffect} from "react";
import {navLinks} from "../constants";
import { useScrollPosition } from "./useScrollPosition";
import { useScreenSize } from "../components/useScreenSize";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {slideIn} from "../utils/motion";

import { staggerContainer } from "../utils/motion";

function className(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const Navbar = () =>{
    const scollPosition = useScrollPosition();
    const [scrolled, setScrolled] = useState(false);
    const [menuStatus, setMenuStatus] = useState(false);
    const {screenHeight} = useScreenSize();
    const [activeNav, setActiveNav] = useState("");
    const sections = document.querySelectorAll("section");

    const navLinksElement = document.getElementsByClassName("navlinks");
    const navLinksArray = Array.from(navLinksElement);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  
  useEffect(() => {
    sections.forEach((sec) => {
      let windowHeight = window.innerHeight;
      let elementTop = sec.getBoundingClientRect().top;
      let elementVisible = screenHeight - 100;
      let id = sec.getAttribute("id");
      if (elementTop < windowHeight - elementVisible) {
          setActiveNav(id);
      }
      elementVisible = 150;
      if (elementTop < windowHeight - elementVisible ) {
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  }, [navLinksArray, sections, screenHeight, scollPosition]);

      const handleMenu = () => {
        setMenuStatus(!menuStatus);
      };
      
    return(
        <motion.div 
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={className(scrolled? "sticky" : "", "header")}>
        
        <Link
        to="/"
        className="logo"
        onClick={()=>{
            window.scrollTo(0,0);
        }}
        >
        <motion.p
        variants={slideIn("left", "ease", 0.1, .5)}
        >
          Jose.
        </motion.p>
        </Link>

        <motion.div
          variants={slideIn("left", "ease", 0.1, .5)}
          className={!menuStatus ? "bx bx-menu" : "bx bx-x"}
          id="menu-icon"
          onClick={handleMenu}
        >
        </motion.div>

        <ul className={className(menuStatus ? "active" : "","navbar")}>
            {navLinks.map((nav)=>(
                <motion.li
                variants={slideIn("left", "ease", 0.1, .5)}
                key={nav.id}
                onClick={handleMenu}
                >
                    <a
                    href={`#${nav.id}`}
                    className={activeNav === nav.id? "active":""}
                    >
                        {nav.title}
                    </a>

                </motion.li>
            ))}
          <span className="active-nav"></span>
        </ul>

        </motion.div>
    );
}

export default Navbar;