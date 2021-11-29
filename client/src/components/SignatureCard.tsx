import deleteSignature from "../utils/deleteSignature";
import { SignatureItem } from "../utils/SignatureItem";
import Modal from 'react-modal';
import { useState } from "react";

// Modal.setAppElement(`#mymodal`);


export default function SignatureCard(props: SignatureItem): JSX.Element {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [signature, setSignature] = useState<SignatureItem>(props);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="signature">
            <p>{props.message}</p>
            <h3>{props.signature}</h3>
            <button onClick={openModal}>Edit</button>
            <button onClick={() => deleteSignature(props.id)}>Delete</button>
            <Modal id="mymodal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
                </form>
            </Modal>
            
        </div>
    )
}