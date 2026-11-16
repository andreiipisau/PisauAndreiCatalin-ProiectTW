import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTichet } from "../api.js";
import { ETICHETE_AFISARE } from "../constants.js";
import styles from "./TichetDetaliuPage.module.css";

export default function TichetDetaliuPage() {
  const { id } = useParams();
  const [tichet, setTichet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchTichet(id)
      .then((data) => {
        if (!ignore) {
          setTichet(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Tichetul nu a putut fi încărcat: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la listă
      </Link>
      <h2
        className={tichet.rezolvat ? styles.done : undefined}
        data-testid="detail-title"
      >
        {tichet.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Tip serviciu</dt>
        <dd>
          <span className={`badge badge-${tichet.eticheta}`}>
            {ETICHETE_AFISARE[tichet.eticheta] ?? tichet.eticheta}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{tichet.rezolvat ? "Rezolvat" : "În lucru (Activ)"}</dd>
        <dt>ID Tichet</dt>
        <dd>{tichet.id}</dd>
      </dl>
    </section>
  );
}