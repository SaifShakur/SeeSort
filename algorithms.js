//created: 09/03/2018

/*
||||||||||||||||||||||----Insertion Sort----|||||||||||||||||||||
*/
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

/*
||||||||||||||||||||||----Bubble Sort----|||||||||||||||||||||
*/
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

/*
||||||||||||||||||||||----Merge Sort----|||||||||||||||||||||
*/
//Merge sort functions from Hackernoon.com: https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
merge_sort = function(user_array, order_of_array){

	if (user_array.length === 1) 			//return once we hit an array with a single item
    	return user_array;

	const middle = Math.floor(user_array.length / 2); // get the middle item of the array rounded down
	const left = user_array.slice(0, middle); // items on the left side
	const right = user_array.slice(middle); // items on the right side

	
	return merge(merge_sort(left, order_of_array), merge_sort(right, order_of_array), order_of_array)

}
// compare the arrays item by item and return the concatenated result
merge = function(left, right, order_of_array) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {

  	if(order_of_array === "Ascending"){
	    if (left[indexLeft] < right[indexRight]) {
	      result.push(left[indexLeft])
	      indexLeft++
	    } else {
	      result.push(right[indexRight])
	      indexRight++
	    }
	}
	else if(order_of_array === "Descending"){
		if (left[indexLeft] > right[indexRight]) {
	      result.push(left[indexLeft])
	      indexLeft++
	    } else {
	      result.push(right[indexRight])
	      indexRight++
	    }
	}
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
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