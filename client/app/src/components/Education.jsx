import { styles } from "../styles";


const Education = () =>{

    return(
        <section className='flex justify-center' id='education'>
        <div className="flex flex-col justify-center items-center max-w-[80rem] mx-[5rem] xm:mx-[20rem] py-[10rem]">
        <h2 className={styles.heading}>My <span>Journey</span></h2>

        <div className='education-row'>
          <div className='education-column'>
            <h3 className='title'>Education</h3>

            <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2020-2024</div>
                <h1 className="text-[2.6rem]">Univerity of Florida (UF)</h1>
                <h3>Bachelor in Computer Science, Minor in Mathematics</h3>
                <p>Graduating from University of Florida with a Bachelor degree in Computer Science and a Minor in Mathematics from the college of engineering.</p>
              </div>
            </div>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2016-2020</div>
                <h3>School for Advance Studies (SAS)</h3>
                <h3>Associate's Degree, High School Diploma</h3>
                <p>Graduated from High school with an Associete degree from Miami Dade College, which I earned through dual enrollment credits obtained during high school.</p>
              </div>
            </div>
            </div>
          </div>
          <div className='education-column'>
            <h3 className='title'>Experience</h3>

            <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2017-2020</div>
                <h3>Software Developer - The Tangency Foundation</h3>
                <p>While working at The Tangency Foundation, I played a pivotal role in the development and improvement of user interface components to implement essential functionalities. Moreover, my tenure provided me with valuable insights into effective teamwork and collaboration. Furthermore, I acquired proficiency in various aspects of software testing, including unit testing, integration testing, and user acceptance testing.</p>
              </div>
            </div>
            {/* <div className='education-content'>
              <div className='content'>
                <div className='year'><i className='bx bxs-calendar'></i>2020-2024</div>
                <h3>Freelance Software Developer - Upwork.com</h3>
                <p>As a freelance software developer on Upwork, I have successfully completed a wide range of projects for clients from various industries. My responsibilities included developing custom solutions, troubleshooting technical issues, and delivering high-quality code on time and within budget.</p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
        </div>
      </section>
    );
}

export default Education;