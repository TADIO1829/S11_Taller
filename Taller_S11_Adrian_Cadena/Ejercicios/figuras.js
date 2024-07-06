
//Imprimir un cuadrado
document.write("Cuadrado<br>")
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        document.write(" * ")
    }
    document.write("<br>")
}

//Imprimir un triangulo
document.write("Triangulo<br>")
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j<=i; j++) {
        document.write(" * ")
    }
    document.write("<br>")
}