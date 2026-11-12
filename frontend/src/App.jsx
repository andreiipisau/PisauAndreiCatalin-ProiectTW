import { useEffect, useState } from "react";
import TichetList from "./components/TichetList.jsx";
import TichetForm from "./components/TichetForm.jsx";
import {
  createTichet,
  deleteTichet,
  fetchTichete,
  updateTichet,
} from "./api.js";
import "./App.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [tichete, setTichete] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

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

  async function handleAdd(tichetNou) {
    const creat = await createTichet(tichetNou);
    setTichete((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const tichet = tichete.find((t) => t.id === id);
    if (!tichet) return;
    try {
      const actualizat = await updateTichet(id, { rezolvat: !tichet.rezolvat });
      setTichete((prev) => prev.map((t) => (t.id === id ? actualizat : t)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTichet(id);
      setTichete((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
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
        <section className="panel">
          <h2>Adaugă tichet</h2>
          <TichetForm onAdd={handleAdd} />
        </section>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <section className="panel">
            <h2>Tichete în lucru</h2>
            {loading && (
              <p className="info" data-testid="loading">
                Se încarcă...
              </p>
            )}
            {error && (
              <p className="error" data-testid="error">
                {error}
              </p>
            )}
            {!loading && totalTichete === 0 && (
              <TichetList
                tichete={[]}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            )}
            {!loading && totalTichete > 0 && ticheteActiveList.length === 0 && (
              <p className="info">Toate tichetele au fost rezolvate!</p>
            )}
            {!loading && ticheteActiveList.length > 0 && (
              <TichetList
                tichete={ticheteActiveList}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            )}
          </section>

          <section className="panel">
            <h2>Istoric (Rezolvate)</h2>
            {!loading && istoricTichete.length === 0 && (
              <p className="info">Nu există tichete rezolvate încă.</p>
            )}
            {!loading && istoricTichete.length > 0 && (
              <TichetList
                tichete={istoricTichete}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            )}
          </section>
        </div>
      </main>
    </>
  );
}