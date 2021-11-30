import React, { useState } from "react";

export default function SignatureInput(): JSX.Element {
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = { name: name, message: message };
      const response = await fetch("http://localhost:4000/signatures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(message, name);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signatureinput">
      <h1>This is the signature input</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nameInput">Name:</label>
        <input
          id="nameInput"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="messageInput">Message:</label>

        <input
          id="messageInput"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <button type="submit" disabled={name.length === 0}>
          Submit
        </button>
      </form>
    </div>
  );
}
