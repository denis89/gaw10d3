angular
   .module('jsonApp')
  .controller('JsonController', function(JsonFactory) {
  var self = this;

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
});