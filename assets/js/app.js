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
  //var usuario=prompt("INGRESA TU NOMBRE: ");
  //document.getElementById("usuario").innerHTML="Hola coder "+usuario;
  var mostarOcultar = function(divtexte) {
  	var divtext = document.getElementById(divtexte);

  	if (divtext.style.display == "block" ) {
  		divtext.style.display = "none";
  	} else{
  		divtext.style.display = "block";

  	}
  }

  var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];
