// Correct: Using polymorphism to extend functionality
interface Shape {
  area(): number;
}

class Rectangle1 implements Shape {
  constructor(private width: number, private height: number) {}

  public area(): number {
    return this.width * this.height;
  }
}

class Circle1 implements Shape {
  constructor(private radius: number) {}

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator1 {
  public static calculateArea(shape: Shape): number {
    return shape.area();
  }
}

// Wrong: Modifying existing code to add new functionality
class Rectangle2 {
  constructor(private width: number, private height: number) {}

  public area(): number {
    return this.width * this.height;
  }
}

class Circle2 {
  constructor(private radius: number) {}

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator2 {
  public static calculateRectangleArea(rectangle: Rectangle2): number {
    return rectangle.area();
  }

  public static calculateCircleArea(circle: Circle2): number {
    return circle.area();
  }
}
