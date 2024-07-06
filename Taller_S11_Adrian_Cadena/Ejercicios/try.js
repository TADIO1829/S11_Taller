function convertToNumber(value) {
    try {
        let number = parseInt(value);

        if (isNaN(number)) {
            throw new Error("No se puede convertir");
        }

        console.log(`Conversión realizada con exito: ${number}`);
    } catch (error) {

        console.log(`Error: ${error.message}`);
    } finally {

        console.log("Finalizando ");
    }
}

convertToNumber("456");

convertToNumber("def");