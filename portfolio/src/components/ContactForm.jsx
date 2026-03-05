import { useState } from "react";

function ContactForm() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name} Message: ${message}`);
  };

  return (

    <form className="contact" onSubmit={handleSubmit}>

      <h3>Contact Me</h3>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />

      <button type="submit">Send</button>

    </form>
  );
}

export default ContactForm;