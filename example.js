
// createTimer = function(){
// };

var user_array = [2, 4, 6, 8];
var display = false;

var type_of_array = null;
var order_of_array = null;
var array_size = 0;

$(document).ready(function(){


	$("#the_array").text(user_array);


	$("#Random").click(function(){
		type_of_array = "Random";
		console.log(type_of_array);
	});
	$("#Sorted").click(function(){
		type_of_array = "Sorted";
		console.log(type_of_array);
	});


	$("#Ascending").click(function(){
		order_of_array = "Ascending";
		console.log(order_of_array);
	});
	$("#Descending").click(function(){
		order_of_array = "Descending";
		console.log(order_of_array);
	});


	//used to toggle between displaying/hiding the array
	$("#array_button").click(function(){

		console.log(display);
		console.log(array_size);

		if(display === false){
			$("#the_array").show();
			$(this).text("Hide the array");
			display = true; 
		}
		else{
			$("#the_array").hide();
			$(this).text("Show the array");
			display = false;
		}

	});


	// //used for the user's submission of the size of the array
	$("#size_button").click(function(){
		array_size = $("#size_of_array").val();
		console.log(array_size);
		$("#size_of_array").val("");
	});



});



/*
	a timer is set to "go" when the "Go" button is pressed
*/


