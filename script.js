function alerta(){ // Funsion del Boton de Descarga
  var mensaje;
  var opcion = confirm("¿Desea descargar el archivo?");
  if (opcion == true) {
      mensaje = "";
} else {
    mensaje = "";
}
document.getElementById("btn").innerHTML = mensaje;
}
//esta funsion es para los botones de GET
function over(element) {
  element.style.backgroundColor = "#7952b3";    
}
  
function out(element) {
  element.style.backgroundColor = "white";   
}