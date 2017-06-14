angular.module('apiApp').controller('mainCtrl', function($scope, marvelSer) {


    $scope.getData = function() {
        marvelSer.getData().then(function(hero) {
            console.log(hero);
            $scope.heroes = hero;

        })
    }
    $scope.getData();



})