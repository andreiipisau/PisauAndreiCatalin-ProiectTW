import TichetCard from "./TichetCard.jsx";
import styles from "./TichetList.module.css";

export default function TichetList({ tichete, onToggle, onDelete }) {
  if (tichete.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există niciun tichet.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {tichete.map((t) => (
        <TichetCard
          key={t.id}
          tichet={t}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}