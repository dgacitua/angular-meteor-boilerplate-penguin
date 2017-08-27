import { Meteor } from 'meteor/meteor';
import './lib/jQueryFix';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularMeteorAuth from 'angular-meteor-auth';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from '@uirouter/angularjs';
import Loader from 'angular-ecmascript/module-loader';
import angularAnimate from 'angular-animate';
import angularTouch from 'angular-touch';

import RoutesConfig from './modules/routes';

import ServicesModule from './modules/services';

import MainCtrl from './pages/main/main';
import AboutCtrl from './pages/about/about';

const app = 'app';

angular.module(app, [
  angularMeteor,
  angularMeteorAuth,
  angularAnimate,
  angularTouch,
  uiBootstrap,
  uiRouter,
  ServicesModule.name
]);

new Loader(app)
  .load(MainCtrl)
  .load(AboutCtrl)
  .load(RoutesConfig);

angular.element(document).ready(() => {
  angular.bootstrap(document, [ app ]);
});