const textfilter= document.getElementById('textfilter');
const buttonSearch= document.getElementById('buttonSearch');
const viewListFilter=document.getElementById('viewListFilter');

const pag1= document.getElementById("inicio");
const pag2= document.getElementById("pokedex");
const pag3= document.getElementById("descarga");
const goToPagInicio= document.getElementById("pp1");
const goToPagPokedex= document.getElementById("pp2");
const goToPagDescarga= document.getElementById("pp3");

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

const orderAs = document.getElementById("orderAs");
const filterAs = document.getElementById("filterAs");

const filterInArray = (inputArray) =>{
  // const arrayAux=[];
  // for (let index = 0; index < InputArray.length; index++) {
  //   arrayAux.push(InputArray[index]);
  // }
  // return arrayAux.join('');
  return inputArray.map(element => element).join('');
}

const filterEvolution = (arrayEvolution) =>{
  const arrayAux = [];
}
const functionfilter =(dataInput)=>{
  let newGrill = [];
  const data = [];
  viewListFilter.value = '';
  let i;
  for (i = 0; i < dataInput.length; i++)
    data.push(Object.assign({}, dataInput[i]));

  for (i = 0; i < data.length; i++) {
    newGrill.push(`
      <a href="#openmodal${i}" class="open">
        <div class="grid-item">
          <input type="image" src="${data[i].img}" class="show-img">
          <label class="show-letter top">N° ${data[i].num}</label>
          <label class="show-letter">${data[i].name}</label>
          <label>${filterInArray(data[i].type)}</label>
        </div>
      </a>
      <section id="openmodal${i}" class="modal-dialog">
      <section class="modal">
      <div class="image-form">
      <input type="image" src="${data[i].img} " class="show-datimg" >
      </div>
      <div class="info-form">
      <label><strong>${data[i].name}</strong></label><br>
      <label class="show-datletter">N° ${data[i].num}</label><br>
      <label>N° ${data[i].height}</label><br>
      <label>N° ${data[i].weight}</label><br>
      <label>${filterInArray(data[i].type)}</label><br>
      <label>${filterInArray(data[i].weaknesses)}</label><br>
      </div>
      <a href="#close" class="close">X</a>
      </section>
      </section>`
    );
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
