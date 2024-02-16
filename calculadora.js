function sumar() {
    calcular((num1, num2) => num1 + num2);
}

function restar() {
    calcular((num1, num2) => num1 - num2);
}

function multiplicar() {
    calcular((num1, num2) => num1 * num2);
}

function dividir() {
    calcular((num1, num2) => num2 !== 0 ? num1 / num2 : 'Error');
}

function elevarCuadrado() {
    calcular((num1) => num1 ** 2);
}

function raizCuadrada() {
    calcular((num1) => num1 >= 0 ? Math.sqrt(num1) : 'Error');
}

function elevar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    calcular((_, __, customFunc) => customFunc(num1, num2));
}

function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = operacion(num1, num2);
    document.getElementById('resultado').innerText = resultado;
}
