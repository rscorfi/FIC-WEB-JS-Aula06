// 5. Verifique se um número é par ou ímpar.

let numero = Number(prompt("Informe um número"))
let resto = numero % 2

if (resto == 0) {
    console.log(`O número ${numero} é par`)
} else {
    console.log(`O número ${numero} é impar`)
}
