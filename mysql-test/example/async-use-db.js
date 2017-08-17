const { query } = require('./async-db')
async function selectAllData () {
  let sql = 'SELEct * FROM test'
  let dataList = await query(sql)
  return dataList
}

async function getData () {
  let dataList = await selectAllData()
  console.log(dataList)
}

getData()