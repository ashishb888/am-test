angular.module('starter', ['ngMaterial'])
.run(function() {
  console.log("Starter is running.");
})
.config(($mdIconProvider, $mdThemingProvider) => {
  // Register the user `avatar` icons
  $mdIconProvider
    .defaultIconSet("../assets/svg/avatars.svg", 128)
    .icon("menu", "../assets/svg/menu.svg", 24)
    .icon("share", "../assets/svg/share.svg", 24)
    .icon("google_plus", "../assets/svg/google_plus.svg", 24)
    .icon("hangouts", "../assets/svg/hangouts.svg", 24)
    .icon("twitter", "../assets/svg/twitter.svg", 24)
    .icon("phone", "../assets/svg/phone.svg", 24);

  /*$mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('red');*/
})
.controller('AppController', function($scope, $mdSidenav) {
  console.log("hi");
  $scope.toggleList = function toggleUsersList() {
    console.log("Hello");
    $mdSidenav('left').toggle();
  };
});
