function myForEach(arr, func) {
	//loop through arr
	for (var i = 0; i < arr.length; i++) {
	//call func for each item in arr
	func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, alert);

myForEach(colors, function(color) {
	console.log(color);
});

Array.prototype.myForEachThis = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

var friends = ["Dave", "Kathy", "Charlie"];

friends.myForEachThis(alert);

friends.myForEachThis(function(name) {
	console.log("I love " + name);
});