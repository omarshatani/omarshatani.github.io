//Variables declaration
let inputWidth,
inputHeight,
width,
height,
colorPicker,
color,
table,
form,
isPressed;

//Variables assignments
inputWidth = $('#input_width');
inputHeight = $('#input_height');
width = inputWidth.val();
height = inputHeight.val();
colorPicker = $('#colorPicker');
color = colorPicker.val();
table = $('#pixel_canvas');
form = $('#sizePicker');

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

  $('td').mouseenter(function () {
    if (isPressed) {
      $(this).css("background-color", color);
    }
  });

}
//Cell listener
function draw (color) {
  $('td').click(function () {
    $(this).css('background-color', color); //color the cell
    if (isPressed) {
      trigger('mouseenter');
    }
    if (!isPressed) {
      return false;
    }
  });
}


//Main
$(document).ready(function () {

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
    if (width > 50) {
      alert("Max width is 50");
      makeGrid(0, 0);
    }
    else
      makeGrid(width, height);
      draw(color);
    console.log(width);
  });

  inputHeight.change(function () {
    if ($(this).val() != height)
      height = $(this).val();
    if (height > 50) {
      alert("Max height is 50");
      makeGrid(0, 0);
    }
    else
      makeGrid(width, height);
      draw(color);
    console.log(height);
  });

  $(document).mousedown(function () {
    isPressed = true;
    console.log(isPressed);
  });

  $(document).mouseup(function () {
    isPressed = false;
    console.log(isPressed);
  });

});
