const ETICHETE_AFISARE = {
  hardware: "Hardware",
  software: "Software",
  retea: "Rețea",
};

export default function TichetCard({ tichet, onToggle, onDelete }) {
  return (
    <li
      className={tichet.rezolvat ? "item-card task-card done" : "item-card task-card"}
      data-testid="item"
      data-id={tichet.id}
    >
      <label className="item-main task-main">
        <input
          type="checkbox"
          checked={tichet.rezolvat}
          onChange={() => onToggle(tichet.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{tichet.titlu}</h3>
          <span className={`badge badge-${tichet.eticheta}`}>
            {ETICHETE_AFISARE[tichet.eticheta] ?? tichet.eticheta}
          </span>
        </div>
      </label>

      {tichet.rezolvat && (
        <button
          className="btn-danger"
          onClick={() => onDelete(tichet.id)}
          aria-label={`Șterge ${tichet.titlu}`}
          data-testid="item-delete"
        >
          Șterge
        </button>
      )}
    </li>
  );
}