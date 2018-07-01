angular.module("app").factory("mvIdentity", function() {
    return {
        currentUser : undefined,
        isAuthentificated : function() {
            return !!this.currentUser;
        }
    }
})