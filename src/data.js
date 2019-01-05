const filterNum = (data, dataFilter) => {
  let dataCopy = [];
  let newArrayFilter = [];
  data.forEach((element) => {
    dataCopy.push(Object.assign({}, element));
  });
  newArrayFilter = data.filter(element => element.num.indexOf(dataFilter) > -1);
  return newArrayFilter;
};

const filterData = (data, dataFilter, condition) => {
  let dataCopy = [];
  let newArrayFilter = [];
  let saveObject = [];

  data.forEach((element) => {
    dataCopy.push(Object.assign({}, element));
  });

  if (dataFilter.length === 0)
    return dataCopy;

  switch (condition) {
  case 0:
    newArrayFilter = filterNum(data, dataFilter);
    break;
  case 1:
    newArrayFilter = dataCopy.filter(
      element => element.name.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1);
    break;
  case 2:
    newArrayFilter = dataCopy.filter(
      element => element.type.filter(
        ele => ele.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1).length > 0);
    break;
  case 3:
    newArrayFilter = dataCopy.filter(
      element => element.height.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1);
    break;
  case 4:
    newArrayFilter = dataCopy.filter(
      element => element.weight.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1);
    break;
  case 5:
    newArrayFilter = dataCopy.filter(
      element => element.candy.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1);
    break;
  case 6:
    newArrayFilter = dataCopy.filter(
      element => element.egg.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1);
    break;
  case 7:
    newArrayFilter = dataCopy.filter(
      element => element.avg_spawns === parseInt(dataFilter));
    break;
  case 8:
    newArrayFilter = dataCopy.filter(
      element => element.spawn_time.indexOf(dataFilter) > -1);
    break;
  case 9:
    newArrayFilter = dataCopy.filter(
      element => element.weaknesses.filter(
        ele => ele.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1).length > 0);
    break;
  case 10:
    saveObject = filterNum(dataCopy, dataFilter);
    newArrayFilter = Object.keys(saveObject[0]).map(element => {
      if (element === 'prev_evolution') {
        // [object,object] =>object={name:---- ,img:----- }
        return (saveObject[0].prev_evolution.map(element => {
          const objectNew = {};
          objectNew.name = filterNum(dataCopy, element.num)[0].name;
          objectNew.img = filterNum(dataCopy, element.num)[0].img;
          return objectNew;
        }));
      }
    }).filter(element => element);
    break;
  case 11:
    saveObject = filterNum(dataCopy, dataFilter);
    newArrayFilter = Object.keys(saveObject[0]).map(element => {
      if (element === 'next_evolution') {
        // [object,object] =>object={name:---- ,img:----- }
        return (saveObject[0].next_evolution.map(element => {
          const objectNew = {};
          objectNew.name = filterNum(dataCopy, element.num)[0].name;
          objectNew.img = filterNum(dataCopy, element.num)[0].img;
          return objectNew;
        }));
      }
    }).filter(element => element);
    break;
  case 12:
    saveObject = filterNum(dataCopy, dataFilter);
    Object.keys(saveObject[0]).map(element => {
      if (element === 'candy_count') newArrayFilter.push(saveObject[0]);
      return 1;
    });
    break;
  default: alert('No existe Pokemon con dichas especificaciones!');
  }

  return newArrayFilter;
};

const sortData = (data, sortBy, sortOrder) => {
  let newArrayFilter = [];

  data.forEach((element) => {
    newArrayFilter.push(Object.assign({}, element));
  });

  if (sortBy === 0) {
    // Ordenar por ID
    newArrayFilter.sort((firstElement, secondElement) => {
      if (sortOrder === 0) return firstElement.id - secondElement.id;
      else return secondElement.id - firstElement.id;
    });
  } else {
    // Ordenar por A-Z
    newArrayFilter.sort((firstElement, secondElement) => {
      if (sortOrder === 0) {
        if (firstElement.name > secondElement.name) return 1;
        else return -1;
      } else {
        if (firstElement.name < secondElement.name) return 1;
        else return -1;
      }
    });
  }

  return newArrayFilter;
};

const computeStats = (data, condition) => {
  let avPromedio;
  const obj = data.map(elemento => elemento.avg_spawns);
  const avgSpawns = obj.reduce((a, b) => a + b);
  const meanSpawns = avgSpawns / obj.length;

  avPromedio = data.filter(elemento => {
    switch (condition) {
    case 1:
      return elemento.avg_spawns > meanSpawns;
    case 2:
      return elemento.avg_spawns !== 0 && elemento.avg_spawns < meanSpawns;
    default:
      return elemento.avg_spawns === 0;
    }
  });
  return avPromedio;
};
window.data = {
  filterNum,
  filterData,
  sortData,
  computeStats,
};
