
// createTimer = function(){
// };

var user_array = [2, 4, 6, 8];
var display = false;

var type_of_array = null;
var order_of_array = null;
var size_of_array = 0;
var algorithms = [false, false, false, false, false];


$(document).ready(function(){

	Atleast_One_Algorithm = function(){

		
		/*

			-make a class that does the styling change for you:
				-change background color and boarder color/style
				-.active
			document.getElementById("MyElement").classList.add('MyClass');

			document.getElementById("MyElement").classList.remove('MyClass');

			if ( document.getElementById("MyElement").classList.contains('MyClass') )

			document.getElementById("MyElement").classList.toggle('MyClass');
		*/

		var x = $("#Insert");

		console.log("here");
		
		console.log(x);

		console.log("now I'm here");
	}	

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

	});


	$("#sort_button").click(function(){

		console.log("yoo");
		Atleast_One_Algorithm();
		/*
			based on the order_of_array, 
		*/
		//sort(order_of_array, algorithms);

	});


});



/*
	a timer is set to "go" when the "Go" button is pressed
*/


/*
Notes: 

09-03-2018
-need to make functions:
	-VerifyOrder(user_array, order_of_array); 	//returns true or false if the sorted array is properly sorted 
												//	according to user's order input

09-05-2018
-fix the checkbox situation
/*

			-make a class that does the styling change for you:
				-change background color and boarder color/style

			-OR just make the:
							$("#Insert").on("click", function(e){
									$("#Insert").classList.remove("active")
									..

									.

								})
				-.active
			document.getElementById("MyElement").classList.add('MyClass');

			document.getElementById("MyElement").classList.remove('MyClass');

			if ( document.getElementById("MyElement").classList.contains('MyClass') )

			document.getElementById("MyElement").classList.toggle('MyClass');
		*/





*/