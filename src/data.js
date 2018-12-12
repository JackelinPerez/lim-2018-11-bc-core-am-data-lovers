const filterDataFunction = (data, dataFilter, condition) => {

  let arrayFilter = [];
  let newArrayFilter = [];

  switch (condition) {
    case 0:
      for (let i = 0; i < data.length; i++) {
        arrayFilter.push(data[i].num);
        if (arrayFilter[i].indexOf(dataFilter)!==-1)
          newArrayFilter.push(data[i]);
      }
      break;
    case 1:
      for (let i = 0; i < data.length; i++) {
        arrayFilter.push(data[i].name.toLowerCase());
        if (arrayFilter[i].indexOf(dataFilter.toLowerCase())!==-1)
          newArrayFilter.push(data[i]);
      }
      break;
    case 2:
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].type.length; j++) {
          arrayFilter.push(data[i].type[j].toLowerCase());
          if (arrayFilter[j].indexOf(dataFilter.toLowerCase())!==-1)
            newArrayFilter.push(data[i]);
        }
        arrayFilter = [];
      }
      break;
    case 3:
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].weaknesses.length; j++) {
          arrayFilter.push(data[i].weaknesses[j].toLowerCase());
          if (arrayFilter[j].indexOf(dataFilter.toLowerCase())!==-1)
            newArrayFilter.push(data[i]);
        }
        arrayFilter = [];
      }
      break;
    default: newArrayFilter.push('No se eligio Tipo de filtro');
  }
  return newArrayFilter;
};

const sortDataFunction = (data, sortBy, sortOrder) =>{

  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(data[i]);

  if(sortBy === 0){
    //Ordenas por ID
    newArrayFilter.sort(
      function(a,b){
        if(sortOrder === 0) return a.id - b.id;
        else return b.id - a.id;
      }
    );
  }
  else {
    //Ordenar por A-Z
    newArrayFilter.sort(
      function (a,b){
        if(sortOrder === 0){
          if (a.name > b.name) return 1 ;
          else return -1;
        }
        else {
          if (a.name < b.name) return 1 ;
          else return -1;
        }
      }
    );
  }
  return newArrayFilter ;
}

// const computeStatsFunction = (data) =>{
//   return 1;
// }
window.data = {
  filterData: filterDataFunction,
  sortData: sortDataFunction,
  //computeStats: computeStatsFunction,
}

const prueba3 = filterDataFunction(POKEMON.pokemon,'char',1);
console.log(prueba3);
console.log(sortDataFunction(prueba3, 1, 0));
