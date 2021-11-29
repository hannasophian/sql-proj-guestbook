import deleteSignature from "../utils/deleteSignature";
import { SignatureItem } from "../utils/SignatureItem";

export default function SignatureCard(props: SignatureItem): JSX.Element {
    return (
        <div className="signature">
            <p>{props.message}</p>
            <h3>{props.signature}</h3>
            <button>Edit</button>
            <button onClick={() => deleteSignature(props.id)}>Delete</button>
            
        </div>
    )
}