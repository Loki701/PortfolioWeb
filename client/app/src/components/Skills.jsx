


const Skills = () =>{

    return (
        <section className='skills' id='skills'>
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
                  <h3>JavaScript <span>80%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>C++ <span>95%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Java <span>80%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Python <span>70%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>SQL <span>70%</span></h3>
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
                  <h3>Oracle <span>60%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>AWS<span>40%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Tailwind<span>60%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Next.js<span>70%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
                <div className='progress'>
                  <h3>Docker <span>65%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
              </div>
              <span className='animate scroll' style={{'--i': 3}}></span>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Skills;