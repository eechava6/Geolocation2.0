const Eureka = require('eureka-js-client').Eureka;
const PORT = require('./instance')

const client = new Eureka({
    // application instance information
    instance: {
      app: 'front',
      hostName: 'localhost',
      ipAddr: '127.0.0.1',
      statusPageUrl: 'http://localhost:5000',
      vipAddress: 'a-node-service',
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

client.start(error => {
  console.log('Eureka client connected')
})


module.exports = client