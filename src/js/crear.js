
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
const opciones = document.querySelectorAll("[name='tipo-de-respuesta']");
let paginaActual = "";
if(form){
 paginaActual = parseInt(form.attributes["data-pag"].value);
}
let opcionDeRespuesta = "";


function botonSiguienteForm(){

btnSiguiente.forEach((boton)=>{


	boton.addEventListener("click",(e)=>{
	e.preventDefault();
		
		datosCompletos = mostrarSiguiente(paginaActual);
		if(datosCompletos){

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
		
		 }

		});
	});

}

function tipoDeRespuesta(){
	
	

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



// Mostrar el boton siguiente

const nombreExamen = document.querySelector("#nombre-examen");
const descripcionExamen = document.querySelector("#descripcion-examen");
const temaExamen = document.querySelector("#tema-examen");	
const inputPregunta = document.querySelector("#input-pregunta");

	let errores = {};
function mostrarSiguiente(paginaActual){

	

switch (paginaActual){
		case 1:
			if(nombreExamen.value == ""){	
				errores.nombre = "Debes Añadir un Nombre";
			}

			if(descripcionExamen.value === ""){
				errores.descripcion = "Debes Añadir Una Descripción";
			}
			if(temaExamen.value === "--Selecciona un Tema--"){
				errores.tema = "Debes Seleccionar Una Tematica";
			}
		break;
		case 2:
				if(inputPregunta.value === ""){

					errores.pregunta = "Debe Ingresar Una Pregunta";

				}else if(errores.pregunta){

					delete errores.pregunta;

				}		

				let existeOpcion = false;
				
				opciones.forEach((opcion)=>{
					
					if(opcion.checked === true){

						existeOpcion = true;
						delete errores.opcion;

					}

					if(existeOpcion === false){


						errores.opcion = "Debe Seleccionar Una Opcion";

					}

				})

		break;
		case 3:
				
			verificarRespuestas(opcionDeRespuesta);
				
		break;
		case 4:
			
		break;
		}
		
		

		if(Object.keys(errores).length === 0){

			return true;

		}else{

			divAlertas = document.createElement("DIV");
			
			divAlertas.classList.add("alertas")
			for(error in errores){

				crearAlerta(errores[error],divAlertas);

			}		

			divAlertas.innerHTML = divAlertas.innerHTML + "<button type='' id='btn-aceptar'>Aceptar</button>";
			form.appendChild(divAlertas);

			eventoAceptar(divAlertas);
			return false;
		}

		
}


function crearAlerta(mensaje,divAlertas = ""){

	alerta = document.createElement("P");
	alerta.textContent = mensaje;
	divAlertas.appendChild(alerta);
	
}

function eventoAceptar(div){

	const btnAceptar = document.querySelector("#btn-aceptar");
	btnAceptar.addEventListener("click",()=>{


		form.removeChild(div);

	})

}



// funcion para verifivar que alla ingresado las respuestas

const respuestaTexto = document.querySelector("#respuesta-texto");
const respuestasOpciones = document.querySelectorAll(".respuesta-opcion");
const respuestaGrafica = document.querySelector("#input-file");


function verificarRespuestas(opcion){

	switch (opcion){

		case "texto":
			if(respuestaTexto.value === ""){
				errores.respuesta = "Debe Añadir una Respuesta";
			}else if(errores.respuesta){

				delete errores.respuesta;

			}
		break;
		case "opcional":

			respuestasOpciones.forEach((opcion)=>{

				if(opcion.value === ""){
					errores.opciones = "Debes Completar Todas las Respuestas";
					return;
				}else if(errores.opciones){

					delete errores.opciones;

				}


			})
		break;
		case "grafica":

			if(respuestaGrafica.value === ""){
			errores.archivo = "Debes Agregar Un Archivo";
			}else if(errores.archivo){
				delete errores.archivo;
			}
		break; 
		case "audio":
			if(respuestaGrafica.value === ""){
			errores.archivo = "Debes Agregar Un Archivo";
			}else if(errores.archivo){
				delete errores.archivo;
			}
		break;
	}

}
