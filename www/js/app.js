var module = angular.module("app", ['ngMask']);

module.controller("appController", [ '$scope', 'Servico', function ($scope, Servico) {

    $scope.tela ='';
    $scope.div = '';
    $scope.listaAlunos = [];
    $scope.teste = 'maria 123';

    $scope.aluno = {
        id : '',
        codigo : '',
        senha : '',
        nome : '',
        status : '',
        situacao : '',
        turma : ''
 
    };

    $scope.navegarTela = function(tela){
        $scope.tela = tela;
        
    };

    $scope.navegar = function(div){
        $scope.div = div;
    };

    $scope.editarAluno = function(aluno){
        $scope.aluno = aluno;
        $scope.div = 'cadastrar';
     };

    $scope.salvar = function () {   

          $scope.aluno.situacao = 'Matriculado';
          Servico.salvarAluno($scope.aluno).success(function (aluno){

            $aluno = null;           
            alert('Salvo');

          }).error(function(){
            alert('erro');
          });
                                  
    };

    $scope.novo = function () {
        $scope.aluno = null;
    }       



    $scope.editar = function () {   
          
          Servico.editarAluno($scope.aluno).success(function (aluno){
            
            alert('Ok');

          }).error(function(){
            alert('Erro para editar');
          });
                                  
    };


    $scope.excluir = function () {   
          
         $scope.aluno.situacao = 'Inativo';
         $scope.editar();
         
                                  
    };

    $scope.listarAlunos = function (){

        Servico.listarAlunos().success(function (alunos){
            $scope.div = 'listar';
            $scope.listaAlunos = alunos;

       }).error(function (){
            alert('erro ao carregar lista de alunos');
       });

    };

   
    
   

}]);                                                         