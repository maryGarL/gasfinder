'use strict';
const listaStation = (station,update)=>{
    const listado = $('<section class="listado"></section>');
    const grifos=$('<div class="grifos"></div>');
    const nombre=$('<h1 class="nombre">' +station.name+ '</h1>');
    const direccion=$('<p class="direccion">' +station.address+ '</p>');
    const buton=$('<a href="#" class="fa fa-map"></a>');

    grifos.prepend(nombre);
    grifos.append(direccion);
    grifos.append(buton);
    listado.append(grifos);

    return listado;
}

const reRender=(lista,filtro,update)=>{
  lista.empty();
  filtro.forEach(station=>{
    lista.append(listaStation(station,update));
  });
}



const Search = (update) => {
  const div= $('<div class="container"></div>');
  const icon=$('<i class="fa fa-search" aria-hidden="true"></i>');
  const input= $('<input type="text" name="" value="" placeholder="Ingrese su Distrito">');
  const contenedorlistas=$('<div class="buscar"></div>');

  div.append(input);
  div.prepend(icon);
  div.append(contenedorlistas);

 state.stations.forEach(station=>{
   contenedorlistas.append(listaStation(station,update));
 });

  input.on('keyup', (e) => {
    var filtro = filterByDistrict(state.stations,input.val());
    console.log(filtro);
     reRender(contenedorlistas,filtro,update);
  });
return div;
}
