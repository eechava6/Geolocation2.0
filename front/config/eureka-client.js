const Eureka = require('eureka-js-client').Eureka;
const PORT = require('./instance')
const args = process.argv;
statusURL = "http://"+args[3]+":"+PORT
console.log(statusURL)
const client = new Eureka({
    // application instance information
    instance: {
      app: 'front',
      hostName: args[3],
      ipAddr: args[3],
      statusPageUrl: statusURL,
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
      host: args[4],
      port: 8761,
      servicePath: '/eureka/apps/',
    },
});

client.start(error => {
  console.log('Eureka client connected')
})


module.exports = client