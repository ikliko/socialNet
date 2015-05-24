/**
 * Created by kliko on 21.05.15.
 */
socialNet.controller('friendsRequestsController', function ($scope, $routeParams, $location, service) {
    $scope.isFeed = true;
    service.getReuqests()
        .then(function (requestsData) {
            $scope.rows = [];
            var i = 0,
                lnt = requestsData.length;
            for(; i < lnt; i+=2) {
                var row = {
                    leftCol: requestsData[i],
                    rightCol: requestsData[i+1]
                };
                $scope.rows.push(row);
            }
        }, function (error) {
            console.log(error);
        });

    $scope.approve = function (id, status) {
        
    }
});