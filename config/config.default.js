/*
 * :file description:
 * :name: /digital/config/config.default.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-06-06 19:35:14
 * :last editor: 张德志
 * :date last edited: 2023-06-06 20:12:11
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1686050553735_9113';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: { '.html': 'ejs' },
  };


  // 配置线上地址
  config.cluster = {
    listen: {
      path: '',
      port: 8088,
      hostname: '0.0.0.0',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
