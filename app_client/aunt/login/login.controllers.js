(function () {

  function loginCtrl($location, authentication) {
    var vm = this;

    vm.pageHeader = {
      title: 'Sign in'
    };

    vm.credentials = {
      name : "",
      email : "",
      password : ""
    };

    vm.returnPage = $location.search().page || '/';

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.credentials.email || !vm.credentials.password) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doLogin();
      }
    };

    vm.doLogin = function() {
      vm.formError = "";
      console.log("entra doregister");
      authentication
        .login(vm.credentials)
        .error(function(err){
          vm.formError = err;
        })
        .then(function(){
          $location.search('page', null); 
          $location.path(vm.returnPage);
        });//*/
    };

  }
  loginCtrl.$inject = ['$location','authentication'];
  angular
    .module('wnApp')
    .controller('loginCtrl', loginCtrl);


})();
