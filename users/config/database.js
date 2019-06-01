//Set up mongoose connection and db config

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env =  process.env.NODE_ENV || 'dev';   

var config = {
  dev: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'usersMS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/usersMS'
  },

  test: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'usersMS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/usersMS'
  },

  prod: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'usersMS'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/usersMS'
  }
};

module.exports = config[env];