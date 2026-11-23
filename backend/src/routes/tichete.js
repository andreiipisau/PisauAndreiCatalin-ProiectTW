import { Router } from "express";
import { parseId, valideazaTichet } from "../validation.js";

const router = Router();

let tichete = [
  {
    id: 1,
    titlu: "Înlocuire display laptop Dell",
    rezolvat: false,
    eticheta: "hardware",
  },
  {
    id: 2,
    titlu: "Instalare Windows 11",
    rezolvat: true,
    eticheta: "software",
  },
  {
    id: 3,
    titlu: "Configurare router Wi-Fi",
    rezolvat: false,
    eticheta: "retea",
  },
];

let nextId = 4;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }
  const index = tichete.findIndex((t) => t.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Tichetul nu există" });
    return -1;
  }
  return index;
}

router.get("/", (req, res) => {
  res.json(tichete);
});

router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(tichete[index]);
});

router.post("/", (req, res) => {
  const { erori, date } = valideazaTichet(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  const tichet = { id: nextId++, ...date };
  tichete.push(tichet);
  res.status(201).json(tichet);
});

router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  const { erori, date } = valideazaTichet(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  tichete[index] = { ...tichete[index], ...date };
  res.json(tichete[index]);
});

router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  tichete.splice(index, 1);
  res.status(204).end();
});

export default router;