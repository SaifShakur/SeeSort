var webdriver = require("selenium-webdriver"),
	By = webdriver.By,
	until = webdriver.until;

	var driver = new webdriver.Builder().forBrowser("chrome").build();

	driver.get("file:///Users/saifshakur/Desktop/selenium_test/index.html");
	
	/*
	1) Sorted
	2) Ascending
	3) 10
	4) Create Array
	5)Show array
	6)find the div and check that it works
	*/

	//Step 1
	driver.findElement(By.id("Sorted")).click();
	console.log("1) I just clicked the 'Sorted' button.");
	console.log("\n");
	//Step 2
	driver.findElement(By.id("Ascending")).click();
	console.log("2) I just clicked the 'Ascending' button.");
	console.log("\n");

	//Step 3
	driver.findElement(By.id("size_of_array")).sendKeys('10');
	console.log("3) I entered '10' as the size of the array.");
	console.log("\n");

	//Step 4
	driver.findElement(By.id("create_array_button")).click();
	console.log("4) I just clicked the 'create_array_button' button.");
	console.log("\n");

	driver.sleep(1000);

	//Step 5
	driver.findElement(By.id("show_array_button")).click();
	console.log("5) I just clicked the 'show_array_button' button.");
	console.log("\n");

	//Step 6
	driver.findElement(By.id("the_array")).getText().then(function(result){
		console.log("Here is the array we created: " + result);
	});






	// driver.findElement(By.id("type_of_numbers")).then(function(result){
	// 	console.log("2) Here is the div: " + result);
	// 	console.log("\n");
	// });

	// driver.findElement(By.id("Ascending")).getText().then(function(name){
	// 	console.log("3) Here is the button name: " + name);
	// 	console.log("\n");
	// });

	// 	driver.findElement(By.id("create_array_button")).getText().then(function(result){
	// 	console.log("1) this worked: " + result);
	// });


	//attempt to find button inside of div "type_of_numbers"
	// driver.findElement(By.id("type_of_numbers")).findElement(By.id("Ascending")).then(function(result){
	// 	result.getText().then(function(name){
	// 		console.log("3) Name of a button inside of div: " + name);
	// 	});
	// });


	
	driver.sleep(2000);







