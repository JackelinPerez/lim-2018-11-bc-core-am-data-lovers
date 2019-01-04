let dataFSO = [];
let saveArrayObjectFilter = [];

const textfilter = document.getElementById('textfilter');
const buttonSearch = document.getElementById('buttonSearch');
const viewListFilter = document.getElementById('viewListFilter');

const orderAs = document.getElementById('orderAs');
const filterAsType = document.getElementById('type-pokemon');
const filterAsEgg = document.getElementById('eggs-pokemon');
const filterAsWeaknesses = document.getElementById('weaknesses-pokemon');

const pag1 = document.getElementById('inicio');
const pag2 = document.getElementById('pokedex');
const pag3 = document.getElementById('descarga');
const goToPagInicio = document.getElementById('pp1');
const goToPagPokedex = document.getElementById('pp2');
const goToPagDescarga = document.getElementById('pp3');


goToPagInicio.addEventListener('click', () => {
  pag1.style.display = 'block';
  pag2.classList.add('pokedexp');
  pag3.classList.add('descargap');
});

goToPagPokedex.addEventListener('click', () => {
  pag1.style.display = 'none';
  pag2.classList.remove('pokedexp');
  pag3.classList.add('descargap');
});

goToPagDescarga.addEventListener('click', () => {
  pag1.style.display = 'none';
  pag3.classList.remove('descargap');
  pag2.classList.add('pokedexp');
});

const filterInArray = (inputArray, classlabel) => {
  return inputArray.map(element => {
    return `<label class="${classlabel}">${element}</label>`;
  }).join('');
};

const filterEvolution = (data_, arrayEvolution) => {
  let stringLabelSrc = [];
  let saveObjectPreEvolution = [];
  let saveObjectNextEvolution = [];

  saveObjectPreEvolution = data.filterData(data_, arrayEvolution, 10);
  if (saveObjectPreEvolution) {
    saveObjectPreEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`<input type="image" src="${ele.img}" class="little"><br>
                             <label class="evolution">Pre Evolucion: ${ele.name}</label>`);
      });
    });
  }

  saveObjectNextEvolution = data.filterData(data_, arrayEvolution, 11);
  if (saveObjectNextEvolution) {
    saveObjectNextEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`<input type="image" src="${ele.img}" class="little"><br>
                               <label class="evolution">Next Evolucion: ${ele.name}</label>`);
      });
    });
  }

  return stringLabelSrc.join('');
};

const functionfilter = (dataInput) => {
  let newGrill = [];
  let data = [];
  viewListFilter.value = '';

  dataInput.forEach((element) => {
    data.push(Object.assign({}, element));
  });

  data.forEach((element, i) => {
    newGrill.push(`
      <a href="#openmodal${i}" class="open">
        <div class="grid-item">
          <input type="image" src="${element.img}" class="show-img" >
          <label class="number top">N° ${element.num}</label>
          <label class="letter">${element.name}</label>
          ${filterInArray(element.type, 'type')}
        </div>
      </a>
      <section id="openmodal${i}" class="modal-dialog">
        <section class="modal">
        <div class="grid-container">
          <div class="item1">
          <label class="show-datletter"><strong>${element.name}</strong></label><br><br>
          <label class="show-datletter">-N° ${element.num}</label><br>
          <label class="show-datletter">-Altura: ${element.height}</label><br>
          <label class="show-datletter">-Peso: ${element.weight}</label><br>
          <label class="show-datletter">-Tipo:
          ${filterInArray(element.type, 'show-datletter')}</label><br>
          <label class="show-datletter">-Debilidad:
          ${filterInArray(element.weaknesses, 'show-datletter')}</label><br>
          </div>
          <div class="item2">
          <input type="image" src="${element.img} " class="show-datimg" >
          <a href="#close" class="close">X</a>
          </div>
          <div class="item3">${filterEvolution(POKEMON.pokemon, element.num)}</div>
        </div>
        </section>
      </section>`
    );
  });

  viewListFilter.innerHTML = newGrill.join('');
};

const functionListenFilter = (dataFSO, listenFilterAs) => {
  return data.filterData(POKEMON.pokemon, dataFSO, listenFilterAs);
};

const functionListenOrder = (dataOrder) => {
  // filterAsType.selectedIndex = 0;
  // filterAsEgg.selectedIndex = 0;
  // filterAsWeaknesses.selectedIndex = 0;
  const listenOrderAs = orderAs.options[orderAs.selectedIndex].value;
  return data.sortData(dataOrder, parseInt(listenOrderAs[0]), parseInt(listenOrderAs[1]));
};

const functionListenFilterOrder = (dataFSO, listenFilterAs) => {
  return functionListenOrder(functionListenFilter(dataFSO, listenFilterAs));
};

const detectLetterNum = (stringData) => {
  let constNumber = 0;
  let constLeter = 0;
  stringData.split('').forEach((element) => {
    if (isNaN(element)) constLeter = 1;
    else constNumber = 1;
  });

  if (constNumber && constLeter) return -1;
  else if (constNumber) return 0;
  else return 1;
};

const functionMain = () => {
  saveArrayObjectFilter = functionListenFilterOrder(dataFSO, 0);
  functionfilter(saveArrayObjectFilter);

  orderAs.addEventListener('change', () => {
    functionfilter(functionListenOrder(saveArrayObjectFilter));
  });
  buttonSearch.addEventListener('click', () => {
    dataFSO = textfilter.value;
    saveArrayObjectFilter = functionListenFilterOrder(dataFSO, detectLetterNum(dataFSO));
    functionfilter(saveArrayObjectFilter);
  });
  filterAsType.addEventListener('change', () => {
    orderAs.selectedIndex = 0;
    filterAsEgg.selectedIndex = 0;
    filterAsWeaknesses.selectedIndex = 0;
    // textfilter.value = '';
    dataFSO = filterAsType.options[filterAsType.selectedIndex].value;
    saveArrayObjectFilter = functionListenOrder(functionListenFilter(dataFSO, 2));
    functionfilter(saveArrayObjectFilter);
  });
  filterAsWeaknesses.addEventListener('change', () => {
    orderAs.selectedIndex = 0;
    filterAsEgg.selectedIndex = 0;
    filterAsType.selectedIndex = 0;
    // textfilter.value = '';
    dataFSO = filterAsWeaknesses.options[filterAsWeaknesses.selectedIndex].value;
    saveArrayObjectFilter = functionListenOrder(functionListenFilter(dataFSO, 9));
    functionfilter(saveArrayObjectFilter);
  });
  filterAsEgg.addEventListener('change', () => {
    orderAs.selectedIndex = 0;
    filterAsType.selectedIndex = 0;
    filterAsWeaknesses.selectedIndex = 0;
    // textfilter.value = '';
    dataFSO = filterAsEgg.options[filterAsEgg.selectedIndex].value;
    saveArrayObjectFilter = functionListenOrder(functionListenFilter(dataFSO, 6));
    functionfilter(saveArrayObjectFilter);
  });
};

functionMain();
