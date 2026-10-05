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
| Gemini | Generarea structurii HTML, CSS și a fișierului README conform temei SwiftFixIT. |

Details per stage:
* Stage 1: Generarea codului HTML, CSS și a jurnalului AI. Vezi folderul ai-log/.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Checklist Stage 1
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](...) | read |
| S1-R2 | AI usage section | [README.md](...) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](...) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L48](...) | open the page |
| S1-R5 | finished card looks different | [style.css#L70-L75](...) | look at the card (.done) |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L90-L95](...) | resize < 700px (@media) |
| S1-R7 | visible focus, readable dark theme | [style.css#L78-L105](...) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [commit link](...) | commit history |
*(Notă: Vei înlocui `(...)` cu permalink-urile GitHub reale după ce faci push la cod)*