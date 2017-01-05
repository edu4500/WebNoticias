(function () {

  function registerCtrl($location, authentication) {
    var vm = this;

    vm.pageHeader = {
      title: 'Create a new Loc8r account'
    };
    vm.compassword = "";
    vm.credentials = {
      name : "",
      email : "",
      password : ""
    };

    vm.returnPage = $location.search().page || '/';

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.credentials.name || !vm.credentials.email || !vm.credentials.password || !vm.compassword) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        if(vm.credentials.password != vm.compassword){
          vm.formError = "password diferetes";
        }else{
          vm.doRegister();
        }
      }
    };

    vm.doRegister = function() {
      vm.formError = "";
      console.log("entra doregister");
      authentication
        .register(vm.credentials)
        .error(function(err){
          vm.formError = err;
        })
        .then(function(){
          $location.search('page', null); 
          $location.path(vm.returnPage);
        });//*/
    };

  }
  registerCtrl.$inject = ['$location','authentication'];
  angular
    .module('wnApp')
    .controller('registerCtrl', registerCtrl);


})();
