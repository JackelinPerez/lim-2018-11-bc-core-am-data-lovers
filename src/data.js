const filterNum = (data, dataFilter) => {
  let dataCopy = [];
  let newArrayFilter = [];
  for (let i = 0; i < data.length; i++) dataCopy.push(Object.assign({}, data[i]));
  newArrayFilter= data.filter(
  element => element.num.indexOf(dataFilter)>-1);
  return newArrayFilter;
}
const filterDataFunction = (data, dataFilter, condition) => {
  let dataCopy = [];
  let newArrayFilter = [];
  let saveObject = [];

  for (let i = 0; i < data.length; i++)
    dataCopy.push(Object.assign({}, data[i]));

  if(dataFilter.length === 0)
    return dataCopy;

  switch (condition) {
    case 0:
      newArrayFilter = filterNum(data, dataFilter);
      break;
    case 1:
      newArrayFilter = dataCopy.filter(
      element => element.name.toLowerCase().indexOf(dataFilter.toLowerCase())>-1);
      break;
    case 2:
      newArrayFilter = dataCopy.filter(
      element => element.type.filter(ele => ele.toLowerCase().indexOf(dataFilter.toLowerCase())>-1).length>0);
      break;
    case 3:
      newArrayFilter = dataCopy.filter(
      element => element.height.toLowerCase().indexOf(dataFilter.toLowerCase())>-1);
      break;
    case 4:
      newArrayFilter = dataCopy.filter(
      element => element.weight.toLowerCase().indexOf(dataFilter.toLowerCase())>-1);
      break;
    case 5:
      newArrayFilter = dataCopy.filter(
      element => element.candy.toLowerCase().indexOf(dataFilter.toLowerCase())>-1);
      break;
    case 6:
      newArrayFilter = dataCopy.filter(
      element => element.egg.toLowerCase().indexOf(dataFilter.toLowerCase())>-1);
      break;
    case 7:
      newArrayFilter = dataCopy.filter(
      element => element.avg_spawns===parseInt(dataFilter));
      break;
    case 8:
      newArrayFilter = dataCopy.filter(
      element => element.spawn_time.indexOf(dataFilter)>-1);
      break;
    case 9:
      newArrayFilter = dataCopy.filter(
      element => element.weaknesses.filter(ele => ele.toLowerCase().indexOf(dataFilter.toLowerCase())>-1).length>0);
      break;
    case 10:
      saveObject = filterNum(dataCopy,dataFilter);
      newArrayFilter=Object.keys(saveObject[0]).map(element => {
        if(element==='prev_evolution'){
          //[object,object] =>object={name:---- ,img:----- }
          return (saveObject[0].prev_evolution.map(element => {
            const objectNew = {};
            objectNew.name = filterNum(dataCopy,element.num)[0].name;
            objectNew.img = filterNum(dataCopy,element.num)[0].img;
            return objectNew;
          }));
        }
      }).filter(element => element);
      return newArrayFilter;
      break;
    case 11:
      saveObject = filterNum(dataCopy,dataFilter);
      newArrayFilter=Object.keys(saveObject[0]).map(element => {
        if(element==='next_evolution'){
          //[object,object] =>object={name:---- ,img:----- }
          return (saveObject[0].next_evolution.map(element => {
            const objectNew = {};
            objectNew.name = filterNum(dataCopy,element.num)[0].name;
            objectNew.img = filterNum(dataCopy,element.num)[0].img;
            return objectNew;
          }));
        }
      }).filter(element => element);
      return newArrayFilter;
      break;
    case 12:
      saveObject = filterNum(dataCopy,dataFilter);
      Object.keys(saveObject[0]).map(element => {
        if(element==='candy_count') newArrayFilter.push(saveObject[0]);
        return 1;
      })
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
