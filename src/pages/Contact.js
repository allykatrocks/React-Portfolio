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

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("state changed", formState);
    }
  };

  const submitChange = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("submit worked", formState);
    }
  };

  return (
    <section>
      <form id="contact-form" onSubmit={submitChange}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={formState.name}
            onBlur={handleChange}
          />
        </div>
        <div></div>
        <div></div>
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
