angular.module('socketService', [])

    .factory('socket', function (socketFactory) {
        return socketFactory();
    });
