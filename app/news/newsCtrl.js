/**
 * Created by Equipo on 2/03/2017.
 */
(function () {
    "use strict";
    angular.module("newsWikiApp")
        .controller("NewsCtrl",NewsCtrl);
function NewsCtrl ($scope) {
  $scope.mensaje="hola curso angular JS";
}
}());