const vamosAPagSegunda= document.getElementById("inicio");
vamosAPagSegunda.addEventListener("click", function pag2(){
   document.getElementById("primera-Pag").style.display = "none";
   document.getElementById("segunda-Pag").style.display = "block";
})
const vamosAPagTercera= document.getElementById("pokedex");
vamosAPagTercera.addEventListener("click", function pag3(){
   document.getElementById("primera-Pag").style.display = "none";
   document.getElementById("tercera-Pag").style.display = "block";
})
const vamosAPag1= document.getElementById("descarga");
vamosAPag1.addEventListener("click", function pag1(){
   document.getElementById("primera-Pag").style.display = "block";
   document.getElementById("segunda-Pag").style.display = "none";
})
