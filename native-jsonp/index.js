const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {

  // 如果 jsonp 的请求为 GET
  if(ctx.method === 'GET' && ctx.url.split('?')[0] === '/getData.jsonp'){
    // 获取 jsonp 的 callback
    let callbackName = ctx.query.callback || 'callback'
    let returnData = {
      success: true,
      data: {
        text: 'this is a jsonp api',
        time: new Date().getTime()
      }
    }

    // jsonp 的 script 字符串
    let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`

    // 用 text/javascript，让请求支持跨域获取
    ctx.type = 'text/javascript'

    // 输出 jsonp 字符串
    ctx.body = jsonpStr

  } else {
    ctx.body = 'hello jsonp'
  }
})

app.listen(3000, () => {
  console.log('[demo] jsonp is starting at port 3000')
})