// 7. Verifique se um número é positivo e maior que 100, ou negativo.

let numero = Number(prompt("Informe o número: "))

if (numero >= 0){
    if (numero > 100){
        console.log(`O número ${numero} é positivo e maior do que 100`)
    } else {
        console.log(`O número ${numero} é positivo e menor ou igual do que 100`)
    }
} else {
    console.log(`O número ${numero} é negativo`)
}