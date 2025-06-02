// 10. Dado um número, verifique se ele é múltiplo de 3 e de 5 ao mesmo tempo.

let num = Number(prompt("Informe um número: "))

let resultado = (num % 3 == 0) && (num % 5 == 0)

console.log(resultado)