export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

export function fetchTichete() {
  return request("/tichete");
}

export function fetchTichet(id) {
  return request(`/tichete/${id}`);
}

export function createTichet(tichet) {
  return request("/tichete", { method: "POST", body: JSON.stringify(tichet) });
}

export function updateTichet(id, changes) {
  return request(`/tichete/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteTichet(id) {
  return request(`/tichete/${id}`, { method: "DELETE" });
}