function sing()
{
	console.log("twinkle twinkle, little star,");
	console.log("how I wonder what you are!");
}

setInterval(sing,1000);

setInterval(function()
{
	console.log("I am an anonymous function");
	console.log("This is awesome!");
}, 2000);