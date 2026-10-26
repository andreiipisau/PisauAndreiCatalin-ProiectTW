# AI Log — Stage 4: Components rendered from data

## Project
**SwiftFixIT** — An online platform for managing IT maintenance and repair tickets.

## Objective
Replace the raw JSON list displayed in Stage 3 with a list of interactive cards rendered dynamically from data using React components. Pass data between components via props, handle conditional rendering, and ensure the browser console is free of React warnings.

## AI Tool Used

| Tool | Purpose |
|https://gemini.google.com/app/33bd021067a25688|
| Gemini / ChatGPT | Generating React components, adapting the code to the SwiftFixIT theme, troubleshooting React import errors, fixing styling issues, and updating the project documentation. |

## Activities

### 1. React Components Creation
- Created the `frontend/src/components/` folder.
- Implemented `TichetCard.jsx` to render a single ticket item.
- Implemented `TichetList.jsx` to map through the array and render multiple `TichetCard` instances.

### 2. Props & Dynamic Rendering
- Handled data passing via `props` from the parent (`App.jsx`) to `TichetList`, and further down to `TichetCard`.
- Used the `map` method to generate the list and successfully added the `key={tichet.id}` attribute to prevent React warnings.
- Implemented conditional rendering in `TichetCard` to dynamically change styles and labels based on the `rezolvat` (done) status.
- Handled the empty list scenario by displaying a specific message when the ticket array is empty.

### 3. Troubleshooting & UI Fixes
- Fixed an import duplication error (`Identifier 'useState' has already been declared`) in `App.jsx`.
- Resolved a 404 console error related to `favicon.ico` by updating the `<link rel="icon">` tag in `index.html`.
- Restored the original Stage 1 CSS mockup design by rewriting `frontend/src/App.css`, completely replacing the default Vite styling. Applied custom colored badges for different ticket categories (Hardware, Software, Rețea) and ensured Dark Mode compatibility.

### 4. Documentation
- Updated `README.md` with the Stage 4 description, check-list, and project status.
- Documented the AI assistance in this log.

## Verification

The following checks were performed to consider Stage 4 complete:

- [x] At least 2 components exist in `src/components/` (`TichetCard.jsx`, `TichetList.jsx`).
- [x] The card component receives data strictly through props.
- [x] The list is rendered using `.map()` and `key={id}`, with no warnings in the DevTools console.
- [x] A fallback message is displayed when the list is empty.
- [x] The ticket state (e.g.,