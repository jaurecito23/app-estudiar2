document.addEventListener("DOMContentLoaded",()=>{

  observerNavegacion();
  menuNav();
})


const header = document.querySelector("#header");
const chiste = document.querySelector(".chiste");
const menu = document.querySelector("#btn-menu");
const navegacion = document.querySelector(".nav");

function observerNavegacion(){

const observer = new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting){
      header.classList.add("fijo");
    }else{
        header.classList.remove("fijo");
    }
})
observer.observe(chiste);
}

function menuNav(){

  menu.addEventListener("click",()=>{

      navegacion.classList.toggle("nav-celular");
      console.log(navegacion);

  })

}
