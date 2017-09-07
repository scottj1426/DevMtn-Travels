
angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, $stateParams, mainSrv) {
  $scope.packageInfo = mainSrv.getPackagesByCountry($stateParams.country);





});
