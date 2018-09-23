//created: 09/03/2018

//Insertion sort from Hackernoon.com: https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5
insertion_sort = function(user_array, order_of_array){

  if(order_of_array === "Ascending"){
  	for (var i = 0; i < user_array.length; i++) {

      let value = user_array[i];

      for (var j = i - 1; j > -1 && user_array[j] > value; j--) 
        user_array[j + 1] = user_array[j];
      
      user_array[j + 1] = value;

    }
  }
  else if(order_of_array === "Descending"){
    for (var i = 0; i < user_array.length; i++) {

      let value = user_array[i];

      for (var j = i - 1; j > -1 && user_array[j] < value; j--) 
        user_array[j + 1] = user_array[j];
      
      user_array[j + 1] = value;

    }

  }

}

bubble_sort = function(user_array, order_of_array){

	if(order_of_array === "Ascending"){
		for(let i = 0; i < user_array.length; i++) {
			for(let j = i; j < user_array.length; j++) {
				if (user_array[i] > user_array[j]) {

					let temp = user_array[i];
					user_array[i] = user_array[j];
					user_array[j] = temp;

				}
			}
		}
	}
	else if(order_of_array === "Descending"){

		for(let i = 0; i < user_array.length; i++) {
			for(let j = i; j < user_array.length; j++) {
				if (user_array[i] < user_array[j]) {

					let temp = user_array[i];
					user_array[i] = user_array[j];
					user_array[j] = temp;
				}
			}
		}

	}

}

merge_sort = function(user_array, order_of_array){

	
}



/*

	the stopwatch object will keep going until insertion_sort.flag === true;
	so within the insertion_sort function, create a:

//-------------------------------------------------------------------
	var stopwatch_insertion = new Stopwatch();

	stopwatch_insertion.start();

	//begin the insertion sort
	//if insertion sort over
	//	stopwatch_insertion.stop();

*/