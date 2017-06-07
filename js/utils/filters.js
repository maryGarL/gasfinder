'use strict';

const filterByDistrict = (stations,query) => {
  return stations.filter((e) =>{
    if(e.district.toLowerCase().indexOf(query)!=-1){

      return e}
  })
}
