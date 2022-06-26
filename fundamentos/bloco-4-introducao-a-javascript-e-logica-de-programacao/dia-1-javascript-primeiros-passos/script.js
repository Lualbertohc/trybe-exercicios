//1° PROGRAMA 

// const a = 150;
// const b = 245;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//2° PROGRAMA

// const a = 150;
// const b = 245;

// if (a > b){
//     console.log(a);
// } else {
//     console.log (b)
// }

//3° PROGRAMA

// const a = 150;
// const b = 245;
// const c = 764;

// if (a > b && a > c) {
//     console.log("O maior número é " + a);
// } else if (b > a && b > c) {
//     console.log("O maior número é " + b);
// } else {
//     console.log("O maior número é " + c);
// }

//4° PROGRAMA

// const numero = 25;

// if (numero > 0){
//     console.log("positive")
// } else {
//     console.log("negative");
// }

//5° PROGRAMA

// const ang1 = 75;
// const ang2 = 64;
// const ang3 = 7;

// if (ang1 + ang2 + ang3 === 180)

// 6° PROGRAMA

// function xadrez(peca) {
//     peca = peca.toLowerCase();

//     if (peca === "peão") {
//         return ("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas");
//     } else {
//         return("peça inválida");
//     }
// }
// console.log(xadrez("Peão"));

// 7° PROGRAMA

// let faixaEtaria = 'adulto';

// switch (faixaEtaria) {
//   case 'adolescente':
//     // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

//     console.log('Consulte a classificação do filme');
//     // Quando a pessoa for adolescente essa será a mensagem impressa no console.

//     break;
// default:

let nota = (40/100);

if (nota >= (90/100)) {
    nota = "A";
} else if (nota >= (80/100)) {
    nota = "B";
} else if (nota >= (70/100)) {
    nota = "C";
} else if (nota >= (60/100)) {
    nota = "D";
} else if (nota >= (50/100)) {
    nota = "E";
} else if (nota < (50/100)) {
    nota = "F";
} else if (nota < 0 || nota > (100/100)) {
    console.log("erro");
}
console.log(nota);
