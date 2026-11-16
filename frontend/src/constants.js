export const ETICHETE = [
  { value: "hardware", label: "Hardware" },
  { value: "software", label: "Software" },
  { value: "retea", label: "Rețea" },
];

export const ETICHETE_AFISARE = Object.fromEntries(
  ETICHETE.map((e) => [e.value, e.label])
);