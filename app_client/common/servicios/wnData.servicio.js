(function() {

  function wnData ($http,authentication) {
    
    var getData = function () {return $http.get('/api/noticias');}

    var tipoData = function (tipo) {
      return $http.get('/api/noticias/tipo?tipoid='+tipo);
    }

    var getNoticia = function (idNoticia) {return $http.get('/api/noticia/'+idNoticia);}

    var newNoticia = function (newNot) {return $http.post('/api/noticia' , newNot);}

    var addNewComentario = function (idNoticia,newCom) {
      return $http.post('/api/noticia/'+idNoticia+'/comentario',newCom,
        {
          headers: {
              'Authorization' : 'Bearer '+ authentication.getToken()
            }
        }
        );
      
    }

    var newNoticiaImg = function (data){

      var fd = new FormData();
      fd.append('file',data.img);
      fd.append('titulo',data.titulo);
      fd.append('tipo',data.tipo);
      fd.append('lugar',data.lugar);
      fd.append('noticia',data.noticia);

      return $http.post('/api/noticia/prueba' , fd ,{
           // transformRequest: angular.identity, //Le decimos a angular que no serialize el envio
            headers: {
              'Content-Type'  : undefined,
              'Authorization' : 'Bearer '+ authentication.getToken()
            }
          });
    }

    return {
      getData : getData,
      tipoData : tipoData,
      getNoticia : getNoticia,
      newNoticia : newNoticia,
      addNewComentario : addNewComentario,
      newNoticiaImg : newNoticiaImg
    };
    
  }

  wnData.$inject = ['$http','authentication'];
  angular
    .module('wnApp')
    .service('wnData', wnData);

})();