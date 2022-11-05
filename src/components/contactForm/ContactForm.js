import React, { useEffect } from "react";
import { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const formDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isChecked: false,
  };
  const [formData, setFormData] = useState(formDetails);
  const [formErrors, setFormErrors] = useState({});

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

  function handleSubmit(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
    if(formData.isChecked&&formData.message){
      alert('Your message has been sent!')
    }
    
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    /*const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i*/
    if (!values.message) {
      errors.message = "Please enter a message";
      errors.style='red'
    }
    if (!values.isChecked) {
      errors.isChecked = "Please tick this box";
    }
    return errors;
  };

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
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
                className={handleChange? 'input-hover': 'input'}
              ></input>
            </div>
        
            <div className="form-input">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              id="email"
              placeholder="yourname@email.com"
              value={formData.email}
              name="email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-input">
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Send me a message and I'll reply as soon as possible"
              id="message"
              value={formData.message}
              name="message"
              onChange={handleChange}
              style={{borderColor:formErrors.style}}
            ></textarea>
            <p style={{ color: "red" }}>{formErrors.message}</p>
          </div>

          <div className="input-check">
            <input
              type="checkbox"
              checked={formData.isChecked}
              name="isChecked"
              onChange={handleChange}
            ></input>
            <label htmlFor="isChecked">
              You agree to providing your data to Valentina who may contact you
            </label>
          </div>
          <p style={{ color: "red" }}>{formErrors.isChecked}</p>

          <button id="btn__submit" > Send message</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
