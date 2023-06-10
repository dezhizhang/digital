/*
 * :file description:
 * :name: /digital/app/router.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-06-06 19:35:14
 * :last editor: 张德志
 * :date last edited: 2023-06-10 21:21:46
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/car', controller.car.index);
};
