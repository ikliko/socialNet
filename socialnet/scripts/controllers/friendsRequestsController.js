/**
 * Created by kliko on 21.05.15.
 */
socialNet.controller('friendsRequestsController', function ($scope, $routeParams, $location) {
    if(sessionStorage['sessionToken']) {
        $location.path('/AccesDenied')
    }
    $scope.friendsRequestActive = 'active';

    $scope.username = $routeParams.username || 'kliko';
    $scope.fullName = 'Kliko Atanasov';
    $scope.work = 'One Creative as Backend';
    $scope.study = 'Software University';

    var allRequests = [
        {
            image: 'https://scontent-fra.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10001372_1381684452110308_827010543_n.jpg?oh=55ac7cf70148bcf314ec60c246822e61&oe=55C495F0',
            fullName: 'Kliko Atanasov 1'
        },
        {
            image: 'https://scontent-fra.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10001372_1381684452110308_827010543_n.jpg?oh=55ac7cf70148bcf314ec60c246822e61&oe=55C495F0',
            fullName: 'Kliko Atanasov 2'
        },
        {
            image: 'https://scontent-fra.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10001372_1381684452110308_827010543_n.jpg?oh=55ac7cf70148bcf314ec60c246822e61&oe=55C495F0',
            fullName: 'Kliko Atanasov 3'
        },
        {
            image: 'https://scontent-fra.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10001372_1381684452110308_827010543_n.jpg?oh=55ac7cf70148bcf314ec60c246822e61&oe=55C495F0',
            fullName: 'Kliko Atanasov 4'
        },
        {
            image: 'https://scontent-fra.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10001372_1381684452110308_827010543_n.jpg?oh=55ac7cf70148bcf314ec60c246822e61&oe=55C495F0',
            fullName: 'Kliko Atanasov 5'
        }
    ];
    $scope.rows = [];
    var i = 0,
        lnt = allRequests.length;
    for(; i < lnt; i+=2) {
        var row = {
            leftCol: allRequests[i],
            rightCol: allRequests[i+1]
        };
        $scope.rows.push(row);
    }

    $scope.rows.forEach(function (row) {
        console.log(row.leftCol);
        console.log(row.rightCol);
    });
});