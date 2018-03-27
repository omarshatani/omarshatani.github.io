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
    let rows;
    for (let i = 0; i < height; i++) {
      canvas.insertRow();
    }
    rows = document.getElementsByTagName('tr');
    for (row of rows) {
      for (let j = 0; j < height; j++) {
        row.insertCell(j);
      }
    }
  }

  








});
