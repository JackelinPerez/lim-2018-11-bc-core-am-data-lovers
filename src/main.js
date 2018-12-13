const textfilter= document.getElementById('textfilter');
const buttonSearch= document.getElementById('buttonSearch');
const viewListFilter=document.getElementById('viewListFilter');

const prueba= document.getElementById("pokedex");
const pagina2= document.getElementById("inicio");
const vamosAPagPokedex= document.getElementById("pp2");


vamosAPagPokedex.addEventListener("click", function pag2(){
   pagina2.style.display = "none";
   prueba.classList.remove("pokedexp");
})

const orderAs = document.getElementById("orderAs");
const filterAs = document.getElementById("filterAs");

const functionfilter =(data)=>{
  let newGrill = [];
  viewListFilter.value = '';
  for (let i = 0; i < data.length; i++) {
    newGrill.push('<div class="grid-item">'
                  +'<input type="image" src="'+data[i].img +'" >'+'<br>'
                  + '<label>'+data[i].num+'</label>'+'<br>'
                  + '<label>'+data[i].name+'</label>'+'<br>'
                  + '</div>');
  }
  viewListFilter.innerHTML= newGrill.join('');
}

const functionListenFilterOrder = ()=>{
  const listenOrderAs = orderAs.options[orderAs.selectedIndex].value;
  const listenFilterAs = filterAs.options[filterAs.selectedIndex].value;
  const arrayInputFilter = data.filterData(POKEMON.pokemon,textfilter.value,parseInt(listenFilterAs[0]));

  functionfilter(data.sortData(arrayInputFilter,parseInt(listenOrderAs[0]), parseInt(listenOrderAs[1])));
  return 1;
}

const functionMain = () =>{
  functionListenFilterOrder();
  filterAs.addEventListener("change",functionListenFilterOrder);
  orderAs.addEventListener("change",functionListenFilterOrder);
  buttonSearch.addEventListener('click',functionListenFilterOrder);
}

functionMain();
