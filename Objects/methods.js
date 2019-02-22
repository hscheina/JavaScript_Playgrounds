var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Bob", "Tina"],
	add: function(x,y) {
		return x+y;
	}
}

obj.add(10,5);

function speak() {
	return "WOOF!";
}

speak();

function speak() {
	return "MEOW!";
}

speak(); //namespace collision

var dogSpace = {};

dogSpace.speak = function() {
	return "WOOF!";
}

var catSpace = {};

catSpace.speak = function() {
	return "MEOW!";
}

dogSpace.speak();
catSpace.speak(); 
	//no namespace collision

var comments = {};

comments.data = ["Good job!", "Bye", "Lame..."];

comments.print = function(){
	this.data.forEach(function(e){
		console.log(e);
	})
}

comments.print();