import TichetCard from "./TichetCard.jsx";

export default function TichetList({ tichete, onToggle, onDelete }) {
  if (tichete.length === 0) {
    return <p className="empty">Nu există niciun tichet de mentenanță.</p>;
  }

  return (
    <ul className="item-list">
      {tichete.map((tichet) => (
        <TichetCard 
          key={tichet.id} 
          tichet={tichet} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}