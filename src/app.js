var pronoun = ["el", "un", "tu", "ese", "aquel", "mi", "nuestro"];
var adj = [
  "gran",
  "enorme",
  "pequeño",
  "supersticioso",
  "orgulloso",
  "curioso",
  "lindo",
  "gracioso",
  "cobarde",
  "tonto"
];
var noun = [
  "gato",
  "elefante",
  "hombre",
  "pantalon",
  "humano",
  "edificio",
  "carro",
  "piñata",
  "chocolate"
];
var ext = [
  ".com",
  ".net",
  ".es",
  ".org",
  ".gg",
  ".co",
  ".ve",
  ".io",
  ".info",
  ".com.ve"
];

let domainsListed = ["<tr>"];
let htmlList = document.getElementById("domainList");

// START Funciones generadoras de dominios
const domainGenerator = () => {
  let randomPronoun = pronoun[parseInt(Math.random() * pronoun.length)];
  let randomAdj = adj[parseInt(Math.random() * adj.length)];
  let randomNoun = noun[parseInt(Math.random() * noun.length)];
  let randomExt = ext[parseInt(Math.random() * ext.length)];

  let domain =
    "<td>" + randomPronoun + randomAdj + randomNoun + randomExt + "</td>";

  return domain;
};

const printDomains = () => {
  for (let counter = 0; counter < 40; counter++) {
    let x = domainGenerator();
    if (counter % 4 == 0 && counter !== 0) {
      domainsListed += "</tr><tr>";
    }
    domainsListed += x;
  }
};
// END Funciones generadoras de dominios

function onload() {
  printDomains();
  htmlList.innerHTML = domainsListed;
}

onload();
