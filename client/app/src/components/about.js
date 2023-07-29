

import AboutImage from '../images/profile_pic.jpg';

export const About = () =>{

    return(
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
    );

}