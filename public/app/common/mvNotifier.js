angular.module('app').value('mvToaster', toastr); //what ? 

angular.module('app').factory('mvNotifier', function(mvToastr) {
    return {
        notify : function(msg) {
            mvToaster.success(msg);
            console.log(msg);
        }       
    }
})