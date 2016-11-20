var module = angular.module("app", ['ngMask']);

module.controller("appController", [ '$scope', 'Servico', function ($scope, Servico) {

  
    $scope.exibir = "login";

    $scope.alunoDisciplina1 = {
    	disciplina : {
    		descricao : 'Engenharia de Software'
    	},
    	faltas : 2,
    	nota1 : 2.5,
    	nota2 : 7.5

    };

    $scope.alunoDisciplina2 = {
    	disciplina : {
    		descricao : 'Matemática'
    	},
    	faltas : 10,
    	nota1 : 8,
    	nota2 : 7


    };

    $scope.alunoDisciplina3 = {
    	disciplina : {
    		descricao : 'Português'
    	},
    	faltas : 15,
    	nota1 : 5,
    	nota2 : 3


    };
    $scope.alunoDisciplina4 = {
    	disciplina : {
    		descricao : 'Banco de Dados'
    	},
    	faltas : 0,
    	nota1 : 10,
    	nota2 : 7


    };
     $scope.alunoDisciplina5 = {
    	disciplina : {
    		descricao : 'Redes'
    	},
    	faltas : 8,
    	nota1 : 5,
    	nota2 : 9


    };



    $scope.alunosDisciplinas = [];
    $scope.alunosDisciplinas.push( $scope.alunoDisciplina1 );
    $scope.alunosDisciplinas.push( $scope.alunoDisciplina2 );
      $scope.alunosDisciplinas.push( $scope.alunoDisciplina3 );
        $scope.alunosDisciplinas.push( $scope.alunoDisciplina4 );
          $scope.alunosDisciplinas.push( $scope.alunoDisciplina5 );


    $scope.professor = {
        email : '',
        senha : ''
      };

    $scope.acessar = function () {   

          $scope.exibir = "notas";
         
                                  
    };

  

   
    
   

}]);                                                         