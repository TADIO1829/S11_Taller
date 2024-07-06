
let asignatura=prompt("Ingrese su asignatura: ")
let nota=parseFloat(prompt("Ingrese su nota: "))
if(nota>=9 && nota<=10){
    document.write("Felicidades paso "+asignatura+ " con: "+nota+ " Extraordinario")
}else{
    if(8<=nota && nota<9){
        document.write("Aprobo  "+asignatura+ " con: "+nota+ " Muy bien")
    }else{
        if(7<=nota && nota<8){
            document.write("Aprobo "+asignatura+ " con: "+nota+ " Meh")
        }else{
            if(nota<7){
                document.write("Reprobo  "+asignatura+ " con: "+nota)
            }
        }
    }
}
