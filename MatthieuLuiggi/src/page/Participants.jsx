export default function Participants() {
  const noms = ["Alice", "Bob", "Charlie", "Diana"];
  return (
    <div className="page">
      <h1>Participants</h1>
      <ul>
        {noms.map((nom) => (
          <li key={nom}>{nom}</li>
        ))}
      </ul>
    </div>
  );
}
