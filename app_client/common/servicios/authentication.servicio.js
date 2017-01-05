(function () {

  function authentication ($http,$window) {

    var saveToken = function (token) {$window.localStorage['wn-token'] = token;};
    var getToken = function () {return $window.localStorage['wn-token'];};
    var isLoggedIn = function() {
      var token = getToken();

      if(token){
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };
    var currentUser = function() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return {
          email : payload.email,
          name : payload.name
        };
      }
    };
    register = function(user) {
      return $http.post('/api/register', user).success(function(data){
        saveToken(data.token);
      });
    };

    login = function(user) {
      return $http.post('/api/login', user).success(function(data) {
        saveToken(data.token);
      });
    };
    logout = function() {
      $window.localStorage.removeItem('wn-token');
    };
    return {
      currentUser :currentUser ,
      saveToken : saveToken,
      isLoggedIn :isLoggedIn,
      getToken : getToken,
      register : register,
      login    : login,
      logout:logout
    };
  }
  authentication.$inject = ['$http','$window'];
  angular
   .module('wnApp')
   .service('authentication', authentication);

    
})();
