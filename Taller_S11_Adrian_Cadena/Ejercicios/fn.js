
//Factorial
function calcularFactorial(numero) {
    if (numero < 0) {
        return "Ingrese un numero valido";
    }else if (numero == 0) {
        return 1;
    }
    
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
num=parseInt(prompt("Ingrese un número: "))
document.write(calcularFactorial(num))
