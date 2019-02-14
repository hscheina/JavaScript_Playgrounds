var todos = ["buy new turtle"];
window.setTimeout(function() {
  var input = prompt("What would you like to do?");
  while (input !== "quit") {
	  	if (input === "list") {
	  		listTodos();
	  }
	  else if (input === "new") {
	  		addTodo();
	  }
	  else if (input === "delete") {
	  		deleteTodo();
	  }
	  var input = prompt("What would you like to do?");
  }

  function listTodos() {
  	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
  }

  function addTodo() {
  	var newTodo = prompt("Enter new to-do");
  	todos.push(newTodo);
  	console.log("Added todo");
  }

  function deleteTodo() {
  	//ask for index of todo to be deleted
  	var index = prompt("Enter index of todo to delete.");
  	//delete that todo
  	//splice()
  	todos.splice(index,1);
  	console.log("Deleted todo");
  }
}, 500);