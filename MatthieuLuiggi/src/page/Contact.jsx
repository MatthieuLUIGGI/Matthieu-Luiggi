import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom || !email || !message) {
      alert("Tous les champs sont requis.");
      return;
    }
    console.log({ nom, email, message });
    navigate("/confirmation");
  };

  return (
    <div className="page">
      <h1>Page Contact</h1>

      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <label>
          Nom :
          <input value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>

        <label>
          Email :
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Message :
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>

        <button type="submit" className="btn-primary">Envoyer</button>
      </form>
    </div>
  );
}