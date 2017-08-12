const Koa = require('koa')
const app = new Koa()

// 将 POST 请求参数字符串解析成 JSON
function parseQueryStr(queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log(queryStrList)
  for(let[index, queryStr] of queryStrList.entries()){
    let itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}

// 解析上下文里 node 原生请求的 POST 参数
function parsePostData (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = ""
      // 这里看看能不能改成 on
      ctx.req.addListener('data', (data) => {
        postData += data
      })
      ctx.req.addListener('end', () => {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

app.use(async(ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST'){
     // 当 POST 请求的时候，解析 POST 表单里的数据，并显示出来
     let postData = await parsePostData(ctx)
     ctx.body = postData
  } else {
    // 其他请求显示 404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3000)
console.log('[demo] request get is starting at port 3000')