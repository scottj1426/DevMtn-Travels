

angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, $stateParams, mainSrv) {
  this.getPackagesById = function (id){
    var packages = [];
    for(var i in mainSrv.packageInfo){
      if(mainSrv.packageInfo[i].id == id){
        console.log(mainSrv.packageInfo[i])
        return (mainSrv.packageInfo[i]);
      }
    }
  }

  $scope.gotid = this.getPackagesById($stateParams.id);
});
