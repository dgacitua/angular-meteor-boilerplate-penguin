import { Config } from 'angular-ecmascript/module-helpers';

import mainTpl from '../pages/main/main.html';
import aboutTpl from '../pages/about/about.html';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('main', {
        url: '/',
        templateUrl: mainTpl,
        controller: 'MainCtrl as main'
      })
      .state('about', {
        url: '/about',
        templateUrl: aboutTpl,
        controller: 'AboutCtrl as about'
      });
 
    this.$urlRouterProvider.otherwise('/');
    this.$locationProvider.html5Mode(true);
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];