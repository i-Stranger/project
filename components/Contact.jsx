import React, { useState } from "react";
import { handleChange } from "@/helpers/helpers";

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  return (
    <div className="contact">
      <h1 className="contacth1" style={{ fontSize: "48px", color: "white" }}>
        Receive exclusive off-market listings in your inbox.
      </h1>
      <div className="inputdiv">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </div>

      <div className="checkboxdiv">
        <input type="checkbox" />
        <p style={{ fontSize: "20px", color: "white" }}>
          By providing Riezl Baker your contact information, you acknowledge and
          agree to our Privacy Policy and consent to receiving marketing
          communications, including through automated calls, texts, and emails,
          some of which may use artificial or prerecorded voices. This consent
          isn’t necessary for purchasing any products or services and you may
          opt out at any time. To opt out from texts, you can reply, ‘stop’ at
          any time. To opt out from emails, you can click on the unsubscribe
          link in the emails. Message and data rates may apply.
        </p>
      </div>
    </div>
  );
}
