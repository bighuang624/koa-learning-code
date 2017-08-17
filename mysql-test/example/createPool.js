const mysql = require('mysql')

// 创建数据池
const pool = mysql.crestePool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: ''
})

// 在数据池中进行会话操作
pool.getConnection((err, connection) => {
  connection.query('SELECT * FROM my_table', (error, results, fields) => {
    // 结束会话
    connection.release()

    // 如果有错误就抛出
    if(error)
      throw error
  })
})