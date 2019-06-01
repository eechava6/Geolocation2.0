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
    db:"mongodb+srv://write:estebans@microservicios-fittf.mongodb.net/userMS?retryWrites=true&w=majority"
  }
};

module.exports = config[env];