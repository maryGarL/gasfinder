'use strict';


const reRender=(lista,update,buscar)=>{
  lista.empty();
  filtro.forEach(station=>{
    lista.append(lista,update,buscar);

  });
}


const listaStation = (station,update)=>{
    const listado = $('<section class="listado"></section>');
    const grifos=$('<div class="grifos"></div>');
    const nombre=$('<span class="nombre">' +station.name+ '</span>');
    const direccion=$('<span class="direccion">' +station.address+ '</span>');
    const buton=$('<a class="boton">mapa</a>');

    grifos.prepend(nombre);
    grifos.append(direccion);
    grifos.append(buton);
    listado.append(grifos);

}

const Search = (update) => {
  const div= $('<div class="container"></div>');
  const icon=$('<i class="fa fa-search" aria-hidden="true"></i>');
  const input= $('<input type="text" name="" value="" placeholder="Ingrese su Distrito">');
  const valor= $('<input type="text" name="" value="" placeholder="Ingrese su Distrito">');
  const contenedorlistas=$('<div class="buscar"></div>');

  div.append(input);
  div.prepend(icon);

 state.stations.forEach(station=>{
   contenedorlistas.append(listaStation(station,update));
 });


  input.on('keyup', (e) => {
    var filtro = filterByDistrict(state.stations,input.val());
     reRender(listaStation,filtro,update);
  });
return div;
}
