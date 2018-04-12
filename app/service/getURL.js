'use strict';
const Service = require('egg').Service
class UserService extends Service {
    async getURL(url){
        const data = await this.ctx.curl("www.baidu.com",{});
        return data.data.toString();
    }

    async s(query){
        const data = await this.ctx.curl("www.baidu.com/s",
        {
            method:"GET",
            data:query,
        });
        //console.log(query);
        
        return data.data.toString();
    }
}
module.exports = UserService;