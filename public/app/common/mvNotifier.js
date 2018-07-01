angular.module('app').value('mvToastr', toastr); //what ? 

angular.module('app').factory('mvNotifier', function(mvToastr) {
    return {
        notify : function(msg) {
            mvToastr.success(msg);
            console.log(msg);
        }       
    }
})