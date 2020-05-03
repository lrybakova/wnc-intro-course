toggleCompleted: function (position) {
  var todo = this.todos[position];
  todo.completed = !todo.completed;
  this.displayTodos();
},
toggleAll: function() {
  var totalTodos = this.todos.length;
  var completedTodos = 0;

  for (i=0; i<totalTodos; i++) {
    if (this.todos[i].completed === true) {
    completedTodos++;
    }
  } 
  if (completedTodos === totalTodos) {
  for (i = 0; i < totalTodos; i++) {
    this.todos[i].completed = false;
    }
  } else {
    for (i = 0; i < totalTodos; i++) {
    this.todos[i].completed = true;
    }
  }
    this.displayTodos()
  } 