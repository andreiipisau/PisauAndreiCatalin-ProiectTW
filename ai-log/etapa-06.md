# Stage 6: AI log

## Tools
- Gemini

## Conversations
https://gemini.google.com/app/990bea3007219819
## Key requests

### 1. Debugging Vite Parse Error (Unexpected token)
- Asked: I got a `[PARSE_ERROR] Unexpected token` when trying to run `npm run dev` and my app crashed.
- Got: Gemini explained that in JSX, I either left an empty bracket `{}` without a variable, or I didn't properly wrap the text in a `<p>` tag, causing the parser to fail.
- Changed or rejected: I applied the fix by properly wrapping the counter in `<p className="app-count">` and ensuring I used my specific derived variable `{ticheteActive}` instead of a generic one.

### 2. Splitting the list to create a History section
- Asked: How can I create a history of the tickets?
- Got: Gemini suggested using derived values (`.filter()`) to split the main array into `ticheteActiveList` and `istoricTichete` right before the `return` statement, instead of using a new `useState`. Then, reuse the `<TichetList />` component twice.
- Changed or rejected: I implemented it exactly as suggested. It was a great approach because it prevented state synchronization bugs and demonstrated React component reusability.

## What I learned / what did not work
I learned how to use `useEffect` to fetch data from `json-server` when the component mounts, and why the `ignore` flag is important to prevent setting state if the component unmounts. I also learned the importance of handling all three HTTP states (loading, success, error) so the user doesn't see a blank page if the API is down. Finally, I understood how to use derived values to create multiple UI views (like a history log) from a single source of truth.