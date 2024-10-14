// WRONG USAGE of LSP
class WrongRectangle {
  constructor(protected _height: number, protected _width: number) {}
  area(): number {
    return this._height * this._width;
  }
  set height(val: number) {
    this._height = val;
  }
  set width(val: number) {
    this._width = val;
  }
}
class WrongSquare extends WrongRectangle {
  // it is extending square while it should implement shape
  // now square has to full fill height and width which doesn't make sense and can lead to unexpected behaviour
  constructor(side: number) {
    super(side, side);
  }
  set height(val: number) {
    this._height = val;
    this._width = val;
  }
  set width(val: number) {
    this._height = val;
    this._width = val;
  }
}

// resize and then calculate area
function resizeAndCalculateArea(rectangle: WrongRectangle): number {
  // this is considering square to be a rectangle and treating it as a rectangle too which is a "violation of LSP"
  rectangle.height = 5;
  rectangle.width = 10;
  return rectangle.area();
}

// Now client thinks that Square is a Rectangle and can be used as a rectangle
console.log(resizeAndCalculateArea(new WrongRectangle(4, 5))); // expected 50 -> actual 50
console.log(resizeAndCalculateArea(new WrongSquare(2))); // expected 50 -> actual 100

// RIGHT USAGE of LSP
interface Area {
  area(): number;
}
class Rectangle implements Area {
  constructor(private height: number, private width: number) {}
  area(): number {
    return this.height * this.width;
  }
}
class Circle implements Area {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// this function only expects super class
function calulateArea(shape: Area): number {
  // I can't resize shape here
  return shape.area();
}

// the function that expects only super class can be given a sub class easily.
console.log(calulateArea(new Rectangle(2, 3)));
console.log(calulateArea(new Circle(2)));
