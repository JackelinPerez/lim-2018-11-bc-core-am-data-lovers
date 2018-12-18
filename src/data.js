const filterDataFunction = (data, dataFilter, condition) => {
  let dataCopy = [];
  let arrayFilter = [];
  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  if(dataFilter.length === 0)
    return dataCopy;

  switch (condition) {
    case 0:
      // for (let i = 0; i < dataCopy.length; i++) {
      //   arrayFilter.push(dataCopy[i].num);
      //   if (arrayFilter[i].indexOf(dataFilter)!==-1)
      //     newArrayFilter.push(dataCopy[i]);
      // }
      newArrayFilter = dataCopy.filter(
      element => element.num.indexOf(dataFilter)>-1);
      break;
    case 1:
      // for (let i = 0; i < dataCopy.length; i++) {
      //   arrayFilter.push(dataCopy[i].name.toLowerCase());
      //   if (arrayFilter[i].indexOf(dataFilter.toLowerCase())!==-1)
      //     newArrayFilter.push(dataCopy[i]);
      // }
      newArrayFilter = dataCopy.filter(
      element => element.name.toLowerCase().indexOf(dataFilter.toLowerCase())>-1);
      break;
    case 2:
      // for (let i = 0; i < dataCopy.length; i++) {
      //   for (let j = 0; j < dataCopy[i].type.length; j++) {
      //     arrayFilter.push(dataCopy[i].type[j].toLowerCase());
      //     if (arrayFilter[j].indexOf(dataFilter.toLowerCase())!==-1)
      //       newArrayFilter.push(dataCopy[i]);
      //   }
      //   arrayFilter = [];
      // }

      //newArrayFilter = dataCopy.filter(function(element){
        // for (let i = 0; i < element.type.length; i++) {
        //   newDataFilter = element.type[i].toLowerCase().indexOf(dataFilter.toLowerCase());
        //   if(newDataFilter > -1) return newDataFilter>-1;
        // };

        //let newDataFilter;
        // element.type.forEach(function(elementoHijo){
        //   newDataFilter = elementoHijo.toLowerCase().indexOf(dataFilter.toLowerCase());
        // });
        // if(newDataFilter > -1 ) return element;

        // let newDataFilter= element.type.filter(function(ele){
        //   return ele.toLowerCase().indexOf(dataFilter.toLowerCase())>-1;
        // })
        // console.log('Longitud= '+newDataFilter.length);
        // return newDataFilter.length >0;
      //});

      newArrayFilter = dataCopy.filter(
      element => element.type.filter(ele => ele.toLowerCase().indexOf(dataFilter.toLowerCase())>-1).length>0);
      break;
    case 3:
      // for (let i = 0; i < dataCopy.length; i++) {
      //   for (let j = 0; j < dataCopy[i].weaknesses.length; j++) {
      //     arrayFilter.push(dataCopy[i].weaknesses[j].toLowerCase());
      //     if (arrayFilter[j].indexOf(dataFilter.toLowerCase())!==-1)
      //       newArrayFilter.push(dataCopy[i]);
      //   }
      //   arrayFilter = [];
      // }
      newArrayFilter = dataCopy.filter(
      element => element.weaknesses.filter(ele => ele.toLowerCase().indexOf(dataFilter.toLowerCase())>-1).length>0);
      break;
    default: alert ('No existe opcion');
  }
  return newArrayFilter;
};

const sortDataFunction = (data, sortBy, sortOrder) =>{

  let newArrayFilter = [];

  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({},data[i]));

  if(sortBy === 0){
    //Ordenas por ID
    newArrayFilter.sort((a,b) => {
        if(sortOrder === 0) return a.id - b.id;
        else return b.id - a.id;
    });
  }
  else {
    //Ordenar por A-Z
    newArrayFilter.sort((a,b) => {
        if(sortOrder === 0){
          if (a.name > b.name) return 1 ;
          else return -1;
        }
        else {
          if (a.name < b.name) return 1 ;
          else return -1;
        }
    });
  }
  return newArrayFilter ;
}

window.data = {
  filterData: filterDataFunction,
  sortData: sortDataFunction,
  //computeStats: computeStatsFunction,
}
