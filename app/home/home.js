'use strict';

angular.module('myApp.home', [
        'ngRoute',
        'ngAutocomplete',
        'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.location = '';
        $scope.locationDetails = '';
        $scope.events = '';
        $scope.showSearch = 1;
        $scope.showTable = 0;


        $scope.searchEvents = function () {
            $scope.showSearch = 0;
            var lat = $scope.locationDetails.geometry.location.lat();
            var lng = $scope.locationDetails.geometry.location.lng();
            $http({
                method: 'GET',
                url: 'searchevents/lat='+lat+'&'+'lng='+lng+'radius=50'
            }).then(function successCallback(response) {
                console.log(response);
                console.log("success");
                $scope.showTable = 1;
                $scope.events = response;
            }, function errorCallback(response) {
                console.log(response);
                console.log("fails");
                $scope.events = [
                    {
                        "eventName": "eventName1",
                        "eventLocation": "eventLocation1",
                        "eventType": "eventType1",
                        "eventDescription": "eventDescription1",
                        "eventLink": "eventLink1",
                        "eventDate": "eventDate1"
                    },
                    {
                        "eventName": "eventName2",
                        "eventLocation": "eventLocation2",
                        "eventType": "eventType2",
                        "eventDescription": "eventDescription2",
                        "eventLink": "eventLink2",
                        "eventDate": "eventDate2"
                    }
                ];
                $scope.showTable = 1;
            });
        }

        $scope.reset = function() {
            $scope.location = '';
            $scope.locationDetails = '';
            $scope.events = '';
            $scope.showSearch = 1;
            $scope.showTable = 0;
        }
    }]);