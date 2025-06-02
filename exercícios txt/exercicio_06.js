// 6. Dada uma nota de 0 a 10, verifique se o aluno foi aprovado. A aprovação requer uma nota maior ou igual a 6.

let nota = Number(prompt("Informe a nota, de 0 à 10, do aluno: "))

if (nota >= 6) {
    console.log("Parabéns! Você foi aprovado!")
} else {
    console.log("Até o próximo ano novamente! Você foi reprovado!")
}