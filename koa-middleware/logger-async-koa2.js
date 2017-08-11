const Koa = require('koa')
const loggerAsync = require('./middleware/logger-async')
const app = new Koa()

app.use(loggerAsync())

app.use((ctx) => {
  ctx.body = 'hello world!'
})

app.listen(3000)
console.log('app is running at port 3000')