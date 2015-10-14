angular
   .module('jsonApp')
  .controller('JsonController',
       JsonCrudController,JsonController); 
var self = this;
   JsonCrudController.$inject = ['$resource'];
    
  function JsonCrudController($resource) {
  
  var Json = $resource('http://localhost:3000/jsons/:id', { id: '@_id' });
    self.jsons = Json.query();

    this.deleteJson = function(json) {
    Json.delete({ id: json._id });
    var index = self.jsons.indexOf(json);
    self.jsons.splice(index, 1);
    }

  function JsonController(JsonFactory){

  JsonFactory.getPullRequests()
    .then(function(response) {
      self.pullRequests = response;
      console.log(response);
    });

  JsonFactory
    .getIssues()
    .then(function(response) {
      self.issues = response;
    });
  }
};