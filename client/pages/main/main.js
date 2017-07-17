import { Controller } from 'angular-ecmascript/module-helpers';

export default class MainCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.appName = 'Angular-Meteor Boilerplate "Penguin Edition"';

    this.min = 0;
    this.max = 10;
  }

  getPingMeteor() {
    this.PingService.pingFromMeteor()
      .then((res) => { this.pingResult = res });
  }

  getPingRest() {
    this.PingService.pingFromRest()
      .then((res) => { this.pingResult = res });
  }

  getRandomNumberMeteor() {
    this.RandomNumberService.numberFromMeteor(this.min, this.max)
      .then((res) => { this.randomResult = res });
  }

  getRandomNumberRest() {
    this.RandomNumberService.numberFromRest(this.min, this.max)
      .then((res) => { this.randomResult = res });
  }
}

MainCtrl.$name = 'MainCtrl';
MainCtrl.$inject = [ 'PingService', 'RandomNumberService' ];