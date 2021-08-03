import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(formState.message.length)
    setErrorMessage('')
    if (formState.message.length < 5) {
      setErrorMessage("Message too short")
    }
    if (!formState.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      console.log(formState.email.match)
      setErrorMessage('Invalid email')
    }
    
  };

  const submitChange = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("submit worked", formState);
    }
  };

  const handleOnChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("state changed", formState);
  }

  return (
    <section>
      <form id="contact-form" onSubmit={submitChange}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onBlur={handleChange}
            onChange={handleOnChange}
          />
        </div>
        <div><label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={formState.email}
            onBlur={handleChange}
            onChange={handleOnChange}
          /></div>
        <div>
        <label htmlFor="message">Message:</label>
          <textarea
            rows = '5'
            name="message"
            value={formState.message}
            onBlur={handleChange}
            onChange={handleOnChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default Contact;
