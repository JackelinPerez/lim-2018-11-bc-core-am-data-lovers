const textfilter = document.getElementById('textfilter');
const buttonSearch = document.getElementById('buttonSearch');
const viewListFilter = document.getElementById('viewListFilter');
const viewListStatistic = document.getElementById('viewListStatistic');
const viewPCM = document.getElementById('viewPCM');

const searchPokemon = document.getElementById('searchPokemon');
const inputCP = document.getElementById('inputCP');

const buttonResultCP = document.getElementById('buttonResultCP');
const labelResultCP = document.getElementById('labelResultCP');

const orderAs = document.getElementById('orderAs');
const filterAsType = document.getElementById('type-pokemon');
const filterAsEgg = document.getElementById('eggs-pokemon');
const filterAsWeaknesses = document.getElementById('weaknesses-pokemon');
const statistic = document.getElementById('statistic');

const pag1 = document.getElementById('inicio');
const pag2 = document.getElementById('pokedex');
const pag3 = document.getElementById('topstats');
const goToPagInicio = document.getElementById('pp1');
const goToPagPokedex = document.getElementById('pp2');
const goToPagStats = document.getElementById('pp3');

const filterInArray = (inputArray, classlabel) => {
  return inputArray.map(element => {
    return `<label class="${classlabel}">${element}</label>`;
  }).join(' ');
};

const filterEvolution = (data_, arrayEvolution) => {
  let stringLabelSrc = [];
  let saveObjectPreEvolution = [];
  let saveObjectNextEvolution = [];

  saveObjectPreEvolution = data.filterData(data_, arrayEvolution, 10);
  if (saveObjectPreEvolution) {
    saveObjectPreEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`<div class="little"><input type="image" src="${ele.img}">
                             <label class="evolution">Antes:${ele.name}</label></div>`);
      });
    });
  }

  saveObjectNextEvolution = data.filterData(data_, arrayEvolution, 11);
  if (saveObjectNextEvolution) {
    saveObjectNextEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`<div class="little"><input type="image" src="${ele.img}">
                               <label class="evolution">Después:${ele.name}</label></div>`);
      });
    });
  }

  return stringLabelSrc.join('');
};

const functionfilter = (dataInput, containerInput) => {
  let newGrill = [];
  let data = [];
  containerInput.value = '';

  dataInput.forEach((element) => {
    data.push(Object.assign({}, element));
  });

  data.forEach((element, i) => {
    newGrill.push(`
      <a href="#openmodal${i}" class="open">
        <div class="grid-item">
          <input type="image" src="${element.img}" class="show-img" >
          <label class="number">N° ${element.num}</label>
          <label class="letter">${element.name}</label>
          ${filterInArray(element.type, 'number')}
        </div>
      </a>
      <section id="openmodal${i}" class="modal-dialog">
        <section class="modal">
        <div class="grid-container">
          <div class="item1">
          <label class="show-datletter"><strong>${element.name}</strong></label><br>
          <label class="show-datletter">N° ${element.num}</label>
          <a href="#close" class="close">X</a>
          </div>
          <div class="item2">
          <label class="show-datletter">-Altura: ${element.height}</label>
          <label class="show-datletter">Peso: ${element.weight}</label><br>
          <label class="show-datletter">-Tipo:<br>
          ${filterInArray(element.type, 'show-datletter')}</label><br>
          <label class="show-datletter">-Debilidad:<br>
          ${filterInArray(element.weaknesses, 'show-datletter')}</label>
          </div>
          <div class="item5">
          <input type="image" src="${element.img}">
          </div>
          <div class= "item3">${filterEvolution(POKEMON.pokemon, element.num)}</div>
        </div>
        </section>
      </section>`
    );
  });
  containerInput.innerHTML = newGrill.join('');
};

const functionListenFilter = (dataFSO, listenFilterAs) => {
  return data.filterData(POKEMON.pokemon, dataFSO, listenFilterAs);
};

