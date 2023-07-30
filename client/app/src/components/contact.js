//import emailjs from '@emailjs/browser '

export const Contact = () =>{

  // const form = useRef();

  // const sendEmail = (e) =>{
  //   e.preventDefault();
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then((result) =>{
  //     console.log(result.text);
  //   }, (error)  =>{
  //     console.log(error.text);
  //   });
  // };

    return(
        <section className='contact' id='contact'>
        <h2 className='heading'>Contact<span>Me!</span><span className='animate scroll' style={{'--i': 1}}></span></h2>

        <form name="contact" method="POST" data-netlify="true">
          <div className='input-box'>
            <div className='input-field'>
              <input type='text' name='user_name' placeholder='Full Name' required/>
              <span className='focus'></span>
              <span className='animate scroll' style={{'--i': 1}}></span>
            </div>
            <div className='input-field'>
              <input type='email' name='user_email' placeholder='Email Address' required/>
              <span className='focus'></span>
              <span className='animate scroll' style={{'--i': 1}}></span>
            </div>
          </div>
          <div className='input-box'>
            <div className='input-field'>
              <input type='text' name='user_phone' placeholder='Mobile Number' required/>
              <span className='focus'></span>
              <span className='animate scroll' style={{'--i': 2}}></span>
            </div>
            <div className='input-field'>
              <input type='text' name='email_subject' placeholder='Email Subject' required/>
              <span className='focus'></span>
              <span className='animate scroll' style={{'--i': 2}}></span>
            </div>
          </div>
          <div className='textarea-field'>
              <textarea name='message' id='' cols={30} rows={10} placeholder='Your Message' required></textarea>
              <span className='focus'></span>
              <span className='animate scroll' style={{'--i': 3}}></span>
          </div>
          <div className='btn-box btns'>
            <button type='submit' className='btn'>Submit</button>
            <span className='animate scroll' style={{'--i': 4}}></span>
          </div>
        </form>

      </section>
    );
}