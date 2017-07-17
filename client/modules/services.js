import angular from 'angular';

import PingService from '../services/ping';
import RandomNumberService from '../services/randomNumber';

export default angular.module('services', [])
.service('PingService', PingService)
.service('RandomNumberService', RandomNumberService);