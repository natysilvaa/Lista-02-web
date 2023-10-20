let nota;
let limiteAprovacao = 6;
nota = prompt("Digite a nota do aluno:");

if (nota >= limiteAprovacao) {
  console.log("O aluno foi aprovado.");
}
else {
  console.log("O aluno foi reprovado.");
}