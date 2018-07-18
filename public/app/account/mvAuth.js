angular.module('app').factory('mvAuth', function($http, mvIdentity ,$q) //thoses variable can be accessed
{
    console.log("access mvAuth");
    return {
        authenticateUser : function(username, password)
        {
            var dfd = $q.defer();
            $http.post('/login', {username:username, password:password}).then(function(response) {
                 //what is that ?
                if (response.data.success) {
                    mvIdentity.currentUser = response.data.user;  
                    dfd.resolve(true);
                    console.log("login success");
                    //mvNotifier.notify("login success !");
                }
                else {
                    dfd.resolve(false);
                  //  mvNotifier.notify('failed to login !');
                }
                
            });
            return (dfd.promise);
        }
    }
});