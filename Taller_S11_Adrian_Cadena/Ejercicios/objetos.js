
function Car(model,km,registration){
    this.model=model;
    this.km=km;
    this.registration=registration
}
let Camaro=new Car("Chevrolet",10000,"01234ABC")
let SD=new Car("Camaro",52000,"012sf313")

console.log("Propiedades del Camaro:");
for (let prop in Camaro) {
    console.log(`${prop}: ${Camaro[prop]}`);
}