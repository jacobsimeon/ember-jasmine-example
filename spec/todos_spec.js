Todos.setupForTesting();
Todos.injectTestHelpers();

Ember.Test.adapter = {
  asyncStart: $.noop,
  asyncEnd: $.noop
}

beforeEach(function(){
  Todos.reset();
});

describe("TodosMVC", function(){
  it('shows the application title', function(wait) {
    visit('/');
    wait();

    // Wait for asynchronous helpers above to complete
    actualTitle = find('#todoapp header h1').text()
    expect(actualTitle).toEqual('todos');
  });
})

// describe("Creating a todo", function(){
//   it('Adds the todo item to the view', function(wait){
//     visit('/');
//     wait();
//
//     fillIn('#new-todo', 'My new todo')
//     keyEvent('#new-todo', 'keyup', 13)
//     wait()
//
//     var list = find('#todo-list')
//   });
// });
