import { Service } from 'angular-ecmascript/module-helpers';

export default class PingService extends Service {
  pingFromMeteor() {
    let timestamp = Date.now();

    // Error-first callback to Angular Promise wrapper
    return this.$q((resolve, reject) => {
      Meteor.call('ping', timestamp, (err, res) => {
        if (!err) resolve(res);
        else reject(err);
      });
    });
  }

  pingFromRest() {
    const backendPath = this.$location.protocol() + '://' + this.$location.host() + ':' + this.$location.port();
    let timestamp = Date.now();

    // GET request through Angular $http
    return this.$http.get(backendPath + '/api/ping' + `/${timestamp}`)
      .then((res) => { return res.data });
  }
}

PingService.$inject = ['$q', '$http', '$location'];