'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const div = $('<div class="div"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Search(_ => render(root)));

  root.append(wrapper);
  root.append(div);
}

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});
