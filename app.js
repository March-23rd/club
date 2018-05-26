require('babel-register');
require('babel-polyfill'); 

import Koa from 'koa';
const app = new Koa();
const router2controller = require('./app/controller/index.js');
const config = require('./config/config.local.js');

app.use(router2controller());
app.listen(config.port);
console.log("Server started and listen on port " + config.port);