(function () {

	var homeCtrl = function($uibModal, wnData, authentication){
		var vm = this;

		vm.isLoggedIn = authentication.isLoggedIn();

		wnData.getData()
			.success(function(data) {
				vm.noticias = data;
				//console.log(data);
			})
			.error(function (e) {
				console.log(e);
			});

		vm.popupPublForm = function () {
			var modalInstance = $uibModal.open({
				templateUrl: '/publicarModal/publicarModal.view.html',
				controller: 'publicarModalCtrl as vm'
			});
			modalInstance.result.then(function (data) {
				vm.noticias.push(data);
			});
		};
	}

	homeCtrl.$inject = ['$uibModal','wnData' ,'authentication'];
	angular
		.module('wnApp')
		.controller('homeCtrl',homeCtrl);

}) ();