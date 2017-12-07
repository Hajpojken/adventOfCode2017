const fs = require('fs')
const z = fs.readFileSync('./text.txt', 'utf-8')

function parseInData4A(str, question){
  return str.split('\n').map(function(x){
    return x.split(' ')
    })
  })
}

function parseInData4B(str, question){
  return str.split('\n').map(function(x){
    return x.split(' ').map(function(x){
      return x.split('').sort().join('')
    })
  })
}

const a = parseInData4A(z)
const b = parseInData4B(z)

function day4(arr){
  return arr.reduce(function(prevVal, x, i, array){
    return (new Set(x).size == x.length ? prevVal+1 : prevVal)
  }, 0)
}
