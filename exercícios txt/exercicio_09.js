// 9. Receba dois números e verifique se pelo menos um deles é negativo.

let a = Number(prompt("Informe um número: "))
let b = Number(prompt("Informe outro número: "))

let resultado = (a < 0) || (b < 0)
console.log(resultado)