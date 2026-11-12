# Stage 7: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/app/b4537f5267f5000d 
## Key requests

### 1. Extracting and validating the controlled form (`TichetForm.jsx`)
- Asked: Help me implement Stage 7 (controlled form, validation, and saving to the API).
- Got: Gemini provided the `TichetForm` component with local state for `titlu`, `eticheta`, `eroare`, and `trimite`, validating that the title is non-empty and up to 100 characters before calling `onAdd`.
- Changed or rejected: Kept the structure and adapted the select options to SwiftFixIT's labels (`hardware`, `software`, `retea`) and set `data-testid="form-eticheta"`.

### 2. Connecting CRUD requests and `tw.json` for automated grading
- Asked: Give me the complete code without comments for all Stage 7 files.
- Got: Gemini refactored `api.js` to use a shared `request()` helper for `GET`, `POST`, `PATCH`, and `DELETE`, updated `App.jsx` to update state only after the server responds, and generated `tw.json` with the required `data-testid` attributes.
- Changed or rejected: Reverted the split history view back to a single unified `TichetList` so the automated test script can accurately count `[data-testid="item"]` elements.

## What I learned / what did not work
I learned how controlled inputs work in React (`value` + `onChange`), why `e.preventDefault()` is mandatory on form submission, and why state should only be updated with the response returned by the server (`POST`, `PATCH`, `DELETE`). I also learned how to let errors bubble up from `handleAdd` to the form component so the user doesn't lose their typed text when the server is down.