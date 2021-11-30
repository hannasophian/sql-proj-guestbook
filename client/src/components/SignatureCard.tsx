import deleteSignature from "../utils/deleteSignature";
import { SignatureItem } from "../utils/SignatureItem";
import Modal from "react-modal";
import { useState } from "react";

// Modal.setAppElement(`#mymodal`);

export default function SignatureCard(props: SignatureItem): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState<string>(props.signature);
  const [message, setMessage] = useState<string>(props.message);

  async function handleEditSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = { name: name, message: message };
      const response = await fetch(
        `http://localhost:4000/signatures/${props.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      closeModal();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="signature">
      <p>{props.message}</p>
      <h3>{props.signature}</h3>
      <button onClick={openModal}>Edit</button>
      <button onClick={() => deleteSignature(props.id)}>Delete</button>
      <Modal
        id="mymodal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Edit your message</h2>
        <button onClick={closeModal}>close</button>
        <form className="form" onSubmit={(e) => handleEditSubmit(e)}>
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
            id="messageInpuut"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}
