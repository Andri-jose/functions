
// Calcular costo total de productos y/o servicios seleccionados por el usuario.

function total () {
    let cars = parseInt(prompt("Ingrese precio del auto que quiere comprar: mustang(precio: 15000) B camaro(precio: 18000) C subaru(precio: 20000)"));
    let sure = parseInt(prompt("Ingrese precio del seguro que quiere comprar: D alto(precio: 4000) E medio(precio: 2500) F bajo(precio: 1000)"));
    let result = cars + sure;
    alert ("El costo total es " + result);
}

total ();

//Calcular pagos en cuotas sobre un monto determinado.

function product () {
    let price = parseInt(prompt("Ingrese un valor al cual se le van a aplicar 10 cuotas sin interes"));
    let result = price / 10; 
    alert("Importe cuota por 10 meses " + result);
   

}
product ();

//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

function country () {
    let cars = prompt("Ingrese el nombre del pais a donde desea viajar, al mismo se le aplicara impuestos y descuentos: Francia(precio: 30.000) Australia(precio: 60.000)");
    function calcul (passage, tax, discount){
        totalcalcul = passage * tax - discount;
        finalvalue = passage - totalcalcul;
    }
    calcul (30000,0.21,500);
    if (cars == "Francia" || cars == "francia") {
        alert ("El valor final del pasaje a Francia es " + finalvalue);
    }
    calcul (60000,0.21,500);
    if (cars == "Australia" || cars == "australia") {
        alert ("El valor final del pasaje a Australia es " + finalvalue);
    }
    
}
country ();


//Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
alert ("Ingrese la duracion de los turnos en medio dia");
function turn () { 
let turn1 = parseFloat(prompt("Turno 1"));
let turn2 = parseFloat(prompt("Turno 2"));
let turn3 = parseFloat(prompt("Turno 3"));
let result = (turn1 + turn2 + turn3) / 3; 
alert("EL promedio de espera es " + result);
   
}
turn ();

// Calcular edad promedio de personas registradas.
alert ("Se indicara la edad promedio de personas registradas");
function age () {
let turn1 = parseInt(prompt("Persona 1 favor ingrese su edad"));
let turn2 = parseInt(prompt("Persona 2 favor ingrese su edad"));
let turn3 = parseInt(prompt("Persona 3 favor ingrese su edad"));
let result = (turn1 + turn2 + turn3) /3; 
alert("EL promedio de edad es " + result);

}
age ();

// Calcular nota final de alumnos ingresados.
alert ("Se calculara la nota final ");
function note () {
let turn1 = parseInt(prompt("Ingrese su primera nota"));
let turn2 = parseInt(prompt("Ingrese su segunda nota"));
let turn3 = parseInt(prompt("Ingrese su tercera nota"));
let result = (turn1*0.3) + (turn2*0.3) + (turn3*0.4); 
alert("La nota final es " + result);

}
note ();


   