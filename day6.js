function day6A (arr){
  let index = 0
  let sum = 0
  let results = []
  let result = ''
  let iterator = 0

  while (true){
      sum = Math.max.apply(Math, arr)
      index = arr.indexOf(Math.max(...arr))
      arr[index] = 0

      while(sum > 0){

        index = (index + 1) % (arr.length)
        arr[index] ++
        sum -= 1
      }

      result = arr.join(' ')

      if (results.indexOf(result) == -1){
        results.push(result)
        iterator++
      }
      else {
        return iterator + 1
      }
  }
}

function day6B (arr){
  let index = 0
  let sum = 0
  let results = []
  let result = ''
  let iterator = 0

  while (true){
      sum = Math.max.apply(Math, arr)
      index = arr.indexOf(Math.max(...arr))
      arr[index] = 0

      while(sum > 0){

        index = (index + 1) % (arr.length)
        arr[index] ++
        sum -= 1
      }

      result = arr.join(' ')

      if (results.indexOf(result) == -1){
        results.push(result)
        iterator++
      }
      else {
        return iterator - results.indexOf(result)
      }
  }
}
