

function StatsCtrl($scope, $route, $routeParams, $http) {

  $http.get('/v1/system/stats.json', {}).success(function(data) {
    $scope.stats = data;
  });
}



function HiddenLoginController($scope, $modal, $location) {
  $scope.open = function() {
    var modalScope = $rootScope.$new()
    modalScope.title = 'Login';
    modalScope.button = 'Open Wallet';
    modalScope.bodyTemplate = "/views/modals/partials/login.html";
    modalScope.footerTemplate = "/views/modals/partials/login_footer.html";
    
    $scope.uuid = $location.path().replace("/login/", "");

    self.modalInstance = $modal.open({
      templateUrl: '/views/modals/base.html',
      controller: LoginControllerUUID,
      resolve: {
        uuid: function() {
          return $scope.uuid;
        }
      },
      scope: modalScope,
      backdrop:'static'
    });
  }
}

function FailedSaveLoginController($scope, $modal, $location) {
  $scope.open = function() {
    var modalScope = $rootScope.$new()
    modalScope.title = 'Login';
    modalScope.button = 'Open Wallet';
    modalScope.bodyTemplate = "/views/modals/partials/login.html";
    modalScope.footerTemplate = "/views/modals/partials/login_footer.html";
    
    $scope.uuid = $location.path().replace("/loginfs/", "");

    self.modalInstance = $modal.open({
      templateUrl: '/views/modals/base.html',
      controller: LoginControllerUUID,
      resolve: {
        uuid: function() {
          return $scope.uuid;
        }
      },
      scope: modalScope,
      backdrop:'static'
    });
  }
}

