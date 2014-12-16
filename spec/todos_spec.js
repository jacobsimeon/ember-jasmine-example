document.write('<div id="ember-testing-container"></div>');
Todos.rootElement = '#ember-testing-container';
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
  it('shows the application title', function(done) {
    visit('/');
    done();

    // Wait for asynchronous helpers above to complete
    actualTitle = find('#todoapp header h1').text()
    expect(actualTitle).toEqual('todos');
  });
})
