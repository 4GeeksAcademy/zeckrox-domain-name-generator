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
var noun = ["gato", "elefante", "hombre", "pantalon", "humano"];
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

// let domainsListed = ["<tr>"];
// let htmlList = document.getElementById("domainList");

// START Funciones generadoras de dominios
// const domainGenerator = () => {
//   let randomPronoun = pronoun[parseInt(Math.random() * pronoun.length)];
//   let randomAdj = adj[parseInt(Math.random() * adj.length)];
//   let randomNoun = noun[parseInt(Math.random() * noun.length)];
//   let randomExt = ext[parseInt(Math.random() * ext.length)];

//   let domain =
//     "<td>" + randomPronoun + randomAdj + randomNoun + randomExt + "</td>";

//   return domain;
// };

// const printDomains = () => {
//   for (let counter = 0; counter < 40; counter++) {
//     let x = domainGenerator();
//     if (counter % 4 == 0 && counter !== 0) {
//       domainsListed += "</tr><tr>";
//     }
//     domainsListed += x;
//   }
// };
// END Funciones generadoras de dominios

// function onload() {
//   printDomains();
//   htmlList.innerHTML = domainsListed;
// }

// onload();

// SEGUNDO INTENTO
let newList = [];
// Change quantity of columns in Table, the quantity will be the number-1
let columns = 6;
pronoun.forEach(pronombre => {
  adj.forEach(adjetivo => {
    noun.forEach(sustantivo => {
      ext.forEach(extension => {
        newList.push(pronombre + adjetivo + sustantivo + extension);
      });
    });
  });
});

let mapList = newList.map(dominio => "<td>" + dominio + "</td>");
let htmlList = document.getElementById("domainList");

// Function to create a table with every domain from array
function fixTable() {
  for (let i = 0; i <= mapList.length; i++) {
    if (i == 0) {
      mapList.splice(i, 0, "<tr>");
    }
    if (i % columns == 0 && i !== 0) {
      mapList.splice(i, 0, "</tr><tr>");
    }
  }
}
// .join function to convert array in string and erase ","
function Join() {
  mapList = mapList.join("");
}
// .innerHTML to show array contents on index.html
function onload2() {
  htmlList.innerHTML = mapList;
}

fixTable();
Join();
onload2();
