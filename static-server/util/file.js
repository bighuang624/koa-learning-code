const fs = require('fs')

function file (filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  return content
}

module.exports = file