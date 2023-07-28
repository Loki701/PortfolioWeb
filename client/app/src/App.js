import './App.css';
import { useScrollPosition } from './components/useScrollPosition';
import { useScreenSize } from './components/useScreenSize';
import {useEffect, useState} from 'react'
import AboutImage from './images/profile_pic.jpg'

function className(...classes){
  return classes.filter(Boolean).join(' ');
}

function App() {

  const scrollPosition = useScrollPosition();
  const {screenWidth, screenHeight} = useScreenSize();
  const [menuStatus, setMenuStatus] = useState(false);

  console.log(screenWidth)
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a'); 
  
  
  useEffect(()=>{
    sections.forEach(sec =>{
      let offset = 0;
      if(screenHeight > 450){
        offset = sec.offsetTop - 670;
      }else{
        offset = sec.offsetTop - 90;
      }
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(scrollPosition >= offset && scrollPosition < offset +height){

        navLinks.forEach(link =>{
          link.classList.remove('active');
          document.querySelector('header nav a[href*='+id+']').classList.add('active');

        });
      }
      offset = sec.offsetTop - 1200;
      if(scrollPosition >= offset && scrollPosition < offset + height){
        sec.classList.add('show-animate');
      }
      // if you want aniation every time u scroll
      // else{
      //   sec.classList.remove('show-animate');
      // }
    })
  }, [scrollPosition, navLinks, screenHeight, sections]);

  const handleMenu = () =>{
    setMenuStatus(!menuStatus);
  }
  return (
    <div className="App">
      <header className={className(scrollPosition > 100? 'sticky': '', 'header')}>
        <a href='#home' className='logo'>Jose.<span className='animate' style={{'--i': 1}}></span></a>

        <div className={!menuStatus?'bx bx-menu':'bx bx-x'} id='menu-icon' onClick={handleMenu}><span className='animate' style={{'--i': 2}}></span></div>

        <nav className={menuStatus?'navbar active': 'navbar'}>
          <a href='#home' className='active' onClick={handleMenu}>Home</a>
          <a href='#about' onClick={handleMenu}>About</a>
          <a href='#education' onClick={handleMenu}>Education</a>
          <a href='#skill' onClick={handleMenu}>Skills</a>
          <a href='#contact' onClick={handleMenu}>Contact</a>
          <span className='active-nav'></span>
          <span className='animate' style={{'--i': 2}}></span>
        </nav>
      </header>

      <section className='home show-animate' id='home'>
        <div className='home-content'>
          <h1>Hi, I'm <span>Jose Figueredo</span><span className='animate' style={{'--i': 2}}></span></h1>
          <div className='text-animate'>
            <h3>Frontend Developer</h3>
            <span className='animate' style={{'--i': 3}}></span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur officia perspiciatis autem fugit hic! Ullam ipsum quisquam officia dolores perspiciatis laboriosam autem sint quam eos labore.
          <span className='animate' style={{'--i': 4}}></span>
          </p>

          <div className='btn-box'>
            <a href='/' className='btn'>Hire Me</a>
            <a href='/' className='btn'>Let's Talk</a>
            <span className='animate' style={{'--i': 5}}></span>
          </div>
        </div>

        <div className='home-social'>
          <a href='/'><i className='bx bxl-facebook'></i></a>
          <a href='/'><i className='bx bxl-twitter'></i></a>
          <a href='/'><i className='bx bxl-linkedin'></i></a>
          <span className='animate' style={{'--i': 6}}></span>
        </div>
        <div className='home-imgHover'><span className='animate' style={{'--i': 7}}></span></div>
      </section>

      <section className='about' id='about'>
        <h2 className='heading'>About <span>Me</span><span className='animate scroll' style={{'--i': 1}}></span></h2>
        <div className='about-img'>
          <img src={AboutImage} alt='profile'/>
          <span className='circle-spin'></span>
          <span className='animate scroll' style={{'--i': 2}}></span>
        </div>
        <div className='about-content'>
          <h3>Frontend Developer<span className='animate scroll' style={{'--i': 3}}></span></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nulla adipisci cupiditate quidem quis architecto itaque atque iure maxime? Neque expedita, incidunt ipsum ut magni quod necessitatibus perferendis nihil accusantium maiores? Repellat sit molestias alias non dolor nulla nisi magnam, amet a, iste hic? Ratione unde quas reprehenderit quibusdam maiores!
          <span className='animate scroll' style={{'--i': 4}}></span>
          </p>
          <div className='btn-box btns'>
            <a className='btn' href='/'>Read More</a>
            <span className='animate scroll' style={{'--i': 5}}></span>
          </div>

        </div>
      </section>

      <section className='education' id='education'>
        <h2 className='heading'>My <span>Journey</span><span className='animate scroll' style={{'--i': 1}}></span></h2>

        <div className='education-row'>
          <div className='education-column'>
            <h3 className='title'>Education<span className='animate scroll' style={{'--i': 2}}></span></h3>

            <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2020-2024</div>
                <h3>Bachelor Degree - Univerity of Florida</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum numquam suscipit obcaecati incidunt quasi culpa neque provident atque id.</p>
              </div>
            </div>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2020-2024</div>
                <h3>Bachelor Degree - Univerity of Florida</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum numquam suscipit obcaecati incidunt quasi culpa neque provident atque id.</p>
              </div>
            </div>
            <span className='animate scroll' style={{'--i': 3}}></span>
            </div>
          </div>
          <div className='education-column'>
            <h3 className='title'>Experience<span className='animate scroll' style={{'--i': 2}}></span></h3>

            <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2020-2024</div>
                <h3>Web Developer - Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum numquam suscipit obcaecati incidunt quasi culpa neque provident atque id.</p>
              </div>
            </div>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2020-2024</div>
                <h3>Web Developer - Company</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum numquam suscipit obcaecati incidunt quasi culpa neque provident atque id.</p>
              </div>
            </div>
            <span className='animate scroll' style={{'--i': 3}}></span>
            </div>
          </div>
        </div>
      </section>
      
      <section className='skills' id='skill'>
        <h2 className='heading'>My <span>Skills</span><span className='animate scroll' style={{'--i': 1}}></span></h2>

        <div className='skills-row'>
          <div className='skills-column'>
            <h3 className='title'>Coding Skills<span className='animate scroll' style={{'--i': 2}}></span></h3>
            <div className='skills-box'>
              <div className='skills-content'>
                <div className='progress'>
                  <h3>HTML <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>CSS <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>JavaScript <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>C++ <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
              </div>
              <span className='animate scroll' style={{'--i': 3}}></span>
            </div>
          </div>
          <div className='skills-column'>
            <h3 className='title'>Professional Skills<span className='animate scroll' style={{'--i': 2}}></span></h3>
            <div className='skills-box'>
              <div className='skills-content'>
                <div className='progress'>
                  <h3>React <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Oracle <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Web Design <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Docker <span>90%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
              </div>
              <span className='animate scroll' style={{'--i': 3}}></span>
            </div>
          </div>
        </div>
      </section>

      <section className='contact' id='contact'>
        <h2 className='heading'>Contact<span>Me!</span><span className='animate scroll' style={{'--i': 1}}></span></h2>

        <form action='#'>
          <div className='input-box'>
            <div className='input-field'>
              <input type='text' placeholder='Full Name' required/>
              <span className='focus'></span>
            </div>
            <div className='input-field'>
              <input type='text' placeholder='Email Address' required/>
              <span className='focus'></span>
            </div>
          </div>
          <div className='input-box'>
            <div className='input-field'>
              <input type='text' placeholder='Mobile Number' required/>
              <span className='focus'></span>
            </div>
            <div className='input-field'>
              <input type='text' placeholder='Email Subject' required/>
              <span className='focus'></span>
            </div>
          </div>
          <div className='textarea-field'>
              <textarea name='' id='' cols={30} rows={10} placeholder='Your Message' required></textarea>
              <span className='focus'></span>
          </div>
          <div className='btn-box btns'>
            <button type='submit' className='btn'>Submit</button>
          </div>
          <span className='animate scroll' style={{'--i': 1}}></span>
        </form>

      </section>

      <footer className='footer'>
        <div className='footer-text'>
          <p>Copyright &copy; 2023 by Jose Figueredo | All Rights Reserved.</p>
        </div>
        <div className='footer-iconTop'>
          <a href='#home'><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
