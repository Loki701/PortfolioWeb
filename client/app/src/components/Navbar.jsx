import React, {useState, useEffect} from "react";
import {navLinks} from "../constants";
import { useScrollPosition } from "./useScrollPosition";
import { useScreenSize } from "../components/useScreenSize";
import { Link } from "react-router-dom";

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
          if (scrollTop > 100) {
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
        console.log(sec)
      let windowHeight = window.innerHeight;
      let elementTop = sec.getBoundingClientRect().top;
      let elementVisible = 1000;
      if (screenHeight > 450) {
        elementVisible = 650;
      } else {
        elementVisible = 90;
      }
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
        <div className={className(scrolled? "sticky" : "", "header")}>
        
        <Link
        to="/"
        className="logo"
        onClick={()=>{
            window.scrollTo(0,0);
        }}
        >
        Jose.<span className="animate" style={{ "--i": 1 }}></span>
        </Link>

        <div
          className={!menuStatus ? "bx bx-menu" : "bx bx-x"}
          id="menu-icon"
          onClick={handleMenu}
        >
          <span className="animate" style={{ "--i": 2 }}></span>
        </div>

        <ul className={className(menuStatus ? "active" : "","navbar")}>
            {navLinks.map((nav)=>(
                <li
                key={nav.id}
                onClick={handleMenu}
                >
                    <a
                    href={`#${nav.id}`}
                    className={activeNav === nav.id? "active":""}
                    >
                        {nav.title}
                    </a>

                </li>
            ))}
          <span className="active-nav"></span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </ul>

        </div>
    );
}

export default Navbar;