# SwiftFixIT

Platformă online pentru gestionarea tichetelor de mentenanță și reparații IT.

## Data model

| Field | Type | Notes |
|---|---|---|
| Problemă / Echipament (`titlu`) | text | required, max 100 chars |
| Rezolvat (`rezolvat`) | boolean | toggled from the list, default false |
| Tip serviciu (`eticheta`) | fixed values | hardware, software, retea |
| Categorie Echipament | relation | PC, Laptop, Server, Periferice |
| Client | relation | the owner of the ticket (from week 11) |

Sample data used across all stages:

1. Înlocuire display laptop Dell — activ (Deschis), hardware
2. Instalare Windows 11 — finalizat (Rezolvat), software
3. Configurare router Wi-Fi — activ (Deschis), retea

## AI usage

| Tool | Used for |
|---|---|
| Gemini / ChatGPT | Generarea și adaptarea codului HTML, CSS, JavaScript, React și a documentației conform temei SwiftFixIT. |

Details per stage:

- Stage 1: Generarea codului HTML, CSS și a jurnalului AI. Vezi folderul `ai-log/`.
- Stage 2: Generarea codului JavaScript cu logică imutabilă (`tichete.js`) și teste în consolă. Vezi folderul `ai-log/`.
- Stage 3: Inițializarea proiectului React cu Vite, reutilizarea stilurilor din Stage 1 și integrarea datelor din Stage 2 în componenta principală. Vezi folderul `ai-log/`.
- Stage 4: Extragerea interfeței în componente React (`TichetCard`, `TichetList`) și randarea dinamică a datelor. Vezi folderul `ai-log/`.
- Stage 5: Implementarea state-ului local în React (`useState`), funcții imutabile pentru comutare/ștergere și buton de Dark/Light mode. Vezi folderul `ai-log/`.
- Stage 6: Mutarea datelor în `db.json` cu `json-server`, încărcarea prin `fetch` și `useEffect`, tratarea stărilor de loading și eroare. Vezi folderul `ai-log/`.
- Stage 7: Adăugarea formularului controlat cu validare (`TichetForm`), salvarea operațiilor CRUD (`POST`, `PATCH`, `DELETE`) în API și configurarea `tw.json` + `data-testid`. Vezi folderul `ai-log/`.

## How to run

```bash
cd frontend
npm install

# terminal 1 (start the mock API on port 3001)
npm run api

# terminal 2 (start the React dev server)
npm run dev