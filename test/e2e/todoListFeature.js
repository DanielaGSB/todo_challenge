describe('To Do List Feature', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');

  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('allows user to add a task', function() {
    element(by.model('todoCtrl.newTask')).sendKeys('Learn Angular');
    element(by.buttonText('Add Task')).click();
    expect(element(by.className('taskList')).getText()).toEqual('Learn Angular');

  });

});
