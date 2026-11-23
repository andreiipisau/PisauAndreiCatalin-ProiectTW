# Stage 9: AI log

## Tools
- Gemini

## Conversations
- (Implementing custom Node.js and Express backend for Stage 9, server-side validation, CORS, and removing json-server)

## Key requests

### 1. Creating the Express backend
- Asked: Start Stage 9 from the beginning with a custom backend in Node.js and Express.
- Got: Gemini provided `backend/package.json`, `.gitignore`, `.env.example`, `src/validation.js`, `src/routes/tichete.js`, `src/app.js`, and `src/server.js` implementing CRUD routes, HTTP status codes (`200`, `201`, `204`, `400`, `404`, `500`), `express.json()`, and `cors()`.
- Changed or rejected: Adapted routes (`/tichete`), fields (`titlu`, `eticheta`, `rezolvat`), and valid values (`hardware`, `software`, `retea`) to SwiftFixIT.

### 2. Connecting frontend and removing `json-server`
- Asked: Connect frontend error handling and remove `json-server`.
- Got: Gemini updated `frontend/src/api.js` to read `body.error` and outlined removing `db.json`, cleaning `frontend/package.json`, and running `npm install`.
- Changed or rejected: Preserved React pages and components while switching the API backend to Express.

## What I learned / what did not work
I learned how Express middleware (`cors()`, `express.json()`, 404 handler, and central error handler) works in order, why server-side validation is mandatory alongside frontend validation, and how `json-server` is removed cleanly before moving to MariaDB in Stage 10.