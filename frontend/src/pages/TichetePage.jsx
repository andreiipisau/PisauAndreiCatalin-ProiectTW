import { useEffect, useState } from "react";
import TichetList from "../components/TichetList.jsx";
import TichetForm from "../components/TichetForm.jsx";
import {
  createTichet,
  deleteTichet,
  fetchTichete,
  updateTichet,
} from "../api.js";
import styles from "./TichetePage.module.css";

export default function TichetePage() {
  const [tichete, setTichete] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const ticheteActiveList = tichete.filter((t) => !t.rezolvat);
  const istoricTichete = tichete.filter((t) => t.rezolvat);
  const totalTichete = tichete.length;
  const active = ticheteActiveList.length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă tichet</h2>
        <TichetForm onAdd={handleAdd} />
      </section>

      <div className={styles.rightCol}>
        <section className="panel">
          <h2>Tichete în lucru</h2>
          <p className={styles.summary}>
            {totalTichete} tichete, dintre care {active} active
          </p>

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
    </div>
  );
}