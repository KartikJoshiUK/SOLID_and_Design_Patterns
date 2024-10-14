// RIGHT USAGE of OCP
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

// this is closed for modification
function calulateArea(shape: Area): number {
  return shape.area();
}
console.log(calulateArea(new Rectangle(2, 3)));
console.log(calulateArea(new Circle(2)));

// WRONG USAGE of OCP

class WrongRectangle {
  constructor(private height: number, private width: number) {}
  area(): number {
    return this.height * this.width;
  }
}
class WrongCircle {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// this has to be modified in case of new class
function calulateCircleArea(circle: WrongCircle) {
  return circle.area();
}
function calulateRectangleArea(rectangle: WrongRectangle) {
  return rectangle.area();
}

console.log(calulateRectangleArea(new WrongRectangle(4, 5)));
console.log(calulateCircleArea(new WrongCircle(3)));
