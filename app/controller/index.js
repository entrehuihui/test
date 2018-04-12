'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    //const result = await this.ctx.service.index.list();
    const data = await this.ctx.service.getURL.getURL("1");
    this.ctx.body =data;
  }

  async s(){
    const word = this.ctx.query;
    //console.log(word);
    const result = await this.ctx.service.getURL.s(word);
    //console.log(result);
    await this.ctx.service.index.writefile(result);
    console.log(result);
    
    this.ctx.body=result;
  }
}

module.exports = HomeController;