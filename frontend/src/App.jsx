import { useEffect, useState } from "react";
import TichetList from "./components/TichetList.jsx";
import { fetchTichete } from "./api.js";
import "./App.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [tichete, setTichete] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [titlu, setTitlu] = useState("");
  const [eticheta, setEticheta] = useState("hardware");
  const [tema, setTema] = useState(temaInitiala);

  // Preluarea datelor de la API (Etapa 6)
  useEffect(() => {
    let ignore = false;
    
    async function load() {
      try {
        const data = await fetchTichete();
        if (!ignore) setTichete(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    
    load();
    
    return () => {
      ignore = true;
    };
  }, []);

  function handleToggle(id) {
    setTichete((prev) =>
      prev.map((t) => (t.id === id ? { ...t, rezolvat: !t.rezolvat } : t))
    );
  }

  function handleDelete(id) {
    setTichete((prev) => prev.filter((t) => t.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  function adaugaTichet(event) {
    event.preventDefault();
    if (!titlu.trim()) return;

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

  const ticheteActiveList = tichete.filter((t) => !t.rezolvat);
  const istoricTichete = tichete.filter((t) => t.rezolvat);
  
  const totalTichete = tichete.length;
  const ticheteActive = ticheteActiveList.length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>SwiftFixIT</h1>
        <p>
          Platformă online pentru gestionarea tichetelor de mentenanță și reparații IT.
        </p>
        <p className="app-count">
          {totalTichete} tichete, dintre care {ticheteActive} active
        </p>
      </header>

      <main className="container">
        
        {/* SECȚIUNEA 1: Formularul de adăugare */}
        <section className="panel">
          <h2>Adaugă tichet</h2>
          <form className="item-form" onSubmit={adaugaTichet}>
            <label>
              Titlu
              <input
                type="text"
                value={titlu}
                onChange={(e) => setTitlu(e.target.value)}
                placeholder="Ex: Resetare parolă"
              />
            </label>
            <label>
              Etichetă
              <select
                value={eticheta}
                onChange={(e) => setEticheta(e.target.value)}
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
          <h2>Tichete în lucru</h2>
          
          {loading && <p className="info">Se încarcă...</p>}
          
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && !error && ticheteActiveList.length === 0 && (
            <p className="info">Nu există tichete în lucru în acest moment.</p>
          )}

          {!loading && !error && ticheteActiveList.length > 0 && (
            <TichetList
              tichete={ticheteActiveList}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>

        <section className="panel">
          <h2>Istoric (Rezolvate)</h2>
          
          {loading && <p className="info">Se încarcă...</p>}

          {!loading && !error && istoricTichete.length === 0 && (
            <p className="info">Nu există tichete rezolvate încă.</p>
          )}

          {!loading && !error && istoricTichete.length > 0 && (
            <TichetList
              tichete={istoricTichete}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>

      </main>
    </>
  );
}