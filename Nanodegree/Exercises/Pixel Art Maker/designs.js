document.addEventListener('DOMContentLoaded', function () {

  //Variables declaration
  const sizePicker = document.getElementById('sizePicker');
  const colorPicker = document.getElementById('colorPicker');
  const inputWidth = document.getElementById('inputWidth');
  const inputHeight = document.getElementById('inputHeight');
  let width = inputWidth.value;
  let height = inputHeight.value;
  let color = colorPicker.value;
  const canvas = document.getElementById('pixelCanvas');

  //Create a grid WIDTH x HEIGHT
  function makeGrid (width, height) {
    let t0 = performance.now();
    let rows;
    if (canvas.hasChildNodes())
      canvas.firstElementChild.remove();
    for (let i = 0; i < height; i++) {
      canvas.insertRow();
    }
    rows = document.getElementsByTagName('tr');
    for (row of rows) {
      for (let j = 0; j < width; j++) {
        row.insertCell(j);
      }
    }
    let t1 = performance.now();
    console.log("Grid created in " + (t1 - t0) + " milliseconds.");
  }

  //WIDTH Listener
  inputWidth.addEventListener('change', function () {
    if (this.value !== width) {
      width = this.value;
      console.log(width);
    }
  });

  //HEIGHT Listener
  inputHeight.addEventListener('change', function () {
    if (this.value !== height) {
      height = this.value;
      console.log(height);
    }
  });

  //COLOR Listener
  colorPicker.addEventListener('change', function () {
    if (this.value !== color) {
      color = this.value;
      console.log(color);
    }
  });

  //CLICK Listener
  canvas.addEventListener('click', function (event) {
    if (event.target.nodeName === 'TD')
      event.target.style.setProperty('background-color', color);
  });

  //SUBMIT Listener
  sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid(width, height);
  });

});
