import { Link } from "react-router-dom";
import { ETICHETE_AFISARE } from "../constants.js";
import styles from "./TichetCard.module.css";

export default function TichetCard({ tichet, onToggle, onDelete }) {
  return (
    <li
      className={tichet.rezolvat ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={tichet.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={tichet.rezolvat}
          onChange={() => onToggle(tichet.id)}
          aria-label={`Marchează ${tichet.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/tichete/${tichet.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {tichet.titlu}
          </Link>
          <span className={`badge badge-${tichet.eticheta}`}>
            {ETICHETE_AFISARE[tichet.eticheta] ?? tichet.eticheta}
          </span>
        </div>
      </div>
      <button
        className="btn-danger"
        onClick={() => onDelete(tichet.id)}
        aria-label={`Șterge ${tichet.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}