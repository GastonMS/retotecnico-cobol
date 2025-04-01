import { open } from "node:fs/promises";
import { writeFile } from "node:fs";

// Obtener el argumento de archivo de entrada CSV:
let archivoEntrada = process.argv[2];

if (archivoEntrada) {
  console.log("Archivo entrada: " + archivoEntrada);
} else {
  archivoEntrada = "data/entrada.csv";
  console.log(
    "No se ingreso el archivo de entrada, se tomará el por defecto data/entrada.csv"
  );
}

const file = await open(archivoEntrada);

let lineCounter = 0;
let balanceFinal = 0;
let montoMayor = 0.0;
let trxMayorMonto = "";
let nroTrxCredito = 0;
let nroTrxDebito = 0;

for await (const line of file.readLines()) {
  lineCounter++;

  // Se salta la primera linea que es la cabecera del archivo CSV:
  if (lineCounter === 1) {
    continue;
  }

  console.log(line);

  // Obtenemos un array con cada columna del CSV:
  const array = line.split(",");

  // Obtenemos el monto de la transacción:
  let montoTrx = Number(array[2]);

  // Obtener la transacción con el monto mayor:
  if (montoTrx > montoMayor) {
    montoMayor = montoTrx;
    trxMayorMonto = "ID " + array[0] + " - " + array[2];
  }

  // Obtenemos el Balance Final:
  if (array[1] === "Crédito") {
    nroTrxCredito++;
    balanceFinal = balanceFinal + montoTrx;
  } else {
    nroTrxDebito++;
    balanceFinal = balanceFinal - montoTrx;
  }
}

// console.log(trxMayorMonto);
// console.log(balanceFinal.toFixed(2));
// console.log(nroTrxCredito);
// console.log(nroTrxDebito);

console.log("Generando reporte...");

const reporte =
  "    Reporte de Transacciones\n" +
  "    -----------------------------------------------\n" +
  "    Balance Final: " +
  balanceFinal.toFixed(2) +
  "\n" +
  "    Transacción de Mayor Monto: " +
  trxMayorMonto +
  "\n" +
  "    Conteo de Transacciones: Crédito: " +
  nroTrxCredito +
  " Débito: " +
  nroTrxDebito;

// Imprimir el reporte por consola:
console.log(reporte);

// Grabar reporte a un archivo TXT:
// writeFile("data/reporte.txt", reporte, "utf8", (err) => {
//   if (err) throw err;
//   console.log("Reporte generado en data/reporte.txt...!!!");
// });

// Imprimir los argumentos del programa:
// process.argv.forEach(function (val, index, array) {
//   console.log(index + ": " + val);
// });
