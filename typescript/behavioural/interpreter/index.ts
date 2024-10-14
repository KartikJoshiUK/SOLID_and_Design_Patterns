interface Expression {
  interpret(): number;
}
// TERMINAL
class TerminalExpression implements Expression {
  constructor(private value: number) {}
  interpret(): number {
    return this.value;
  }
}
// NON TERMINAL
class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}
class SubtractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

// Usage
const five = new TerminalExpression(5);
const three = new TerminalExpression(3);
const addition = new AddExpression(five, three);

console.log(`5 + 3 = ${addition.interpret()}`); // Output: 5 + 3 = 8

const four = new TerminalExpression(4);
const subtract = new SubtractExpression(addition, four);

console.log(`8 - 4 = ${subtract.interpret()}`); // Output: 8 - 4 = 4
