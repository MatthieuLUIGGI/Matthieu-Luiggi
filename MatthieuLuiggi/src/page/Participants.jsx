export default function Participants() {
  const noms = ["Alice", "Bob", "Charlie", "Diana"];
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Participants</h1>
      <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
        {noms.map((nom) => (
          <li key={nom}>{nom}</li>
        ))}
      </ul>
    </div>
  );
}
