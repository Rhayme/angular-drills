angular.module('myApp').controller('arrayController', function($scope, mainService) {

    getData();

    function getData() {
        $scope.data = mainService.getData();
    }
})