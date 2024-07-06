let num=parseFloat(prompt("Seleccion el numero que desea multiplicar (que sea entre 1-12): "))
i=1
while (i<13){
    multi=num*i
    document.write(num+" * "+i+" = "+multi+"<br>")
    i+=1
}
