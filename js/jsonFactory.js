angular.module('jsonApp').factory('JsonFactory', function($http, $q) {
  var JsonFactory = {
    getPullRequests: function() {
      var deferred = $q.defer();

      $http
        .get('http://jsonplaceholder.typicode.com/photos')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        })

        return deferred.promise;
    },
    getIssues: function() {
      var deferred = $q.defer();

      $http
        .get('http://jsonplaceholder.typicode.com/photos')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        })

        return deferred.promise;
    }
  }

  return JsonFactory;
});



