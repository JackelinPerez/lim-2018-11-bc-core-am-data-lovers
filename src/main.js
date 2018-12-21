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
  return inputArray.map(element => {
    return `<label>${element}</label><br>`;
  }).join('');
}

const filterEvolution = (data_, arrayEvolution) =>{
  let stringLabelSrc=[];
  let saveObjectPreEvolution = [];
  let saveObjectNextEvolution = [];

  saveObjectPreEvolution = data.filterData(data_,arrayEvolution,10);
  if(saveObjectPreEvolution) {
    saveObjectPreEvolution.map(element => {
      element.map(ele =>{
        stringLabelSrc.push(`<input type="image" src="${ele.img}" class="show-img"><br>
                             <label>Pre Evolucion: ${ele.name}</label><br>`);
      });
    });
  }
  saveObjectNextEvolution = data.filterData(data_,arrayEvolution,11);
  if(saveObjectNextEvolution) {
    saveObjectNextEvolution.map(element =>{
      element.map(ele => {
        stringLabelSrc.push(`<input type="image" src="${ele.img}" class="show-img"><br>
                               <label>Next Evolucion: ${ele.name}</label><br>`);
      });
    });
  }
  return stringLabelSrc.join('');
}

const functionfilter =(dataInput)=>{
  let newGrill = [];
  let data = [];
  viewListFilter.value = '';

  for (let i = 0; i < dataInput.length; i++)
    data.push(Object.assign({}, dataInput[i]));

  for (let i = 0; i < data.length; i++) {
    newGrill.push(`
      <a href="#openmodal${i}" class="open">
        <div class="grid-item">
          <input type="image" src="${data[i].img}" class="show-img" >
          <label class="number top">N° ${data[i].num}</label>
          <label class="letter">${data[i].name}</label>
          ${filterInArray(data[i].type, 'type')}
        </div>
      </a>
      <section id="openmodal${i}" class="modal-dialog">
        <section class="modal">

        <div class="grid-container">
          <div class="item1">
          <label class="show-datletter"><strong>${data[i].name}</strong></label><br><br>
          <label class="show-datletter">-N° ${data[i].num}</label><br>
          <label class="show-datletter">-Altura: ${data[i].height}</label><br>
          <label class="show-datletter">-Peso: ${data[i].weight}</label><br>
          <label class="show-datletter">-Tipo:</label><br> ${filterInArray(data[i].type, 'show-datletter')}<br>
          <label class="show-datletter">-Debilidad:</label><br> ${filterInArray(data[i].weaknesses, 'show-datletter')}
          </div>
          <div class="item2">
          <input type="image" src="${data[i].img} " class="show-datimg" >
          <a href="#close" class="close">X</a>
          </div>
          <div class="item3">${filterEvolution(POKEMON.pokemon, data[i].num)}</div>
        </div>

        </section>
      </section>`
    );
  }
  viewListFilter.innerHTML= newGrill.join('');
}

const functionListenFilterOrder = ()=>{
  const listenOrderAs = orderAs.options[orderAs.selectedIndex].value;
  const listenFilterAs = filterAs.options[filterAs.selectedIndex].value;
  const arrayInputFilter = data.filterData(POKEMON.pokemon,textfilter.value,parseInt(listenFilterAs));

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
