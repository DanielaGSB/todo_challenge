describe('todoListController', function() {
  beforeEach(module('todoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoListController');
  }));

  it('initialises with an empty to do list', function() {
    expect(ctrl.taskList.length).toBe(0);
  });

  // describe( 'Viewing existing tasks', function() {
  //     it( 'shows a list of existing tasks', function() {
  //       var tasks = [
  //           {
  //             'title': 'Learn Angular',
  //             done: false
  //           },
  //           {
  //             'title': 'Create a kickass app',
  //             done: false,
  //       ]
  //
  //       expect( ctrl.listTasks.items ).toEqual(tasks);
  //     });
  //   });
  });
