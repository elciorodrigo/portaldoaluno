angular.module('app').factory('Servico', [ '$http', function ($http) {
  	
    return {
  		
      logar: function (login) {
  			return $http({
  				method: 'GET',
  				url: 'https://damp-crag-8899.herokuapp.com/dadosCadastrais',
  				params: login
        });
      },



      salvarAluno: function (aluno) {
        return $http({
          method: 'POST',
          url: 'http://127.0.0.1:8080/aluno/salvar',
          params: aluno
        });
      },

      editarAluno: function (aluno) {
        return $http({
          method: 'POST',
          url: 'http://127.0.0.1:8080/aluno/editar',
          params: aluno
        });
      },

      excluirAluno: function (aluno) {
        return $http({
          method: 'POST',
          url: 'http://127.0.0.1:8080/aluno/excluir',
          params: aluno
        });
      },

      listarAlunos: function (aluno) {
        return $http({
          method: 'GET',
          url: 'http://127.0.0.1:8080/aluno/listar',
          params: aluno
        });
      }      
    
    };
}]);
