interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];
  public add(part: string): void {
    this.parts.push(part);
  }
  public listParts(): void {
    console.log(`Product Parts: ${this.parts.join(",")}`);
  }
}

class ConcreteBuilder implements Builder {
  private product: Product;
  public reset(): void {
    this.product = new Product();
  }
  constructor() {
    this.reset();
  }
  public setPartA() {
    this.product.add("PartA");
  }
  public setPartB() {
    this.product.add("PartB");
  }
  public setPartC() {
    this.product.add("PartC");
  }
  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder: Builder;
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }
  public buildMinimumProduct(): void {
    this.builder.setPartA();
  }
  public buildFinalProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

// Setup
const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

// creating minimum product
director.buildMinimumProduct();
const minProduct = builder.getProduct();
console.log(minProduct);

// creating final product
director.buildFinalProduct();
const finalProduct = builder.getProduct();
console.log(finalProduct);

// getting product again
const gettingAgain = builder.getProduct();
console.log(gettingAgain);
