const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
    // application instance information
    instance: {
      app: 'users',
      hostName: 'localhost',
      ipAddr: '127.0.0.1',
      statusPageUrl: 'http://localhost:3000',
      vipAddress: 'users',
      port: {
        $: PORT,
        '@enabled': 'true',
      },
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
      registerWithEureka: true,
      fetchRegistry: true,
    },
    eureka: {
      // eureka server host / port
      host: 'localhost',
      port: 8761,
      servicePath: '/eureka/apps/',
    },
});

module.exports = client