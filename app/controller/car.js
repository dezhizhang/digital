/*
 * :file description: 
 * :name: /digital/app/controller/car.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-06-10 21:21:17
 * :last editor: 张德志
 * :date last edited: 2023-06-10 21:21:17
 */
'use strict';

const { Controller } = require('egg');

class CarController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('/car');
  }
}

module.exports = CarController;
