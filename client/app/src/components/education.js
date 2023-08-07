

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
                <h3>Bachelor's Degree - Univerity of Florida</h3>
                <p>Graduating from University of Florida with a Bachelor degree in Computer Science and a Minor in Mathematics from the college of engineering.</p>
              </div>
            </div>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2018-2020</div>
                <h3>Associate's Degree - Miami Dade College</h3>
                <p>Graduated from Miami Dade College with an Associate degree, which I earned through dual enrollment credits obtained during high school.</p>
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
                <div className='year'><i className='bx bxs-calendar'></i>2017-2020</div>
                <h3>Software Developer - The Tangency Foundation</h3>
                <p>During my time with The Tangency Foundation, I played a crucial role in building and enhancing user interface components using React to implement desired functionalities. Additionally, I gained valuable experience in leveraging AWS Lambda for executing batch jobs, and effectively utilized Amazon RDS to store and retrieve data, optimizing the application's performance.</p>
              </div>
            </div>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2020-2024</div>
                <h3>Freelance Software Developer - Upwork.com</h3>
                <p>As a freelance software developer on Upwork, I have successfully completed a wide range of projects for clients from various industries. My responsibilities included developing custom solutions, troubleshooting technical issues, and delivering high-quality code on time and within budget.</p>
              </div>
            </div>
            <span className='animate scroll' style={{'--i': 3}}></span>
            </div>
          </div>
        </div>
      </section>
    );
}