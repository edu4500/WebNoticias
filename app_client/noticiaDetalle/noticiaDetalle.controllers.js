(function () {

	var noticiaDetalleCtrl = function($routeParams,$uibModal,wnData, authentication){
		var vm = this;

		vm.isLoggedIn = authentication.isLoggedIn();
		
		vm.idnoticia = $routeParams.idnoticia;

		vm.noticia = {
			titulo : "",
			importancia : "",
			vistas : "",
			cuerpo : "",
			lugar : ""
		};

		//vm.comentarios = [{detalle : "dsfdsfds",fecha_hora : "fsdfds"}];
		//console.log(vm.idnoticia)
		
		wnData.getNoticia(vm.idnoticia)
			.success(function(data) {
				vm.noticia = data;
				//console.log(data);
			})
			.error(function (e) {
				console.log(e);
			});
		
		vm.popupPublForm = function () {
			var modalInstance = $uibModal.open({
				templateUrl: '/comentarioAddModal/comentarioAddModal.view.html',
				controller: 'comentarioAddModalCtrl as vm',
				resolve: {
					noticiaData : function(){
						return {
							noticiaid : vm.idnoticia,
							titulo : vm.noticia.titulo
						}
					}
				}
			});
			modalInstance.result.then(function (data) {
				console.log(data);
				vm.noticia = data;
			});
		};

	}
	noticiaDetalleCtrl.$inject = ['$routeParams', '$uibModal','wnData', 'authentication'];
	angular
		.module('wnApp')
		.controller('noticiaDetalleCtrl',noticiaDetalleCtrl);

})();