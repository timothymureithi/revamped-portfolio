import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_x5d766j', 'template_3r3vw0s', form.current, 'mtGTdP3dMGg2AYTEm')
      .then(res => {
        console.log(res);
        setIsFormSubmitted(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Get in contact with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:timothynjomo@gmail.com" className="p-text">timothynjomo@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+254 707773151" className="p-text">+254 707773151</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <input className="p-text btn" type="submit" value={!loading ? 'Send Message' : 'Sending...'} />
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);