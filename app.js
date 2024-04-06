document.addEventListener("DOMContentLoaded", function(){



console.log("Sistema EBAC de registro de alumnos");

//Se delaclaran las variables, para las opciones del sistema

var form = document.getElementById("registration-form");
var addButton = document.getElementById("add-button");
var consultButton = document.getElementById("consult-button");
var deleteButton = document.getElementById("delete-button");


form.addEventListener("submit",agregarAlumno);

form.style.display = "none";

addButton.addEventListener("click",function(){
   form.style.display = "flex"; 
});


consultButton.addEventListener("click", consultarRegistros);

deleteButton.addEventListener("click", eliminarAlumno)


 //registro de alumnos
var registro = [
    {nombre: "Jorge Contreras", zonaResidencia: "Jalisco",edad: 24, nombrePrograma: "Desarrollador Front End de cero a pro", email: "jacdr@gmail.com", seguroSocial: true, numeroTelefono: 3330000000},
    {nombre: "Brenda Gonzalez", zonaResidencia: "Monterrey",edad: 28, nombrePrograma: "Desarrollador Back End Python de cero a pro", email: "bmgv@gmail.com", seguroSocial: false, numeroTelefono: 3334000000},
 ];  

 //funcion agregar nuevos alumnos

 function agregarAlumno(event){

   event.preventDefault();

    var nombre = document.getElementById("name-input").value;
    var zonaResidencia = document.getElementById("address-input").value;
    var edad = document.getElementById("age-input").value;
    var nombrePrograma = document.getElementById("course-input").value;
    var email = document.getElementById("email-input").value;
    /*var seguroSocialSinProcesar = document.getElementById("checkbox-input").value;*/
    var numeroTelefono = document.getElementById("number-input").value;
    
    var seguroSocialProcesado

    /*if(seguroSocialSinProcesar === "checkbox-input.cheked"){
        seguroSocialProcesado = true
    }else{
        seguroSocialProcesado = false
    };
   */
   

    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email, seguroSocial: seguroSocialProcesado, numeroTelefono: numeroTelefono};

    registro.push(nuevoAlumno);


    var nombre = document.getElementById("name-input").value = "";
    var zonaResidencia = document.getElementById("address-input").value = "";
    var edad = document.getElementById("age-input").value = "";
    var nombrePrograma = document.getElementById("course-input").value = "";
    var email = document.getElementById("email-input").value = "";
    /*var seguroSocialSinProcesar = document.getElementById("checkbox-input").value = "";*/
    var numeroTelefono = document.getElementById("number-input").value = "";

 // Una vez que se envia el nuevo registro, se quitan de pantalla los inputs del registro

    form.style.display = "none";

 }

 //funcion consulta registros de alumnos

function consultarRegistros(){
   /*
    for(var i = 0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Zona Residencia: " + registro[i].zonaResidencia);
        console.log("Edad: " + registro[i].edad);
        console.log("Nombre Programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
        console.log("Seguro Social: " + registro[i].seguroSocial);
        console.log("Numero Telefónico: " + registro[i].numeroTelefono);
        console.log("")
     };*/
     console.table(registro);
}

//funcion eliminar alumno

function eliminarAlumno(){
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
};



/*do{

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

*/

})