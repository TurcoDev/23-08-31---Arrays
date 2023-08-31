// arrays
let auto1 = 'Fiat';
let auto2 = 'Ford';
let auto3 = 'Renault';

let autos = ['Fiat', 'Ford', 'Renault', 'Ferrari'];
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

autos[1] = 'VW';

for (let index = 0; index < autos.length; index++) {
  console.log("For: " + autos[index]);
}

const nombres = ['Pedro', 'Francisco', 'Walter'];
nombres[1] = 'Pablo';
// nombres = [];

for (let index = 0; index < nombres.length; index++) {
  document.write(nombres[index]);
}

// identificar etiquetas
let contenedorGlobal = document.getElementById('autores');
console.log(contenedorGlobal);
// contenedorGlobal.innerHTML = '<h2>Hola</h2>';


function addInContainer(array, contenedor) {

  for (let index = 0; index < array.length; index++) {
    contenedor.innerHTML += '<li>' + array[index] + '</li>';
  }
}

addInContainer(nombres, contenedorGlobal);