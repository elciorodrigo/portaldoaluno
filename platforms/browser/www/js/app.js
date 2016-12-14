var module = angular.module("app", ['ngMask']);

module.controller("appController", [ '$scope', 'Servico', function ($scope, Servico) {

  
    $scope.exibir = "login";
    $scope.alunosDisciplinas = [];
     $scope.aluno = {
    	codigo : '',
    	senha: ''
    };
   

    $scope.acessar = function (aluno) {   

    	Servico.acessar(aluno).success(function (data){
           $scope.alunosDisciplinas = data;
          }).error(function(){
            alert('erro');
          });

         
                                  
    };

  

   
    
   

}]);                                                         