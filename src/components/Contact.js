import { useState } from "react";
import React from "react";
import { GrSend } from "react-icons/gr";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    let subject = `Email from ${name} (${email})`;
    let body = text;
    window.open(
      `mailto:polina.stamenova@gmail.com?subject=${subject}&body=${body}`
    );

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className='contact-page' id='contact'>
      {/* <div className='buffer-about'></div> */}
      <div className='contact-wrapper'>
        <div className='contact-div'></div>
        <h1>
          Get in<span className='change-text-color'> Touch</span>
        </h1>
        <p className='contact-text'>
          Wanna talk? Send me an email through the form below or get in touch
          through my social media profiles.
        </p>
        <form onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <textarea
            name='text'
            id='text'
            placeholder='Your Message'
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type='submit'>
            {" "}
            Send <GrSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
