
// createTimer = function(){
// };

var user_array = [2, 4, 6, 8];
var display = false;

var type_of_array = null;
var order_of_array = null;
var size_of_array = 0;
var algorithms = [false, false, false, false, false];

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
	$("#show_array_button").click(function(){

		console.log(display);
		console.log(size_of_array);

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
	$("#create_array_button").click(function(){

		size_of_array = Number($("#size_of_array").val());

		console.log(size_of_array);
		//$("#size_of_array").val("");	

		console.log("i'm creating the array");

		//GenerateArray(user_array, size_of_array);

		if(type_of_array === "Random")
			Generate_Random_Array(user_array, size_of_array);
		else if(type_of_array === "Sorted"){
			console.log(size_of_array);
			Generate_Sorted_Array(user_array, size_of_array);
		}

		console.log(user_array);


		/*

			essentially, if it's random, then we create a random array of size (size)
				else, if it's sorted, make a sorted array of size (blah blah)

		*/


	});

	$("#sort_button").click(function(){

		/*
			based on the order_of_array, 
		*/
		//sort(order_of_array, algorithms);

	})


});



/*
	a timer is set to "go" when the "Go" button is pressed
*/


/*
Notes: 

09-03-2018
-need to make functions:
	-Generate_Random_Array(user_array)
	-Generate_Sorted_Array(user_array)
	-VerifyOrder(user_array, order_of_array); 	//returns true or false if the sorted array is properly sorted 
												//	according to user's order input





*/