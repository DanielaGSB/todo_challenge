todoList.controller('TodoListController', [function() {

    var self = this;
    self.taskList = [];

  self.addTask = function(newTask){
    self.taskList.push({text: self.newTask, done: false});
    self.newTask = '';
  };
}]);

  // app.controller( 'todoListController', [ function() {
  //   var self = this;
  //
  //   self.listTasks = [
  //     {
  //       title: Learn Angular,
  //       done: false,
  //     },
  //
  //   ]
  //
  //
  // }]);
  // Learn Angular',
  // done: false
  // },
  // {
  // 'title': 'Create a kickass app',
  // done: false,
