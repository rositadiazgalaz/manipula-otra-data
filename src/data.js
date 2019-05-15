/* Manejo de data */

//filtrar por tipo

const filterByType = (pokedata, condition) =>{
  filteringByType=pokedata.filter(element =>{
    return element.type.includes(condition);
  });
  return filteringByType;
}
window.filterByType=filterByType;