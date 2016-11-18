var module = angular.module("app", ['ngMask']);

module.controller("appController", [ '$scope', 'Servico', function ($scope, Servico) {

  
    $scope.exibir = "login";

    $scope.acessar = function () {   

          $scope.exibir = "notas";
         
                                  
    };

  

   
    
   

}]);                                                         