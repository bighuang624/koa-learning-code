// generator 中间件在 koa v1 中可以直接 use 使用
// 
const koa = require('koa')
const loggerGenerator = require('./middleware/logger-generator')
const app = koa()

app.use(loggerGenerator())

app.use(function *() {
  this.body = 'hello world!'
})

app.listen(3000)
console.log('app is running at port 3000')