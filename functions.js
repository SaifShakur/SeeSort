
//function that fills the array "user_array" with random numbers from 1 to size "size_of_array"
Generate_Random_Array = function(user_array, size_of_array){

	user_array.length = 0;

	for(i = 0; i < size_of_array; i++)
		user_array.push( (Math.floor((Math.random() * size_of_array) + 1)) );

	$("#the_array").text(user_array);
}

//function that fills the array "user_array" with numbers from 1 to size "size_of_array"
Generate_Sorted_Array = function(user_array, size_of_array){

	user_array.length = 0;

	console.log(size_of_array);
	console.log(size_of_array + 1);
	console.log(typeof size_of_array);

	for(var i = 1; i < (size_of_array + 1); i++){
		console.log(i);
		user_array.push(i);
	}

	$("#the_array").text(user_array);
}