const tichete = [
  { id: 1, echipament: "Înlocuire display laptop Dell", rezolvat: false, tipServiciu: "hardware", categorie: "laptop", client: "Popescu Ion" },
  { id: 2, echipament: "Instalare Windows 11", rezolvat: true, tipServiciu: "software", categorie: "pc", client: "Ionescu Maria" },
  { id: 3, echipament: "Configurare router Wi-Fi", rezolvat: false, tipServiciu: "retea", categorie: "periferice", client: "Vasile Andrei" }
];

const TIPURI_SERVICIU = ["hardware", "software", "retea"];

// A. Listarea numelor tichetelor
function listeazaEchipamente(lista) {
  return lista.map((t) => t.echipament);
}

// B. Numărarea tichetelor active (nerezolvate)
function numaraActive(lista) {
  return lista.filter((t) => !t.rezolvat).length;
}

// C. Căutarea după echipament (case-insensitive)
function cautaDupaEchipament(lista, text) {
  return lista.filter((t) => 
    t.echipament.toLowerCase().includes(text.toLowerCase())
  );
}

// D. Funcție ajutătoare pentru generarea următorului ID
function nextId(lista) {
  return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

// E. Adăugarea unui tichet (cu validare și imutabilitate)
function adaugaTichet(lista, echipament, tipServiciu) {
  const numeCurat = echipament.trim();
  
  if (!numeCurat) {
    console.log("Eroare: Numele echipamentului nu poate fi gol!");
    return lista;
  }
  
  if (!TIPURI_SERVICIU.includes(tipServiciu)) {
    console.log(`Eroare: Tipul de serviciu '${tipServiciu}' este invalid!`);
    return lista;
  }

  const tichetNou = {
    id: nextId(lista),
    echipament: numeCurat,
    rezolvat: false,
    tipServiciu: tipServiciu,
    categorie: "nespecificat", // Câmpuri implicite până la etapele următoare
    client: "nespecificat"
  };

  return [...lista, tichetNou];
}

// F. Comutarea stării (Rezolvat / Deschis)
function comutaRezolvat(lista, id) {
  return lista.map((t) => 
    t.id === id ? { ...t, rezolvat: !t.rezolvat } : t
  );
}

// G. Ștergerea unui tichet
function stergeTichet(lista, id) {
  return lista.filter((t) => t.id !== id);
}

console.log("--- Citire ---");
console.log("Tichete:", listeazaEchipamente(tichete).join(", "));
console.log("Tichete active (Deschise):", numaraActive(tichete));
console.log("Căutare 'laptop':", listeazaEchipamente(cautaDupaEchipament(tichete, "laptop")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaTichet(tichete, "Curățare praf unitate PC", "hardware");
console.log("Lista nouă:", listaNoua.length, "tichete");
console.log("Originalul a rămas cu:", tichete.length, "tichete"); // Demonstrează imutabilitatea

console.log("--- Modificare și ștergere ---");
listaNoua = comutaRezolvat(listaNoua, 1);
console.log("După bifarea id 1, active:", numaraActive(listaNoua));
listaNoua = stergeTichet(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaEchipamente(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaTichet(listaNoua, "   ", "hardware"); // Va respinge
adaugaTichet(listaNoua, "Reparație placă bază", "urgenta"); // Va respinge