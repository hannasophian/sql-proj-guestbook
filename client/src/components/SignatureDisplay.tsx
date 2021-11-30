import { useEffect, useState } from "react";
import { SignatureItem } from "../utils/SignatureItem";
import SignatureCard from "./SignatureCard";

export default function SignatureDisplay(): JSX.Element {
  const [signatures, setSignatures] = useState<SignatureItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/signatures")
      .then((res) => {
        return res.json();
      })
      .then(
        (signatures) => {
          setSignatures(signatures.data.signatures.rows);
        },
        (error) => console.log(error)
      )
      .catch((error) => console.log(error));
  });
  return (
    <>
      <h1>This is the Signature Display</h1>
      {signatures.map((signature: SignatureItem) => (
        <SignatureCard
          key={signature.id}
          id={signature.id}
          message={signature.message}
          signature={signature.signature}
          time={signature.time}
        />
      ))}
    </>
  );
}
