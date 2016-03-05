describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty to do list', function() {
    expect(ctrl.taskList.length).toBe(0);
  });

  it('enables user to add task to task list', function() {
    ctrl.newTask ='Learn Angular'
    ctrl.addTask();
    expect(ctrl.taskList[0].text).toEqual('Learn Angular');
  });

  // describe( 'when viewing existing tasks', function() {
  //       var tasks = [
  //           {
  //             'title': 'Learn Angular',
  //             done: false
  //           },
  //           {
  //             'title': 'Create a kickass app',
  //             done: false,
  //       ];
  //  //     it( 'shows a list of existing tasks', function() {
  //           expect( ctrl.listTasks.items ).toEqual(tasks);
  //     });
  //   });
  });
