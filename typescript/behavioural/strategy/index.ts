interface PaymentStrategy {
  pay(amount: number): void;
}

class PayPalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Payment of Rs ${amount} done using PayPal.`);
  }
}
class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Payment of Rs ${amount} done using Credit Card.`);
  }
}

class ShoppingCart {
  private _amount: number = 0;
  private _strategy: PaymentStrategy;
  setPaymentStragety(strategy: PaymentStrategy) {
    this._strategy = strategy;
  }
  addToCart(value: number) {
    this._amount += value;
  }
  checkout() {
    this._strategy.pay(this._amount);
  }
}

// USAGE
const shoppingCart = new ShoppingCart();
shoppingCart.setPaymentStragety(new CreditCardStrategy());
shoppingCart.addToCart(100);
shoppingCart.addToCart(250);
shoppingCart.checkout();
