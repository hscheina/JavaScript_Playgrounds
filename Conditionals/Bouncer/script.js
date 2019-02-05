var age = prompt("What is your age?");
if (age < 0)
{
	console.log("You can't be negative years old!");
}
if ((age % 2) == 1)
{
	console.log("Your age is odd.");
}
if(age % Math.sqrt(age) === 0) 
{
  console.log("Your age is a perfect square!");
}
if (age < 18)
{
	console.log("You can't enter the club.");
}
else if (age < 20)
{
	console.log("You can enter but you can't drink.");
}
else
{
	if (age == 21)
	{
		console.log("Happy 21st! You get a free shot.");
	}
	console.log("You can enter and you can drink.");
}
