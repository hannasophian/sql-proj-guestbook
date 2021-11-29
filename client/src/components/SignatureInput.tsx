import { useState } from "react"

export default function SignatureInput(): JSX.Element {
    const [message, setMessage] = useState<string>("");
    const [name, setName] = useState<string>("");

    return(
        <div className="signatureinput">
            <h1>This is the signature input</h1>
            <label htmlFor="nameInput">Name:</label>
            <input
            id = "nameInput"
            value={name}
            onChange= {(e) => {
            setName(e.target.value)
            }
            } />
            <label htmlFor="messageInput">Message:</label>

            <input
            id="messageInpuut"
            value={message}
            onChange= {(e) => {
            setMessage(e.target.value)
            }
            } />

            <button
                disabled ={name.length === 0}
                onClick={() => {
                console.log(name, message);
                }}
            >
                Send
            </button>
        </div>
    )
}