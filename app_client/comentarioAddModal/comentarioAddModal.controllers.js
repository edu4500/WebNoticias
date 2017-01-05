(function () {

	var comentarioAddModalCtrl = function($uibModalInstance,noticiaData,wnData){
		var vm = this;
		vm.noticia = noticiaData;
		vm.formData = {comentario : ""};

		vm.onSubmit = function () {
			//console.log(noticiaData);
			//console.log(vm.formData.comentario);
			vm.formError = "";
			if(!vm.formData.comentario) {
				vm.formError = "Todos los campos son requeridos, porfavor intente denuevo";
				return false;
			}else{
				//console.log(vm.noticia.noticiaid);
				wnData.addNewComentario(vm.noticia.noticiaid, vm.formData)
					.success(function(data) {
						vm.modal.close(data.comentario);
					})
					.error(function (e) {
						console.log(e);
						vm.formError = "Tu noticia no fue guardada, porfavor intente denuevo.";
					});
				//*/
				return false;
			}
		};

		vm.modal = {
			close : function (result) {
				$uibModalInstance.close(result);
			},
			cancel : function () {
				$uibModalInstance.dismiss('cancel');
			}
		};

	}
	comentarioAddModalCtrl.$inject = ['$uibModalInstance','noticiaData', 'wnData'];
	angular
		.module('wnApp')
		.controller('comentarioAddModalCtrl',comentarioAddModalCtrl);

})();