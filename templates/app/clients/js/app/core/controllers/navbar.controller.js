;(function(){
'use strict';

angular
  .module('core')
  .controller('NavbarCtrl', NavbarCtrl);

  /* @inject */
  function NavbarCtrl($scope, $location, Auth, Menus) {
    var vm = this;
    vm.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.menu = Menus.getMenu('topbar');


    vm.isCollapsed = true;
    vm.isLoggedIn = Auth.isLoggedIn;
    vm.isAdmin = Auth.isAdmin;
    vm.getCurrentUser = Auth.getCurrentUser;
    vm.logout = logout;
    vm.isActive = isActive;

    function logout() {
      Auth.logout();
      $location.path('/signout');
    }

    function isActive(route) {
      return route === $location.path();
    }
  }
}).call(this);