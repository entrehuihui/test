const Service = require('egg').Service;
const fs = require("fs");
class UserService extends Service {
  async list() {
      
    //const data = await this.ctx.curl('https://hq.smm.cn/tong');
    //console.log(data);
    //const result = data.data.toString();
    //console.log(result);
    //this.writefile(result);
    //const client1 = this.app.mysql.get('db1');
    //const result = await client1.get("*", {id:120});
    const result = await this.app.mysql.select("product");
    console.log(result);
    return result;
  }

  async writefile(data){
    
    await fs.open("1.html", 'w+', (err, fd)=>{
        if (err) {
            return;
        }
        fs.writeSync(fd, data);
    });   
  }
}
module.exports = UserService;