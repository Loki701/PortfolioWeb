//import emailjs from '@emailjs/browser '
import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import {motion} from "framer-motion"
import { zoomIn } from "../utils/motion";

const Contact = () => {
  const [formStatus, setformStatus] = useState(false);

  const toast = document.getElementsByClassName('toast');
  const progress = document.getElementsByClassName("progress");

  let timer1, timer2;
  const handleNotification = () => {

    toast[0].classList.add("active");
    progress[0].classList.add('active');

    timer1 = setTimeout(() =>{
      toast[0].classList.remove('active');
    }, 5000);

    timer2 = setTimeout(() =>{
      progress[0].classList.remove('active');
    }, 5300);
  };
  const handleClosingNotification = () =>{
    toast[0].classList.remove('active');
    setTimeout(() =>{
      progress[0].classList.remove('active');
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setTimeout(()=>{handleNotification();}, 200);
        setformStatus(!formStatus);
      })
      .catch((error) => alert(error));
  };

  return (
    <section className="contact" id="contact">
      <div className="toast">
        <div className="toast-content">
          <i className="bx bx-check check"></i>

          <div className="message">
            <span className="text text-1">Success</span>
            <span className="text text-2">Your Letter has been send!</span>
          </div>
        </div>
        <i className="bx bx-x close" onClick={handleClosingNotification}></i>
        <div className="progress"></div>
      </div>
      {!formStatus ? (
        <>
          <h2 className={styles.heading + " self-center" }>
            Contact<span>Me!</span>
            <span className="animate scroll" style={{ "--i": 1 }}></span>
            
          </h2>
          <form name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-box">
              <div className="input-field">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                />
                <span className="focus"></span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
              </div>
              <div className="input-field">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                />
                <span className="focus"></span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
              </div>
            </div>
            <div className="input-box">
              <div className="input-field">
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Mobile Number"
                  required
                />
                <span className="focus"></span>
                <span className="animate scroll" style={{ "--i": 2 }}></span>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="email_subject"
                  placeholder="Email Subject"
                  required
                />
                <span className="focus"></span>
                <span className="animate scroll" style={{ "--i": 2 }}></span>
              </div>
            </div>
            <div className="textarea-field">
              <textarea
                name="message"
                id=""
                cols={30}
                rows={10}
                placeholder="Your Message"
                required
              ></textarea>
              <span className="focus"></span>
              <span className="animate scroll" style={{ "--i": 3 }}></span>
            </div>
            <div 
            className={styles.aboutButtonCover}>
              <button className="relative flex justify-center items-center w-[15rem] h-full bg-blac border-[.2rem] border-mainColor border-solid rounded-[.8rem] text-[1.8rem] font-semibold tracking-[.1rem]  text-mainColor z-10 overflow-hidden duration-[.5s] before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-mainColor before:-z-10 before:duration-[.5s] hover:before:w-full hover:text-black" 
              type="submit"
              >Submit</button>
              <span className="animate scroll" style={{ "--i": 4, "background": "black" }}></span>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
            Thanks for Contacting Me!
          </h1>
        </>
      )}
    </section>
  );
};

export default SectionWrapper(Contact, "contact");