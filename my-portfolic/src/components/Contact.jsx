import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form action="mailto:vaishnavi.salunkhe@kalvium.community" method="POST" enctype="multipart/form-data">
            <div className="input-box">
              <input type="text" required placeholder="Name" />
              <input type="email" required placeholder="Email id" />
            </div>

            <div className="input-box">
              <input type="number" placeholder="Your age" min="5" max="110" />
              <input type="tel" placeholder="Mobile Number" required />
              <input type="url" placeholder="LinkedIn Profile" />
              <input type="url" placeholder="GitHub Profile" />
            </div><br />

            <div className="input-box">
                <textarea rows="6" placeholder="Your Message"></textarea>
            </div><br />

            <button type="reset" className="btn">Clear</button>
            <button type="submit" className="btn">Send Message</button>
        </form>
    </section>
  );
};

export default Contact;