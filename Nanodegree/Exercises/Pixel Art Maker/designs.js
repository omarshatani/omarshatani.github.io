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
  const canvas__tbody = canvas.firstElementChild;

  //Create a grid WIDTH x HEIGHT
  function makeGrid (width, height) {
    canvas.removeChild(canvas__tbody);
    for (let i = 0; i < width; i++) {
      // const aBlock = document.createElement('tbody').appendChild(document.createElement('tr')).insertAdjacentElement('afterbegin', document.createElement('tr'));
    }
  }










});
