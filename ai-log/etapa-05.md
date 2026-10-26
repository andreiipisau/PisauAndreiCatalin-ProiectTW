# AI Log — Stage 5: Local state and events

## Project
**SwiftFixIT** — An online platform for managing IT maintenance and repair tickets.

## Objective
Transform the static list from Stage 4 into an interactive one. Allow users to toggle ticket status and delete tickets directly from the UI. Introduce local state management in the main component (`App.jsx`), pass event handlers via props, derive UI values (like active ticket counters) from the state, and implement a Light/Dark mode toggle.

## AI Tool Used

| Tool | Purpose |
|https://gemini.google.com/app/33bd021067a25688|
| Gemini / ChatGPT | Implementing React local state with `useState`, building event handler functions for toggling and deleting items, updating CSS for smooth transitions and Dark Mode, and writing the documentation. |

## Activities

### 1. State Management & Event Handlers
- Moved the `TICHETE_INITIALE` array out of the component and passed it as the initial value to a `useState` hook in `App.jsx`.
- Created the `handleToggle` function using immutable array updates (`map`) to change a ticket's `rezolvat` status.
- Created the `handleDelete` function using `filter` to remove a ticket without mutating the original state.
- Derived the `totalTichete` and `ticheteActive` counters directly from the state array on each render, avoiding redundant state variables.

### 2. Component Updates (Props & UI)
- Updated `<TichetList />` to receive `onToggle` and `onDelete` props and pass them down to `<TichetCard />`.
- Modified `TichetCard.jsx` to render a controlled `<input type="checkbox">` connected to the `rezolvat` state via the `onChange` handler.
- Wrapped the checkbox and ticket title in a `<label>` to improve accessibility and click area.
- Added a `<button>` for deletion in `TichetCard`, connected to the `onDelete` handler via `onClick`, using `aria-label` for screen reader support.

### 3. Light / Dark Mode Toggle
- Implemented a `temaInitiala` function to check the OS preference (`window.matchMedia`).
- Created a `tema` state in `App.jsx` and a `handleTema` function to switch between "light" and "dark".
- The `handleTema` function updates the state and sets the `data-theme` attribute on the `document.documentElement` (`<html>` tag).
- Rendered a button in the `<header>` that reads the `tema` state to display the appropriate text ("Mod luminos" / "Mod întunecat").

### 4. CSS Refinements
- Added CSS classes (`.item-main`, `.btn-danger`, `.theme-toggle`) for the new interactive elements.
- Refactored the Dark Mode CSS logic. Removed the generic `@media` block restriction and implemented explicit `:root[data-theme="dark"]` rules.
- Added a `--header-bg` CSS variable to make the header turn black in Dark Mode.
- Added a `transition` property to background colors, text colors, and borders to create a smooth, fluid animation when switching themes.

### 5. Documentation
- Updated `README.md` with the Stage 5 description, checklist, and status.
- Documented the AI assistance in this log.

## Verification

The following checks were performed to consider Stage 5 complete:

- [x] State is held in `App.jsx` using `useState`.
- [x] Toggling a checkbox visually updates the item and changes its state.
- [x] The delete button successfully removes items from the list.
- [x] Header counters recalculate automatically upon toggling or deleting.
- [x] All state updates are strictly immutable (no `.push()`, `.splice()`).
- [x] The Light/Dark theme button toggles correctly and overrides OS defaults, with smooth CSS transitions.
- [x] The browser console is free of React warnings (like uncontrolled component errors or `key` warnings).
- [x] The README is updated with the Stage 5 section, checklist, and AI log reference.
- [x] Changes are committed and pushed to GitHub.

## Result

The application is now fully interactive. Users can add, resolve, and delete maintenance tickets, and switch between visual themes. Data flows seamlessly from parent state down to child components via props, and user actions flow back up via event handlers. The foundation is set for fetching real data in Stage 6.