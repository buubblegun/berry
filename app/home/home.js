'use strict';

angular.module('myApp.home', [
        'ngRoute',
        'ngAutocomplete'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.location = '';
        $scope.locationDetails = '';


        $scope.searchEvents = function () {
            var lat = $scope.locationDetails.geometry.location.lat();
            var lng = $scope.locationDetails.geometry.location.lng();
            $http({
                method: 'GET',
                url: 'events/lat='+lat+'&'+'lng='+lng
            }).then(function successCallback(response) {
                console.log(response);
                console.log("success");
            }, function errorCallback(response) {
                console.log(response);
                console.log("fails");
            });
        }
    }]);