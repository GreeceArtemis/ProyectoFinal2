function myFunction1() {
	document.getElementById("myDropdown").classList.toggle("show");
}
function formulario1(){
  var opcion1=document.getElementsByClassName("funcion").value;
 alert(opcion1);
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
  var usuario=prompt("INGRESA TU NOMBRE: ");
  document.getElementById("usuario").innerHTML="Hola coder "+usuario;
  var mostarOcultar = function(divtexte) {
  	var divtext = document.getElementById(divtexte);

  	if (divtext.style.display == "block" ) {
  		divtext.style.display = "none";
  	} else{
  		divtext.style.display = "block";

  	}
  }
