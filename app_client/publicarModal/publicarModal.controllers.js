(function () {

	var publicarModalCtrl = function($uibModalInstance,wnData){
		var vm = this;

		vm.onSubmit = function () {
			vm.formError = "";
			if(!vm.formData.titulo || !vm.formData.tipo || !vm.formData.lugar || !vm.formData.noticia) {
				vm.formError = "Todos los campos son requeridos, porfavor intente denuevo";
				return false;
			}else{
				console.log(vm.formData);

				wnData.newNoticiaImg(vm.formData)
					.success(function(data){
						//console.log(data);
						vm.modal.close(data);
					})
					.error(function (e) {
						console.log(e);
						vm.formError = "Tu noticia no fue guardada, porfavor intente denuevo.";
					});

				return false;
			}
		};

		vm.foto = "entrtsds";
		vm.onclickFoto = function(){
			
			console.log(vm.foto);
		}


		vm.modal = {
			close : function (result) {
				$uibModalInstance.close(result);
			},
			cancel : function () {
				$uibModalInstance.dismiss('cancel');
			}
		};

	}
	publicarModalCtrl.$inject = ['$uibModalInstance', 'wnData'];
	angular
		.module('wnApp')
		.controller('publicarModalCtrl',publicarModalCtrl);

})();