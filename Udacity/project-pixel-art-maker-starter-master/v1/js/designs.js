//Variables declaration
let inputWidth,
inputHeight,
width,
height,
colorPicker,
color,
table,
form,
cell;

//Variables assignments
inputWidth = $('#input_width');
inputHeight = $('#input_height');
width = inputWidth.val();
height = inputHeight.val();
colorPicker = $('#colorPicker');
color = colorPicker.val();
table = $('#pixel_canvas');
form = $('#sizePicker');
cell = $('td');

//Functions
function makeGrid (width, height) {
  //Clean old table
  table.children().remove();
  //Rows loop
  for (let row = 0; row < height; row++) {
    table.append('<tr></tr>\n');
  }
  //Columns loop
  let column = 0;
  while (column < width) {
    $('tr').append('<td></td>');
    column++;
  }
}
//Cell listener
function draw (color) {
  $('td').click(function () {
    $(this).css('background-color', color); //color the cell
  });
}

//Listeners
colorPicker.change(function () {
  if ($(this).val() != color)
    color = $(this).val();
  console.log(color);
  draw(color);
});

inputWidth.change(function () {
  if ($(this).val() != width)
    width = $(this).val();
  console.log(width);
});

inputHeight.change(function () {
  if ($(this).val() != height)
    height = $(this).val();
  console.log(height);
});

//Main
$(document).ready(function () {
  form.submit(function (event) {
    event.preventDefault();
    makeGrid(width, height);
    draw(color);
  });
});
