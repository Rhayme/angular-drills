angular.module('myApp').controller('mainCtrl', function($scope, myService) {

    getData();

    function getData() {
        $scope.data = myService.getData();
    }


})