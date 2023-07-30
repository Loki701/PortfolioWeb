//import emailjs from '@emailjs/browser '

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact<span>Me!</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <form name="contact" method="POST" netlify>
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      <form name="contacts">
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
    </section>
  );
};
