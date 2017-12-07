const fs = require('fs')
const a = fs.readFileSync('./text.txt', 'utf-8').split('\n').map(Number)

function day5A(arr){
  let pointer = 0
  let iterations = 0
  while (pointer < arr.length){
    let current = arr[pointer]

    arr[pointer]++
    pointer += current
    iterations++
  }
  return iterations
}

function day5B(arr){
  let pointer = 0
  let iterations = 0
  while (pointer < arr.length){
    let current = arr[pointer]

    if (current >= 3){
      arr[pointer]--
    }
    else {
      arr[pointer]++
    }
    pointer += current
    iterations++
  }
  return iterations
}
