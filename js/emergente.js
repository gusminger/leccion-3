
let nombre
nombre = prompt('Cómo te llamás?')

let edad
edad = prompt('Qué edad tenés?')

if (edad < 30) {
console.log("Bienvenido " + nombre);
alert("Bienvenido " + nombre)
}  else if (edad > 30 && edad < 99){
console.log("Bienvenido " + nombre); 
alert("Bienvenido " + nombre)
}else{
    console.log(nombre + ", has ingresado un dato erróneo")
    alert(nombre + ", has ingresado un dato erróneo")
}