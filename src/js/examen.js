const examenes = document.querySelectorAll(".examen");

if(examenes){
document.addEventListener("DOMContentLoaded",()=>{

	eventoExamenes();

	})
}

function eventoExamenes(){

	examenes.forEach((examen)=>{

			examen.addEventListener("click",(e)=>{
				e.preventDefault();
				console.log("click");
				window.location.href = "opciones.html";
			})


	})				


}