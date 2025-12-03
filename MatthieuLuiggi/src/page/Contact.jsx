import { useState } from "react";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}\nEmail : ${email}\nMessage : ${message}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Page Contact</h1>

      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}
      >
        <label>
          Nom :
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>

        <label>
          Email :
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Message :
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}