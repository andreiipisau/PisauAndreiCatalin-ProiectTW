const ETICHETE = { 
  hardware: "Hardware", 
  software: "Software", 
  retea: "Rețea" 
};

export default function TichetCard({ tichet, onToggle, onDelete }) {
  return (
    <li className={`item-card ${tichet.rezolvat ? "done" : ""}`}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={tichet.rezolvat}
          onChange={() => onToggle(tichet.id)}
        />
        <div>
          <h3>{tichet.titlu}</h3>
          <span className={`badge badge-${tichet.eticheta}`}>
            {ETICHETE[tichet.eticheta]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(tichet.id)}
        aria-label={`Șterge ${tichet.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}