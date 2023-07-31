import "./App.css";
import { useScrollPosition } from "./components/useScrollPosition";
import { useScreenSize } from "./components/useScreenSize";
import { useEffect, useState } from "react";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Education } from "./components/education";
import { Skill } from "./components/skill";
import { Portfolio } from "./components/portfolio";
import { Contact } from "./components/contact";

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const scrollPosition = useScrollPosition();
  const {screenHeight} = useScreenSize();
  const [menuStatus, setMenuStatus] = useState(false);

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  

  // useEffect(()=>{
  //   sections.forEach(sec =>{
  //     let offset = 0;
  //     if(screenHeight > 450){
  //       offset = sec.offsetTop - 670;
  //     }else{
  //       offset = sec.offsetTop - 90;
  //     }
  //     let height = sec.offsetHeight;
  //     let id = sec.getAttribute('id');
  //     if(scrollPosition >= offset && scrollPosition < offset +height){

  //       navLinks.forEach(link =>{
  //         link.classList.remove('active');
  //         document.querySelector('header nav a[href*='+id+']').classList.add('active');

  //       });
  //     }
  //     offset = sec.offsetTop - 1200;
  //     if(scrollPosition >= offset && scrollPosition < offset + height){
  //       sec.classList.add('show-animate');
  //     }
  //   })
  // }, [scrollPosition, navLinks, screenHeight, sections]);

  useEffect(() => {
    sections.forEach((sec) => {
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
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
      elementVisible = 150;
      if (elementTop < windowHeight - elementVisible ) {
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  }, [navLinks, sections, screenHeight]);

  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <div className="App">
      <header
        className={className(scrollPosition > 100 ? "sticky" : "", "header")}
      >
        <a href="#home" className="logo">
          Jose.<span className="animate" style={{ "--i": 1 }}></span>
        </a>

        <div
          className={!menuStatus ? "bx bx-menu" : "bx bx-x"}
          id="menu-icon"
          onClick={handleMenu}
        >
          <span className="animate" style={{ "--i": 2 }}></span>
        </div>

        <nav className={menuStatus ? "navbar active" : "navbar"}>
          <a href="#home" className="active" onClick={handleMenu}>
            Home
          </a>
          <a href="#about" onClick={handleMenu}>
            About
          </a>
          <a href="#education" onClick={handleMenu}>
            Education
          </a>
          <a href="#skill" onClick={handleMenu}>
            Skills
          </a>
          <a href="#portfolio" onClick={handleMenu}>
            Portfolio
          </a>
          <a href="#contact" onClick={handleMenu}>
            Contact
          </a>
          <span className="active-nav"></span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </nav>
      </header>
      <Home />
      <About />
      <Education />
      <Skill />
      <Portfolio />
      <Contact />
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Jose Figueredo | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
