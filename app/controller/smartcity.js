/*
 * :file description: 智慧城市
 * :name: /digital/app/controller/smartcity.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-10-25 19:18:30
 * :last editor: 张德志
 * :date last edited: 2023-10-25 19:19:42
 */
'use strict';

const { Controller } = require('egg');

class SmartcityController extends Controller {
  async home() {
    const { ctx } = this;
    await ctx.render('/smartcity/index');
  }
}

module.exports = SmartcityController;
