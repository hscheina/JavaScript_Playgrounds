var todos = [];
window.setTimeout(function() {
  var input = prompt("What would you like to do?");
  while (input !== "quit") {
	  	if (input === "list") {
	  	console.log(todos);
	  }
	  else if (input === "new") {
	  	var newTodo = prompt("Enter new to-do");
	  	todos.push(newTodo);
	  }
	  var input = prompt("What would you like to do?");
  }
}, 500);