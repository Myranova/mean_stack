console.log("enter controller of navbar");

angular.module('app').controller('mvNavBarLoginCtrl', function($http, $scope) {
        $scope.signin = function(username, password) {
        console.log("im not done yet");
        $http.post('/login', {username:username, password:password}).then(function(response)
        {
            console.log("login : " + username);
            console.log("response : " + response);
            if (response.data.success) {         
                console.log('logged in !');
            }
            else {
                console.log('failed to login !');
            }
        })
    }
}
)

console.log("end of mvNavBarLoginCtrl");