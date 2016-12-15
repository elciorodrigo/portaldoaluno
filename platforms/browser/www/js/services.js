angular.module('app').factory('Servico', [ '$http', function ($http) {
  	
    return {
  		
      acessar: function (obj) {
        return $http({
          method: 'GET',
         // url: 'http://127.0.0.1:8080/aluno/acessar',
         // url: 'http://192.168.0.102:8080/aluno/acessar',
          url: 'http://192.168.43.100:8080/aluno/acessar',
          params:obj
        });
      }    
    
    };
}]);
