

export const Home = ()=>{



    return(
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
            <a href='#contact' className='btn'>Let's Talk</a>
            <span className='animate' style={{'--i': 5}}></span>
          </div>
        </div>

        <div className='home-social'>
          <a href='/'><i className='bx bxl-facebook'></i></a>
          <a href='/'><i className='bx bxl-twitter'></i></a>
          <a href='/'><i className='bx bxl-linkedin'></i></a>
          <span className='animate' style={{'--i': 6}}></span>
        </div>
        <div className='home-imgHover'></div>
        <span className='animate' style={{'--i': 7}}></span>
      </section>
    );
}