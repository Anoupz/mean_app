angular.module('socketCtrl', ['socketService'])

    .controller('socketController', function (socket) {
        console.log("socket Connection successFull")
    });