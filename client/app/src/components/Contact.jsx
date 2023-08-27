//import emailjs from '@emailjs/browser '
import { useState } from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [formStatus, setformStatus] = useState(false);

  const toast = document.querySelector('.toast');
  const progress = document.querySelector(".toast .progress");

  let timer1, timer2;
  const handleNotification = () => {
    toast.classList.add("active");
    progress.classList.add('active');

    timer1 = setTimeout(() =>{
      toast.classList.remove('active');
    }, 5000);

    timer2 = setTimeout(() =>{
      progress.classList.remove('active');
    }, 5300);
  };
  const handleClosingNotification = () =>{
    toast.classList.remove('active');
    setTimeout(() =>{
      progress.classList.remove('active');
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
        // alert("Thank you for your submission");
        window.scrollTo(0,0);
        setTimeout(()=>{handleNotification();}, 1000);
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
          <h2 className="heading">
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
            <div className="btn-box btns">
              <button type="submit" className="btn">
                Submit
              </button>
              <span className="animate scroll" style={{ "--i": 4 }}></span>
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