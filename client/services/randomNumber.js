import { Service } from 'angular-ecmascript/module-helpers';

export default class RandomNumberService extends Service {
  numberFromMeteor(min, max) {
    // Error-first callback to Angular Promise wrapper
    return this.$q((resolve, reject) => {
      Meteor.call('getRandomNumber', min, max, (err, res) => {
        if (!err) resolve(res);
        else reject(err);
      });
    });
  }

  numberFromRest(minNumber, maxNumber) {
    const backendPath = this.$location.protocol() + '://' + this.$location.host() + ':' + this.$location.port();
    let request = { min: minNumber, max: maxNumber };

    // POST request through Angular $http
    return this.$http.post(backendPath + '/api/getRandomNumber', request)
      .then((res) => { return res.data });
  }
}

RandomNumberService.$inject = ['$q', '$http', '$location'];