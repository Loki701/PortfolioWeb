

export const Education = () =>{

    return(
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
    );
}