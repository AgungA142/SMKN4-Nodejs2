// import seblak from "os";
import readline from "readline";

// console.info(seblak.cpus());

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // input.question(`What's your name?`, name => {
  //   console.log(`Hi ${name}!`);
  //   input.close();
  // });

function kalkulator() {
  input.question("masukan angka pertama: ", angka1 => {
    input.question("masukan angka kedua: ", angka2 => {
      input.question("masukan operator (+,-,*,/): ", operator => {
        if (operator === "+") {
          console.info(`hasil penjumlahan adalah ${parseFloat(angka1) + parseFloat(angka2)}`);
        } else if (operator === "-") {
          console.info(`hasil pengurangan adalah ${parseFloat(angka1) - parseFloat(angka2)}`);
        } else if (operator === "*") {
          console.info(`hasil perkalian adalah ${parseFloat(angka1) * parseFloat(angka2)}`);
        } else if (operator === "/") {
          console.info(`hasil pembagian adalah ${parseFloat(angka1) / parseFloat(angka2)}`);
        } else {
          console.info(`operator tidak dikenal`);
        }
        input.close();
      });
    });
  });
}

kalkulator();
