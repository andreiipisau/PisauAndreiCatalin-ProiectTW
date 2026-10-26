import { useState } from "react";
import TichetList from "./components/TichetList.jsx";
import "./App.css";

const TICHETE_INITIALE = [
  { id: 1, titlu: "Înlocuire display laptop Dell", eticheta: "hardware", rezolvat: false },
  { id: 2, titlu: "Instalare Windows 11", eticheta: "software", rezolvat: true },
  { id: 3, titlu: "Configurare router Wi-Fi", eticheta: "retea", rezolvat: false },
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [tichete, setTichete] = useState(TICHETE_INITIALE);
  const [titlu, setTitlu] = useState("");
  const [eticheta, setEticheta] = useState("hardware");
  const [tema, setTema] = useState(temaInitiala);

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

  const totalTichete = tichete.length;
  const ticheteActive = tichete.filter((t) => !t.rezolvat).length;

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
          {totalTichete} tichete, dintre care {