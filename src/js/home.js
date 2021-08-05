document.addEventListener("DOMContentLoaded",function(){

  flechaScroll();//Home
  parpadear(flecha,"rojo-oscuro");//Home
  parpadear(nombreFooter,"blanco");//Home
  activarLaRata();//Home
  escribirTexto(nombre,["J","JA","JAU","JAUR","JAURE"],"agrandar");//Home
})

const nombre = document.querySelector(".nombre");
const nombreFooter = document.querySelector(".nombre-footer")
const flecha = document.querySelector("#flecha");
function flechaScroll(){

      flecha.addEventListener("click",(e)=>{
        e.preventDefault();

        const seccion = document.querySelector(e.target.parentElement.attributes.href.value);
        console.log(seccion);

        seccion.scrollIntoView({

             behavior: "smooth",
             //behavior: "",
         });

      });


 }

function parpadear(elemento,clase){

  setInterval(
    function(){

      elemento.classList.add(clase);
      setTimeout(

        function(){

          elemento.classList.remove(clase);

        },1000

      );
    },2000);
}


function escribirTexto(elemento,arreglo,clase = ""){

  i = 0;
  cantidadDeLetras = arreglo.length - 1;
  yapaso = false;
  setInterval(

    function(){

      elemento.textContent = arreglo[i]

      if(i < cantidadDeLetras){

        i++;

      }else if(yapaso === false){
        if(clase !== ""){

          elemento.classList.add(clase);

        }

      yapaso = true;

    }else{

      if(clase !== ""){

        elemento.classList.remove(clase);

          }

        i = 0;
        yapaso = false;
      }
    },500
  );

}


const rata = document.querySelector("#rata");
const divRata = document.querySelector(".rata-div");
const queso = document.querySelector("#queso");

function laRataComilona(){



console.log(rata.style.left);

let fin = rata.parentElement.clientWidth
fin -= 70;
let posicion = 0;



let intervalo = setInterval(

  function(){
    let posicionRata = posicion + "px";

    if(posicion >= fin){

      seComioelQueso();
      clearInterval(intervalo);
    }else{
    rata.style.left = posicionRata;
    posicion += 4;
  }
},40

)

}



function seComioelQueso(){

  rata.classList.add("hidden");
  queso.classList.add("hidden");



  divRata.innerHTML = "<p>La <span>Rata Comilona</span> se ha comido el queso</p>";

}


function activarLaRata(){


  const observer = new IntersectionObserver(function(entries){

    if(entries[0].isIntersecting){

      laRataComilona();
    }
  })

observer.observe(rata);
}
