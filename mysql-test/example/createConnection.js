/**
 * 创建数据库会话
 */
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: ''
})

//  执行 sql 脚本对数据库进行读写
connection.query('SELECT * FROM my_table', (error, results, fields) => {
  if(error)
    throw error
  // connected!
  
  // 结束会话
  connection.release() 
})
