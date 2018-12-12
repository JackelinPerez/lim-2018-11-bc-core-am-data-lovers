
/*const vamosAPagSegunda= document.getElementById("pokedex");
vamosAPagSegunda.addEventListener("click", function pag2(){
   document.getElementById("inicio").style.display = "none";
   document.getElementById("pokedex").style.display = "block";
}) */

// const vamosAPagInicio= document.getElementById("pp1");
// vamosAPagInicio.addEventListener("click", function pag1(){
//    document.getElementById("inicio").style.display = "block";
//    const prInicio= document.getElementById("inicio");
//    prInicio.classList.add("pokedexp");
// })

const vamosAPagPokedex= document.getElementById("pp2");
vamosAPagPokedex.addEventListener("click", function pag2(){
   document.getElementById("inicio").style.display = "none";
   const prueba= document.getElementById("pokedex");
   prueba.classList.remove("pokedexp");
})

 



const textfilter= document.getElementById('textfilter');
const buttonSearch= document.getElementById('buttonSearch');
const viewListFilter=document.getElementById('viewListFilter');

const functionfilter =(data)=>{
  let newGrill = [];
  for (let i = 0; i < data.length; i++) {
    newGrill.push('<div class="grid-item">'
                  +'<input type="image" src="'+data[i].img +'" >'+'<br>'
                  + '<label>'+data[i].num+'</label>'+'<br>'
                  + '<label>'+data[i].name+'</label>'+'<br>'
                  + '</div>');
  }
  viewListFilter.innerHTML= newGrill.join('');
}

buttonSearch.addEventListener('click',function(){
  const prueba = data.filterData(POKEMON.pokemon,textfilter.value,1);
  functionfilter(sortDataFunction(prueba, 1, 0));
});
