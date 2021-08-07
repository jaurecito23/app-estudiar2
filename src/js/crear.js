
 	const form = document.querySelector(".formulario-crear form");
 	if(form){

	document.addEventListener("DOMContentLoaded", ()=>{


		botonSiguienteForm();


	})	
}



const datos = document.querySelector(".datos");
const pregunta = document.querySelector(".pregunta");
const texto = document.querySelector(".texto");
const opcional = document.querySelector(".opciones");
const file = document.querySelector(".file");
const btnSiguiente = document.querySelectorAll(".btn-siguiente");
const btnFinales = document.querySelector(".btn-final");
let paginaActual = parseInt(form.attributes["data-pag"].value);
let opcionDeRespuesta = "";


function botonSiguienteForm(){

btnSiguiente.forEach((boton)=>{


	boton.addEventListener("click",(e)=>{
	e.preventDefault();
		
	switch (paginaActual){
		case 1:
			datos.classList.add("hidden");
			pregunta.classList.remove("hidden");
			paginaActual = 2; 	
		break;
		case 2:
			pregunta.classList.add("hidden");
			tipoDeRespuesta();
			paginaActual = 3;
		break;
		case 3:
			sigSegunOpcionResp(opcionDeRespuesta);
			btnFinales.classList.remove("hidden");
			paginaActual = 4;
		break;
		case 4:
			btnFinales.classList.add("hidden");
			pregunta.classList.remove("hidden");
			paginaActual = 2;
		break;
			}
		
		});
	});

}

function tipoDeRespuesta(){
	
	const opciones = document.querySelectorAll("[name='tipo-de-respuesta']");

	opciones.forEach((opcion)=>{


			if(opcion.checked){

				const valorOpcion = opcion.value;
				opcionDeRespuesta = valorOpcion;
				switch (valorOpcion){
					case "opcional":
						opcional.classList.remove("hidden");
					break;
					case "texto":
						texto.classList.remove("hidden");
					break;
					case "grafica":
			        	file.classList.remove("hidden");
					break;
					case "audio":
						file.classList.remove("hidden");
					break;



				}


			}

	})
	
}

function sigSegunOpcionResp(opc){

	switch (opc){

					case "opcional":
						opcional.classList.add("hidden");
					break;
					case "texto":
						texto.classList.add("hidden");
					break;
					case "grafica":
			        	file.classList.add("hidden");
					break;
					case "audio":
						file.classList.add("hidden");
					break;


	}


}
