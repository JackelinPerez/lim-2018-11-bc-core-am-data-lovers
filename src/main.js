const textfilter= document.getElementById('textfilter');
const buttonSearch= document.getElementById('buttonSearch');
const viewListFilter=document.getElementById('viewListFilter');
// const vamosAPagInicio= document.getElementById("pp1");
// vamosAPagInicio.addEventListener("click", function pag1(){
//    document.getElementById("inicio").style.display = "block";
//    const prInicio= document.getElementById("inicio");
//    prInicio.classList.add("pokedexp");
// })
const prueba= document.getElementById("pokedex");
const pagina2= document.getElementById("inicio");
const vamosAPagPokedex= document.getElementById("pp2");

let listenOption='';
let arrayListenOption=[];
vamosAPagPokedex.addEventListener("click", function pag2(){
   pagina2.style.display = "none";
   prueba.classList.remove("pokedexp");
})

const secondMenu= document.getElementById('second-menu');

secondMenu.addEventListener("change",function(){
  arrayListenOption=[];
  listenOption=secondMenu.options[secondMenu.selectedIndex].value;
  arrayListenOption[0]=parseInt(listenOption[0]);
  arrayListenOption[1]=parseInt(listenOption[1]);

  const prueba = filterDataFunction(POKEMON.pokemon,textfilter.value,1);
  functionfilter(sortDataFunction(prueba,arrayListenOption[0], arrayListenOption[1]));
});



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
  const prueba = filterDataFunction(POKEMON.pokemon,textfilter.value,1);
  if(arrayListenOption.length===0){
    listenOption=secondMenu.options[secondMenu.selectedIndex].value;
    arrayListenOption[0]=parseInt(listenOption[0]);
    arrayListenOption[1]=parseInt(listenOption[1]);
  }
  functionfilter(sortDataFunction(prueba,arrayListenOption[0], arrayListenOption[1]));
});