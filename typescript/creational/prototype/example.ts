interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}
abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
    properties: ShapeProperties
  ) {
    super(properties);
  }
  clone(): Rectangle {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(this.height, this.width, clonedProperties);
  }
}
class Circle extends Shape {
  constructor(public radius: number, properties: ShapeProperties) {
    super(properties);
  }
  clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(this.radius, clonedProperties);
  }
}

const redRec = new Rectangle(10, 20, { color: "red", x: 5, y: 5 });
const blueRec = redRec.clone();
blueRec.properties.color = "blue";
blueRec.height = 100;

console.log(redRec, blueRec);
