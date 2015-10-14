angular
   .module('jsonApp')
  .controller('JsonController',
       JsonCrudController);
  
var self = this;
   JsonCrudController.$inject = ['//$resource'];
    
  function JsonCrudController($resource) {
  
  var Json = $resource('http:////localhost:3000/jsons/:id', { id: '@_id' });
    self.jsons = Json.query();

    this.deleteJson = function(json) {
    Json.delete({ id: json._id });
    var index = self.jsons.indexOf(json);
    self.jsons.splice(index, 1);
    }
   
   

  };

  
