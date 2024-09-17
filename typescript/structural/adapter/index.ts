class Rectangle {
  constructor(private width: number, private height: number) {}
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  area() {
    return this.height * this.width;
  }
}

class Square {
  constructor(private side: number) {}
  getSide() {
    return this.side;
  }
  area() {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter {
  constructor(private square: Square) {}
  public getWidth(): number {
    return this.square.getSide();
  }
  public getHeight(): number {
    return this.square.getSide();
  }
  area(): number {
    return this.square.area();
  }
}

const square = new Square(5);
const adapter = new SquareToRectangleAdapter(square);
console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());
console.log(adapter);
