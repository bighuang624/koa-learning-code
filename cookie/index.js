const Koa = require('koa')
const app = new Koa()

// koa 2 中操作的 cookies 使用 npm 的 cookies 模块

app.use(async(ctx) => {
  if(ctx.url === '/index') {
    ctx.cookies.set('cid', 'helloworld', {
      domain: 'localhost',  // cookie 所在的域名
      path: '/index',  // cookie 所在的路径
      maxAge: 10 * 60 * 1000,  // cookie 有效时长
      expires: new Date('2017-08-14'),  // cookie 实效时间
      httpOnly: false,  // 是否只用于 http 请求中获取
      overwrite: false  // 是否允许重写
    })
  } else {
    ctx.body = 'hello world'
  }
})

app.listen(3000, () => {
  console.log('app [cookie] is running at port 3000')
})