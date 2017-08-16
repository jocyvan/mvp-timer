$(document).foundation();
var app = angular.module('MvP-Timer', []);
app.controller('myCtrl', function($scope) {
    $scope.deadMvps = [];
    $scope.mvpArr = [
      { name: 'Orc Herói', nv: 50, time: 60 },
      { name: 'Maya', nv: 55, time: 120 },
      { name: 'Senhor dos Orcs', nv: 55, time: 120 },
      { name: 'Besouro-Ladrão Dourado', nv: 65, time: 60 },
      { name: 'Eddga', nv: 65, time: 60 }
    ];

    $scope.addMvpTimer = function(){
      var mvp = $scope.newMvp.obj;
      var died = $scope.newMvp.time;
      var rebirth = new Date(died.getTime() + mvp.time * 60000);

      $scope.deadMvps.push({name: mvp.name, died: died, rebirth: rebirth});
      $scope.newMvp = null;
    }

    $scope.removeMvpTimer = function(i){
      $scope.deadMvps.splice(i, 1);
    }
});
