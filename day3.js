function day3A (arg){
  let n = 0
  let i = 0
  while (n < arg){
    i++
    n = Math.pow((i*2-1),2)
  }

  const corner1 = n
  const corner2 = corner1 - (i-1)*2
  const corner3 = corner2 - (i-1)*2
  const corner4 = corner3 - (i-1)*2

  const distans = (corner1 - corner2)/2

  const south = corner1 - distans
  const west = corner2 - distans
  const north = corner3 - distans
  const east = corner4 - distans

  a = Math.min(Math.abs(south-arg), Math.abs(west-arg), Math.abs(north-arg), Math.abs(east-arg))
  return (i + a - 1)
}

function day3B (arg) {
  let matrix = new Array(101).fill(0).map(()=>new Array(101).fill(0))

  matrix[51][51] = 1
  let direction = 0
  let x = 51
  let y = 51
  let n = 0

  while(n<=arg){
    if (direction == 0){
      x += 1
    }
    else if(direction == 1){
      y += 1
    }
    else if(direction == 2){
      x -= 1
    }
    else if (direction == 3){
      y -= 1
    }
    n = update(x,y,direction)
    matrix[x][y] = n
  }

  function update(posx,posy){
    const a = matrix[posx-1][posy+1]
    const b = matrix[posx-1][posy-1]
    const c = matrix[posx-1][posy]
    const d = matrix[posx][posy+1]
    const e = matrix[posx][posy]
    const f = matrix[posx][posy-1]
    const g = matrix[posx+1][posy+1]
    const h = matrix[posx+1][posy]
    const i = matrix[posx+1][posy-1]

    if(direction == 0 && d == 0){
      direction = 1
    }
    else if(direction == 1 && c == 0){
      direction = 2
    }
    else if(direction == 2 && f == 0){
      direction = 3
    }
    else if(direction == 3 && h == 0){
      direction = 0
    }
    return a+b+c+d+e+f+g+h+i
  }
  console.log(matrix[x][y])
  return(matrix[x][y])
}

day3B(746)
