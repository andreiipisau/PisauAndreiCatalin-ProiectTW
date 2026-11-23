export const ETICHETE_VALIDE = ["hardware", "software", "retea"];
const TITLU_MAX = 100;

export function valideazaTichet(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.eticheta !== undefined) {
    const et = body.eticheta ?? "hardware";
    if (!ETICHETE_VALIDE.includes(et)) {
      erori.push(`eticheta trebuie să fie una din: ${ETICHETE_VALIDE.join(", ")}`);
    } else {
      date.eticheta = et;
    }
  }

  if (body.rezolvat !== undefined) {
    if (typeof body.rezolvat !== "boolean") {
      erori.push("rezolvat trebuie să fie true sau false");
    } else {
      date.rezolvat = body.rezolvat;
    }
  } else if (!partial) {
    date.rezolvat = false;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}