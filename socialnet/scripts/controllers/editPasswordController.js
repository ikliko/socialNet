/**
 * Created by kliko on 21.05.15.
 */
socialNet.controller('editPasswordController', function ($scope, service) {
    $scope.isEditPasswordActive = 'active';

    $scope.changePassword = function (passwordData) {
        if(passwordData.newPassword === passwordData.confirmPassword) {
            service.changePassword(passwordData)
                .then(function (data) {
                    console.log(data);
                }, function (error) {
                    console.log(error);
                });
        }
    };
});