
console.log("Sistema EBAC de registro de alumnos");

var registro = [
    {nombre: "Jorge Contreras", zonaResidencia: "Jalisco",edad: 24, nombrePrograma: "Desarrollador Front End de cero a pro", email: "jacdr@gmail.com", seguroSocial: true, numeroTelefono: 3330000000},
    {nombre: "Brenda Gonzalez", zonaResidencia: "Monterrey",edad: 28, nombrePrograma: "Desarrollador Back End Python de cero a pro", email: "bmgv@gmail.com", seguroSocial: false, numeroTelefono: 3334000000},
 ];  

 //registro de alumnos

 function agregarAlumno(){

    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var edad = prompt("Ingresar edad del alumno");
    var nombrePrograma = prompt("Ingresar el programa a estudiar");
    var email = prompt("Ingresar el correo electronico del alumno");
    var seguroSocialSinProcesar = prompt("¿Cuenta con numero de seguro socal? (S/N)")
    var numeroTelefono = prompt("Ingresar numero telefónico")
    
    var seguroSocialProcesado

    if(seguroSocialSinProcesar == "s"){
        seguroSocialProcesado = true
    };
    if(seguroSocialSinProcesar == "n"){
        seguroSocialProcesado = false
    }; 

    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email, seguroSocial: seguroSocialProcesado, numeroTelefono: numeroTelefono};

    registro.push(nuevoAlumno);

 }
 //funcion agregar nuevos alumnos

function consultarRegistros(){
    for(var i = 0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Zona Residencia: " + registro[i].zonaResidencia);
        console.log("Edad: " + registro[i].edad);
        console.log("Nombre Programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
        console.log("Seguro Social: " + registro[i].seguroSocial);
        console.log("Numero Telefónico: " + registro[i].numeroTelefono);
        console.log("")
     };
}

//funcion consulta registros de alumnos


function eliminarAlumno(){
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
};

//funcion eliminar alumno

do{

var opcion = prompt("Seleccione una opcion \n1. Agregar alumno \n2. Mostrar registro \n3. Eliminar registro \n4 Salir");

if (opcion === "1"){
    agregarAlumno();
 } else if (opcion === "2"){
    consultarRegistros();
 } else if (opcion === "3"){
    eliminarAlumno();
 } else if (opcion === "4"){
    alert("Salir");
    break;
 } else {
    alert("Opcion invalida ingrese otra respuesta porfavor");
 }

  var continuar = prompt("¿Desea realizar otra acción? (S/N)");

 } while(continuar === "s");


 //Menu de opciones del sistema