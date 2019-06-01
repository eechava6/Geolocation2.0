//Set up mongoose connection and db config

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env =  process.env.NODE_ENV || 'dev';   

var config = {
  dev: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'locationsMS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/locationsMS'
  },

  test: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'locationsMS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/locationsMS'
  },

  prod: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'locationsMS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/locationsMS'
  }
};

module.exports = config[env];