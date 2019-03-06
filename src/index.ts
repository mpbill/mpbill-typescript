const nRows = 67;
const nCols = 2;

enum Direction {
    up = 0,
    right = 1,
    down = 2,
    left = 3
}
const directionalCoordinates = {
    up:     {col:   0,  row:    -1},
    right:  {col:   1,  row:     0},
    down:   {col:   0,  row:     1},
    left:   {col:  -1,  row:     0}
}

interface Coordinate {
    col: number;
    row: number;
}






function SumCoordinates(c1: Coordinate, c2: Coordinate, nC: number, nR: number): Coordinate {
    let col = c1.col + c2.col;
    let row = c1.row + c2.row;
    if (col===-1) {
        col+=nC;
        row-=1;
    } else if (col === nC) {
        col-=nC;
        row+=1;
    }
    if (row === -1 || row === nR) {
        return c1;
    }
    return {
        col: col,
        row: row
    }
}

function NextCoordinate(coordinate: Coordinate, direction: Direction, nC: number, nR: number) {
    switch(direction) {
        case Direction.up:
            return SumCoordinates(coordinate, directionalCoordinates.up, nC, nR);
        case Direction.right:
            return SumCoordinates(coordinate, directionalCoordinates.right, nC, nR);
        case Direction.down:
            return SumCoordinates(coordinate, directionalCoordinates.down, nC, nR);
        case Direction.left:
            return SumCoordinates(coordinate, directionalCoordinates.left, nC, nR);
    }
}

const nR = 5;
const nC = 2;
const coordinate = {col: 0, row: 4};
console.log(NextCoordinate(coordinate, Direction.left, nC, nR));


