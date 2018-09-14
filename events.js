
// createTimer = function(){
// };

/*
Insert Bubble Merge Quick Select
*/

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
			Generate_Array(user_array, size_of_array, "Random");
		else if(type_of_array === "Sorted"){
			console.log(size_of_array);
			Generate_Array(user_array, size_of_array, "Sorted");
		}

		console.log(user_array);

	});


	$("#Insert").click(function(){

		if(this.classList.contains("active")){
			console.log("IT WAS SELECTED");
			this.classList.remove("active");
			this.classList.add("non_active");
		}
		else{
			console.log("It was not selected");
			this.classList.remove("non_active");
			this.classList.add("active");
		}
	});

	$("#Bubble").click(function(){

		if(this.classList.contains("active")){
			console.log("IT WAS SELECTED");
			this.classList.remove("active");
			this.classList.add("non_active");
		}
		else{
			console.log("It was not selected");
			this.classList.remove("non_active");
			this.classList.add("active");
		}
	});

	$("#Merge").click(function(){

		if(this.classList.contains("active")){
			console.log("IT WAS SELECTED");
			this.classList.remove("active");
			this.classList.add("non_active");
		}
		else{
			console.log("It was not selected");
			this.classList.remove("non_active");
			this.classList.add("active");
		}
	});

	$("#Quick").click(function(){

		if(this.classList.contains("active")){
			console.log("IT WAS SELECTED");
			this.classList.remove("active");
			this.classList.add("non_active");
		}
		else{
			console.log("It was not selected");
			this.classList.remove("non_active");
			this.classList.add("active");
		}
	});

	$("#Select").click(function(){

		if(this.classList.contains("active")){
			console.log("IT WAS SELECTED");
			this.classList.remove("active");
			this.classList.add("non_active");
		}
		else{
			console.log("It was not selected");
			this.classList.remove("non_active");
			this.classList.add("active");
		}
	});


	$("#sort_button").click(function(){

		if(Atleast_One_Algorithm()){
			console.log("Atleast one was selected");
		}
		else{
			console.log("ZERO SORTING ALGORITHMS WERE SELECTED");
		}
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


*/

