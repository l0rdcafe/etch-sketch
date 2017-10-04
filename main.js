var model = {};
var view = {};
var handlers = {};

model.calcDims = function (size) {
  var divWidth = document.querySelector('.l-pad').clientWidth;
  return parseFloat((divWidth / size) - 2.0075).toFixed(2);
};

handlers.colorDrk = function (squ) {
  squ.style.backgroundColor = '#6f113f';
};

handlers.colorLite = function (squ) {
  squ.style.backgroundColor = '#f2a6cb';
};

handlers.clearGrid = function () {
  var squares = document.querySelectorAll('.square');
  var i;
  for (i = 0; i < squares.length; i += 1) {
    handlers.colorLite(squares[i]);
  }
};

view.createPad = function (size) {
  var pad = document.querySelector('.l-pad');
  var div;
  var i;
  var j;
  while (pad.hasChildNodes()) {
    pad.removeChild(pad.lastChild);
  }
  for (i = 0; i < size; i += 1) {
    for (j = 0; j < size; j += 1) {
      div = document.createElement('div');
      div.className = 'square';
      div.style.width = model.calcDims(size) + 'px';
      div.style.height = div.style.width;
      pad.appendChild(div);
    }
  }
};

view.setUpEvents = function () {
  var grid = document.querySelector('.l-pad');
  var hover = function (event) {
    var hoveredElm = event.target;
    if (hoveredElm.className === 'square') {
      handlers.colorDrk(hoveredElm);
    }
  };
  var btnFtr;
  grid.addEventListener('mouseover', hover);
  grid.addEventListener('touchleave', hover);
  btnFtr = document.querySelector('.l-btns');
  btnFtr.addEventListener('click', function (event) {
    var clickedElm = event.target;
    if (clickedElm.id === 'clear-grd') {
      handlers.clearGrid();
    } else if (clickedElm.id === 'new-grd') {
      view.createPad(prompt('Please enter a number from 1 to 40 to set the grid values'));
    }
  });
};

view.createPad(8);
view.setUpEvents();
