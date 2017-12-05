const fs = require('fs')
var a = fs.readFileSync('./text', 'utf-8').split('\n').map(function(x){
  return x.split('\t').map(function(x){
    return parseInt(x)
  })
}).filter(function(x){
  return !isNaN(x[0])
})

function day2A(arg){
  return arg.reduce(function(prevVal, x, i, array) {
    return prevVal +=
      (array[i].reduce(function(a,b){
        return Math.max(a, b)}) -
      array[i].reduce(function(a,b){
        return Math.min(a, b)}))
  }, 0);
}

function day2B(arg){
  return arg.reduce(function(bigVal, x, i, bigArray){
    return bigVal + bigArray[i].reduce(function(prevVal, x, j, array){
      return prevVal + array.reduce(function(prevVal, b, k, array){
        return x%b === 0 && k!=j? prevVal + x/b : prevVal
      }, 0)
    }, 0)
  }, 0)
}
