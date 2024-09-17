interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }
  description(): string {
    return "This is a simple coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}
  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost(): number {
    return this.coffee.cost() + 2;
  }
  description(): string {
    return this.coffee.description() + " with milk.";
  }
}

let coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee); // <--- usage of decorator

console.log(coffee.cost());
console.log(coffee.description());
