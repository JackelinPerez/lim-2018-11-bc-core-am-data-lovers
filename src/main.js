const textfilter= document.getElementById('textfilter');
const buttonSearch= document.getElementById('buttonSearch');
const viewListFilter=document.getElementById('viewListFilter');

const pag1= document.getElementById("inicio");
const pag2= document.getElementById("pokedex");
const pag3= document.getElementById("descarga");
const goToPagInicio= document.getElementById("pp1");
const goToPagPokedex= document.getElementById("pp2");
const goToPagDescarga= document.getElementById("pp3");


let listenOption='';
let arrayListenOption=[];


goToPagInicio.addEventListener("click", function(){
 pag1.style.display = "block";
  pag2.classList.add("pokedexp");
  pag3.classList.add("descargap");
})

goToPagPokedex.addEventListener("click", function(){
   pag1.style.display = "none";
   pag2.classList.remove("pokedexp");
   pag3.classList.add("descargap");
})

goToPagDescarga.addEventListener("click", function(){
  pag1.style.display = "none";
  pag3.classList.remove("descargap");
  pag2.classList.add("pokedexp");
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




const x = document.getElementById("my-board");
function functBoard(){
  if (x.className === "board") {
    x.className += " responsive";
  } else {
    x.className = "board";
  }
}
