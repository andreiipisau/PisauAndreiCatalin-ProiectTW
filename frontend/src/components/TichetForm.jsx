import { useState } from "react";

const ETICHETE = [
  { value: "hardware", label: "Hardware" },
  { value: "software", label: "Software" },
  { value: "retea", label: "Rețea" },
];

const TITLU_MAX = 100;

export default function TichetForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [eticheta, setEticheta] = useState("hardware");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ titlu: titlu.trim(), eticheta, rezolvat: false });
      setTitlu("");
      setEticheta("hardware");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className="item-form task-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Înlocuire display laptop"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Etichetă
        <select
          value={eticheta}
          onChange={(e) => setEticheta(e.target.value)}
          data-testid="form-eticheta"
        >
          {ETICHETE.map((et) => (
            <option key={et.value} value={et.value}>
              {et.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}