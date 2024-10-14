// Visitor interface
interface Visitor {
  visitBook(book: Book): void;
  visitElectronics(electronics: Electronics): void;
}

// Element interface
interface IElement {
  accept(visitor: Visitor): void;
}

// ConcreteElement for Book
class Book implements IElement {
  constructor(private title: string, private price: number) {}

  accept(visitor: Visitor): void {
    visitor.visitBook(this);
  }

  getPrice(): number {
    return this.price;
  }

  getTitle(): string {
    return this.title;
  }
}

// ConcreteElement for Electronics
class Electronics implements IElement {
  constructor(private name: string, private price: number) {}

  accept(visitor: Visitor): void {
    visitor.visitElectronics(this);
  }

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}

// ConcreteVisitor for Discount
class DiscountVisitor implements Visitor {
  visitBook(book: Book): void {
    const discount = book.getPrice() * 0.1; // 10% discount
    console.log(`Applying discount on ${book.getTitle()}: -$${discount}`);
  }

  visitElectronics(electronics: Electronics): void {
    const discount = electronics.getPrice() * 0.2; // 20% discount
    console.log(`Applying discount on ${electronics.getName()}: -$${discount}`);
  }
}

// Usage
const book = new Book("Design Patterns", 50);
const electronics = new Electronics("Smartphone", 700);

const discountVisitor = new DiscountVisitor();

book.accept(discountVisitor); // Applying discount on Design Patterns: -$5
electronics.accept(discountVisitor); // Applying discount on Smartphone: -$140
