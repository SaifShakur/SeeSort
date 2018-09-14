//function that fills the array "user_array" with random numbers from 1 to size "size_of_array"
Generate_Array = function(user_array, size_of_array, type_of_array){

	user_array.length = 0;

	if(type_of_array == "Random"){

		for(i = 0; i < size_of_array; i++)
			user_array.push( (Math.floor((Math.random() * size_of_array) + 1)) );
	}
	else if(type_of_array == "Sorted"){

		for(var i = 1; i < (size_of_array + 1); i++)
			user_array.push(i);
		
	}

	$("#the_array").text(user_array);
}

Atleast_One_Algorithm = function(){

	var flag = false;

	if($("#Insert").hasClass("active"))
		flag = true;
	else if($("#Bubble").hasClass("active"))
		flag = true;
		else if($("#Merge").hasClass("active"))
			flag = true;
			else if($("#Quick").hasClass("active"))
				flag = true;
				else if($("#Select").hasClass("active"))
					flag = true;

	return (flag ? true : false);
}




























