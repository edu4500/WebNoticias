(function () {

  angular
    .module('wnApp')
    .directive('footerGeneric', footerGeneric);

  function footerGeneric () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directivas/footer/footerGeneric.template.html'
    };
  }

})();