(function () {

  angular
    .module('wnApp')
    .directive('navigator', navigator);

  function navigator () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directivas/navigation/navigator.template.html',//,
      controller: 'navigationCtrl as navvm'
    };
  }

})();