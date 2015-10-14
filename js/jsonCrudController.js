angular
   .module('jsonApp')
  .controller('JsonController',
       JsonCrudController);
  
var self = this;
   JsonCrudController.$inject = ['//$resource'];
    
  function JsonCrudController($resource,JsonFactory) {
  
  var Json = $resource('http:////localhost:3000/jsons/:id', { id: '@_id' });
    self.jsons = Json.query();

    this.deleteJson = function(json) {
    Json.delete({ id: json._id });
    var index = self.jsons.indexOf(json);
    self.jsons.splice(index, 1);
    }
   
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

  };

  
