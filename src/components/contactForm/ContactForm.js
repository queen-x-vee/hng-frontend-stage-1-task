import React from "react";
import { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    message:"",
    isChecked: false,
  });
  console.log(formData);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event){
      event.preventDefault()
      if (formData.isChecked){
        console.log('successfully submittted')
      }else {console.log('cant submit form')}
  }
  return (
    <>
      <div className="form">
        <div className="form-header">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-large">
            <div className="form-input">
              <label>First Name</label>
              <input type="text" id="first_name" placeholder='Enter your first name'value={formData.firstName} name='firstName' onChange={handleChange}></input>
            </div>
            <div className="form-input">
              <label>Last Name</label>
              <input type="text" id="last_name" placeholder="Enter your last name" value={formData.lastName} name='lastName' onChange={handleChange}></input>
            </div>
          </div>

          <div className="form-input">
            <label>email</label>
            <input type="email" id="email" placeholder="yourname@email.com" value={formData.email} name='email' onChange={handleChange}></input>
          </div>
          <div className="form-input">
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Send me a message and I'll reply as soon as possible"
              id="message"
              value={formData.message}
              name='message'
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input type="checkbox"  checked={formData.isChecked}
                name="isChecked"
                onChange={handleChange}></input>
            <label>
              You agree to providing your data to Valentina who may contact you
            </label>
          </div>

          <button id="btn__submit"> Send</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
