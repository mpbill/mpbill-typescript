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


const direction = Direction.down;

const coordinate = [0,0];

function SumCoordinates(c1: Coordinate, c2: Coordinate): Coordinate {
    return {
        col: c1.col + c2.col,
        row: c1.row + c2.row
    }
}

function NextCoordinatePartOne(coordinate: Coordinate, direction: Direction) {
    switch(direction) {
        case Direction.up:
            return SumCoordinates(coordinate, directionalCoordinates.up);
        case Direction.right:
            return SumCoordinates(coordinate, directionalCoordinates.right);
        case Direction.down:
            return SumCoordinates(coordinate, directionalCoordinates.down);
        case Direction.left:
            return SumCoordinates(coordinate, directionalCoordinates.left);
    }
}

function NextCoordinatePartTwo(coordinate: Coordinate, nR: number, nC: number) {
    const newCoordinate = {...coordinate};
    if (coordinate.col < 1)
}

function NextCoordinate(coordinate: number[], direction: Direction, nR: number, nC: number) {
    return NextCoordinatePartTwo(NextCoordinatePartOne(coordinate, direction), nR, nC);
}
