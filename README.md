# SwiftFixIT

Platformă online pentru gestionarea tichetelor de mentenanță și reparații IT.

## Data model

| Field | Type | Notes |
|---|---|---|
| Problemă / Echipament | text | required, max 100 chars |
| Rezolvat | boolean | toggled from the list, default false |
| Tip serviciu | fixed values | Hardware, Software, Rețea |
| Categorie Echipament | relation | PC, Laptop, Server, Periferice |
| Client | relation | the owner of the ticket (from week 11) |

Sample data used across all stages:

1. Înlocuire display laptop Dell — activ (Deschis), Hardware
2. Instalare Windows 11 — finalizat (Rezolvat), Software
3. Configurare router Wi-Fi — activ (Deschis), Rețea

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

## How to run

```bash
cd frontend
npm install
npm run dev