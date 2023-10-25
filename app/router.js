/*
 * :file description:
 * :name: /digital/app/router.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-06-06 19:35:14
 * :last editor: 张德志
 * :date last edited: 2023-10-25 19:19:20
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/car', controller.car.index);

  router.get('/smart-city', controller.smartcity.home);
};
