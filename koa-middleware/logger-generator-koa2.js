// generator 中间件在 koa v2 中需要用 koa-convert 封装一下才能使用
// 
const Koa = require('koa')
const convert = require('koa-convert')
const loggerGenerator = require('./middleware/logger-generator')
const app = new Koa()

app.use(convert(loggerGenerator()))

app.use((ctx) => {
  ctx.body = 'hello world!'
})

app.listen(3000)
console.log('the app is running at port 3000')