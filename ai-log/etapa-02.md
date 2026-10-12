# Stage 3: AI log

## Tools
- ChatGPT (OpenAI)

## Conversations
- Link conversație: [ChatGPT conversation](https://chatgpt.com/c/6acca44f-165c-83eb-b5e3-b50c67c5f4df)

## Key requests

### 1. Initializarea proiectului React cu Vite
- **Asked:** I asked the assistant to help me initialize a React project using Vite for my SwiftFixIT application, following the Stage 3 requirements.
- **Got:** The assistant provided the terminal commands to create the `frontend/` directory, install dependencies with `npm install`, and start the development server using `npm run dev`.
- **Changed or rejected:** I followed the setup instructions in PowerShell and adapted the commands to the Windows terminal environment.

### 2. Integrarea datelor din SwiftFixIT în React
- **Asked:** I asked the assistant to adapt the main React component to my SwiftFixIT data model.
- **Got:** The assistant provided an `App.jsx` component containing the ticket data, the application header, a calculated counter for total and active tickets, and a temporary JSON representation of the data.
- **Changed or rejected:** The example data must match the actual SwiftFixIT tickets documented in the project README.

### 3. Reutilizarea stilurilor din Etapa 1
- **Asked:** I asked how to reuse the CSS styles from Stage 1 in the new React project.
- **Got:** The assistant explained how to copy the existing styles into `frontend/src/App.css`, update the import in `main.jsx`, and configure the container to use a single column.
- **Changed or rejected:** The existing CSS styles should be preserved, with only the changes required by Stage 3.

### 4. Actualizarea documentației
- **Asked:** I asked the assistant to update the README and prepare the AI log for Stage 3.
- **Got:** The assistant provided a README structure containing the project description, data model, run instructions, stage status, and verification checklist.
- **Changed or rejected:** The documentation was adapted to the SwiftFixIT project and its ticket management functionality.

## What I learned / what did not work

I learned how to initialize a React application using Vite, install dependencies with npm, and run a local development server. I also learned how the `App.jsx` component displays data using JSX, how JavaScript expressions can calculate the total number of tickets and the number of active tickets, and how `JSON.stringify()` can temporarily display an array as formatted JSON.

One issue occurred when moving the files into the `mockup/` directory. The `mv` command from the guide did not work as expected in PowerShell because it is an alias for `Move-Item`. I resolved this by using PowerShell-compatible syntax.

I also learned how to reuse the CSS styles from Stage 1 and how to update the README and AI log for the new React project.

The remaining verification steps include checking that `npm run dev` starts without errors, confirming that the displayed ticket data matches the README, running `npm run build`, and publishing the completed changes to GitHub.
