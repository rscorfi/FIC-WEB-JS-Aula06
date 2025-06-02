// 4. Dada a idade de uma pessoa, verifique se ela é maior de idade (18 anos ou mais).

let idade = Number(prompt("Informe sua idade"))
let maior18 = (idade >= 18)

if (maior18 == true) {
    console.log("Você já tem idade suficiente para estar trabalhando faz tempo, seu vagabundo!")
}
else {
    console.log("Parabéns! Você é menor de idade. Vá se divertir um pouco!")
}
