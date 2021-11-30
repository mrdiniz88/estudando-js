
const a = 20;
const b = 10;
const operacao = ' ';

let resultado;

if(operacao === '+') {
    resultado = a + b;
} else if(operacao === '-') {
    resultado = a - b;
} else if (operacao === '*') {
    resultado = a * b;
} else if (operacao === '/') {
    resultado = a / b;
} else {
    resultado = a % b;
}

console.log(resultado)
