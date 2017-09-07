angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, $stateParams, mainSrv) {
$scope.locations = mainSrv.travelInfo;
});
