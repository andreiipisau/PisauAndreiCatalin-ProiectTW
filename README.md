# SwiftFixIT
Platformă online pentru gestionarea tichetelor de mentenanță și reparații IT.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| Problemă / Echipament | text | required, max 100 chars |
| Rezolvat | boolean | toggled from the list, default false |
| Tip serviciu | fixed values | Hardware, Software, Rețea |
| Categorie Echipament | relation | PC, Laptop, Server, Periferice |
| Client | relation | the owner of the ticket (from week 11) |

Sample data used across all stages:
1. Înlocuire display laptop Dell, activ (Deschis), Hardware
2. Instalare Windows 11, finalizat (Rezolvat), Software
3. Configurare router Wi-Fi, activ (Deschis), Rețea

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Generarea structurii HTML, CSS, JS și a documentației conform temei SwiftFixIT. |

Details per stage:
* Stage 1: Generarea codului HTML, CSS și a jurnalului AI. Vezi folderul ai-log/.
* Stage 2: Generarea codului JavaScript cu logică imutabilă (tichete.js) și teste în consolă. Vezi folderul ai-log/.

## How to run
Open `index.html` in a browser. No build step, no server.

## Stage 2: data logic
Plain JavaScript, no DOM. `tichete.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project