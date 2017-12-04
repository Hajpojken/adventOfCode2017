function day3A (arg){
  var n = 0
  var i = 0
  while (n < arg){
    i++
    n = Math.pow((i*2-1),2)
  }

  var corner1 = n
  var corner2 = corner1 - (i-1)*2
  var corner3 = corner2 - (i-1)*2
  var corner4 = corner3 - (i-1)*2

  var distans = (corner1 - corner2)/2

  var south = corner1 - distans
  var west = corner2 - distans
  var north = corner3 - distans
  var east = corner4 - distans

  a = Math.min(Math.abs(south-arg), Math.abs(west-arg), Math.abs(north-arg), Math.abs(east-arg))
  return (i + a -1)
}

function day3B (arg) {
  var matrix = new Array(101).fill(0).map(()=>new Array(101).fill(0))

  matrix[51][51] = 1
  var direction = 0
  var x = 51
  var y = 51
  var n = 0

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
    a = matrix[posx-1][posy+1]
    b = matrix[posx-1][posy-1]
    c = matrix[posx-1][posy]
    d = matrix[posx][posy+1]
    e = matrix[posx][posy]
    f = matrix[posx][posy-1]
    g = matrix[posx+1][posy+1]
    h = matrix[posx+1][posy]
    i = matrix[posx+1][posy-1]

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
  return(matrix[x][y])
}