const functionListenOrder = (dataOrder) => {
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
  goToPagInicio.addEventListener('click', () => {
    pag1.style.display = 'block';
    pag2.classList.add('pokedexp');
    pag3.classList.add('statsp');
  });

  goToPagPokedex.addEventListener('click', () => {
    pag1.style.display = 'none';
    pag2.classList.remove('pokedexp');
    pag3.classList.add('statsp');

    orderAs.selectedIndex = 0;
    filterAsType.selectedIndex = 0;
    filterAsWeaknesses.selectedIndex = 0;
    filterAsEgg.selectedIndex = 0;

    let dataFSO = [];
    let saveArrayObjectFilter = [];

    saveArrayObjectFilter = functionListenFilterOrder(dataFSO, 0);
    functionfilter(saveArrayObjectFilter, viewListFilter);

    orderAs.addEventListener('change', () => {
      functionfilter(functionListenOrder(saveArrayObjectFilter), viewListFilter);
    });
    buttonSearch.addEventListener('click', () => {
      dataFSO = textfilter.value;
      saveArrayObjectFilter = functionListenFilterOrder(dataFSO, detectLetterNum(dataFSO));
      functionfilter(saveArrayObjectFilter, viewListFilter);
      if (saveArrayObjectFilter.length === 0)
        alert('No se encontro pokemon con esas caracteristicas \nPorfavor Intentelo de nuevo!');
    });
    filterAsType.addEventListener('change', () => {
      orderAs.selectedIndex = 0;
      filterAsEgg.selectedIndex = 0;
      filterAsWeaknesses.selectedIndex = 0;
      textfilter.value = '';
      dataFSO = filterAsType.options[filterAsType.selectedIndex].value;
      saveArrayObjectFilter = functionListenOrder(functionListenFilter(dataFSO, 2));
      functionfilter(saveArrayObjectFilter, viewListFilter);
    });
    filterAsWeaknesses.addEventListener('change', () => {
      orderAs.selectedIndex = 0;
      filterAsEgg.selectedIndex = 0;
      filterAsType.selectedIndex = 0;
      textfilter.value = '';
      dataFSO = filterAsWeaknesses.options[filterAsWeaknesses.selectedIndex].value;
      saveArrayObjectFilter = functionListenOrder(functionListenFilter(dataFSO, 9));
      functionfilter(saveArrayObjectFilter, viewListFilter);
    });
    filterAsEgg.addEventListener('change', () => {
      orderAs.selectedIndex = 0;
      filterAsType.selectedIndex = 0;
      filterAsWeaknesses.selectedIndex = 0;
      textfilter.value = '';
      dataFSO = filterAsEgg.options[filterAsEgg.selectedIndex].value;
      saveArrayObjectFilter = functionListenOrder(functionListenFilter(dataFSO, 6));
      functionfilter(saveArrayObjectFilter, viewListFilter);
    });
  });

  goToPagStats.addEventListener('click', () => {
    pag1.style.display = 'none';
    pag3.classList.remove('statsp');
    pag2.classList.add('pokedexp');

    statistic.addEventListener('change', () => {
      const listenOptionStatistic = statistic.options[statistic.selectedIndex].value;
      functionfilter(data.sortData(data.computeStats(POKEMON.pokemon, parseInt(listenOptionStatistic)), 0, 0), viewListStatistic);
    });

    buttonResultCP.addEventListener('click', () => {
      let outputCPM = [];
      const saveNamePoke = functionListenFilter(searchPokemon.value, detectLetterNum(searchPokemon.value));
      if (saveNamePoke.length !== 0) {
        const objCPM = data.computeStats(POKEMON.pokemon, 4,
          saveNamePoke[0].num, parseInt(inputCP.value));
        if (objCPM) {
          outputCPM.push(`<a href="#openmodal" class="open">
                          <div class="grid-item">
                            <input type="image" src="${objCPM.img}" class="show-img" >
                            <label class="number top">N° ${objCPM.num}</label>
                            <label class="letter">${objCPM.name}</label>
                          </div>
                          <label>Su CPM será: ${objCPM.CPProm}</label>
                        </a>`);
          viewPCM.innerHTML = outputCPM.join('');
        } else labelResultCP.innerHTML = 'Tu pokemon llego al limite en CP';
      } else {
        alert('No se encontro pokemon con esas caracteristicas');
      }
    });
  });
};

functionMain();
