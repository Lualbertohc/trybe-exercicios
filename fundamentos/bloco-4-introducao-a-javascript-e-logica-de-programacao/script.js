// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log("Bem vindo(a) " + info.personagem);
// info.recorrente = "sim";
// console.log(info.recorrente);

// for (let teste in info) {
//   console.log(teste);
// }

let info = {
  personagem: 'Margarida e Tio Patinhas',
  origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrentes: "Sim e Sim"
};

for (let teste in info){
  console.log(info[teste]);
}


