//created: 09/03/2018

insertion_sort = function(user_array){

	for (var i = 0; i < items.length; i++) {
    let value = items[i];
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value;
  }

  return list;

}

function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  }

  return list
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