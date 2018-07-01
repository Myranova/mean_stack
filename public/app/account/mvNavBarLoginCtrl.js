angular.module('app').controller('mvNavBarLoginCtrl', function($http, $scope, mvIdentity, mvNotifier) {
        $scope.signin = function(username, password) {
        $http.post('/login', {username:username, password:password}).then(function(response)
        {
            if (response.data.success) {
                mvIdentity.currentUser = response.data.user;  
                console.log("login success");
                mvNotifier.notify("login success !");
            }
            else {
                mvNotifier.notify('failed to login !');
            }
        })
    }
}
)