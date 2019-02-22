printReverse([1,2,3,4]);
//4 3 2 1

printReverse(["a","b","c"]);
// c b a

isUniform([1,1,1,1]);
//true

isUniform([2,1,1,1]);
//false

isUniform(["a","b","p"]);
//false

isUniform(["b","b","b"]);
//true

sumArray([1,2,3]);
//6

sumArray([10,3,10,4]);
//27

sumArray([-5,100]);
//95

max([1,2,3]);
//3

max([10,3,10,4]);
//10

max([-5,100]);
//100

function printReverse(array){
	for (var i = array.length; i >= 0; i--)
	{
		console.log(array[i]);
	}
}

 function isUniform(array){
	var first = array[0];
	for (var i = 1; i < array.length; i++)
	{
		if (array[i] !== first)
		{
			console.log("false");
			return false;
		}
	}
	console.log("true");
	return true;
 }

function sumArray(array){
	var sum = 0;
	for (var i = 0; i < array.length ; i++)
	{
		sum += array[i];
	}
	console.log(sum);
}

function max(array){
	var largestNum = 0;
	for (var i = 0; i < array.length; i++)
	{
		if (array[i] > largestNum)
		{
			largestNum = array[i];
		}
	}
	console.log(largestNum);
}