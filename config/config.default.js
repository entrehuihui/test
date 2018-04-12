'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523435300418_9173';

  // add your config here
  config.middleware = [];

  //mysql configuration
  config.mysql = {
    client:{
      // host
      host: '120.78.76.139',
      // 端口号
      port: '3306',
      // 用户名
      user: 'entre',
      // 密码
      password: '545300',
      // 数据库名
      database: 'entredb',
    }
  };

  return config;

};
