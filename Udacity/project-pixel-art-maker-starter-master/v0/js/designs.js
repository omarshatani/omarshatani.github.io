// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {

	//clear table
	$("#pixel_canvas").children().remove();

	//create row
	for (let i = 0; i < height; i++) {
		$('table').append('<tr></tr>\n');
	}
	//create columns
	for (let j = 0; j < width; j++) {
		$('tr').append("<td></td>\n");
	}
};



function addColor () { 
	let color = $('input[type="color"]').val();
	let isPressed;

	color.change(function () {
		color = $('input[type="color"]').val();
	});

	color.on("change", function() {
    	$("td").css("background-color", $("#color").val());
	});

	$(document).keydown(function (event) {
		if (event.which == 17)
	    	isPressed = true;
	});

	$(document).keyup(function (event) {
		 isPressed = false;
	});

	$('td').mousedown(function (event) {
	    if (isPressed) {
	        $(this).css("background-color", "#FFFFFF");
	    } else {
	        $(this).css("background-color", color);
	    }
	});


};

$(document).ready(function () {

	//When button is clicked, create Grid
	$("form").submit(function (evt) {	
		var width, height;

		width = ($("#input_width").val());
		height = ($("#input_height").val());

		evt.preventDefault();

		makeGrid(width, height);
		addColor();
	});

});