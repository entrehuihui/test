'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.app.coreLogger.info("============");
    this.ctx.body = 'hi, eg1111g';
  }
}

module.exports = HomeController;
