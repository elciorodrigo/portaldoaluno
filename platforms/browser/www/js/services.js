angular.module('app').factory('Servico', [ '$http', function ($http) {
  	
    return {
  		
      acessar: function (obj) {
        return $http({
          method: 'GET',
          url: 'http://192.168.1.100:8080/aluno/acessar',
          params:obj
        });
      }    
    
    };
}]);
