import { useState } from "react";

const ticheteInitiale = [
  {
    id: 1,
    titlu: "Înlocuire display laptop Dell",
    eticheta: "hardware",
    rezolvat: false,
  },
  {
    id: 2,
    titlu: "Instalare Windows 11",
    eticheta: "software",
    rezolvat: true,
  },
  {
    id: 3,
    titlu: "Configurare router Wi-Fi",
    eticheta: "retea",
    rezolvat: false,
  },
];

export default function App() {
  const [tichete, setTichete] = useState(ticheteInitiale);
  const [titlu, setTitlu] = useState("");
  const [eticheta, setEticheta] = useState("hardware");

  const totalTichete = tichete.length;

  const ticheteActive = tichete.filter(
    (tichet) => !tichet.rezolvat
  ).length;

  function adaugaTichet(event) {
    event.preventDefault();

    if (!titlu.trim()) {
      return;
    }

    const tichetNou = {
      id: Date.now(),
      titlu: titlu.trim(),
      eticheta,
      rezolvat: false,
    };

    setTichete([...tichete, tichetNou]);
    setTitlu("");
    setEticheta("hardware");
  }

  return (
    <>
      <header className="app-header">
        <h1>SwiftFixIT</h1>
        <p>
          Platformă online pentru gestionarea tichetelor
          de mentenanță și reparații IT.
        </p>
        <p className="app-count">
          {totalTichete} tichete, dintre care {ticheteActive} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Adaugă tichet</h2>

          <form className="item-form" onSubmit={adaugaTichet}>
            <label>
              Problemă / Echipament
              <input
                type="text"
                name="titlu"
                placeholder="Ex: Înlocuire display laptop"
                value={titlu}
                onChange={(event) => setTitlu(event.target.value)}
                maxLength={100}
                required
              />
            </label>

            <label>
              Tip serviciu
              <select
                name="eticheta"
                value={eticheta}
                onChange={(event) => setEticheta(event.target.value)}
              >
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
                <option value="retea">Rețea</option>
              </select>
            </label>

            <button type="submit">Adaugă</button>
          </form>
        </section>

        <section className="panel">
          <h2>Tichetele mele</h2>

          {tichete.length === 0 ? (
            <p className="empty">Nu există niciun tichet.</p>
          ) : (
            <ul className="item-list">
              {tichete.map((tichet) => (
                <li
                  className={`item-card ${tichet.rezolvat ? "done" : ""}`}
                  key={tichet.id}
                >
                  <div>
                    <h3>{tichet.titlu}</h3>
                    <span className={`badge badge-${tichet.eticheta}`}>
                      {tichet.eticheta === "hardware"
                        ? "Hardware"
                        : tichet.eticheta === "software"
                          ? "Software"
                          : "Rețea"}
                    </span>
                  </div>

                  <span className="status">
                    {tichet.rezolvat ? "Rezolvat" : "Deschis"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="app-footer">
        Proiect Tehnologii Web - SwiftFixIT
      </footer>
    </>
  );
}