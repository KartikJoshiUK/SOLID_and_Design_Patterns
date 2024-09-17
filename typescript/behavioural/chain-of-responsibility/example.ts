interface MyHandler {
  setNext(handler: MyHandler): MyHandler;
  handle(order: Order): string | null;
}
abstract class MyAbstractHandler implements MyHandler {
  private nextHandler: MyHandler | null;
  setNext(handler: MyHandler): MyHandler {
    this.nextHandler = handler;
    return handler;
  }
  handle(order: Order): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(order);
    }
    return null;
  }
}
class Order {
  isValid(): boolean {
    return true;
  }
  applyDiscount(): void {
    console.log("Discount applied!");
  }
  processPayment(): boolean {
    return true;
  }
  ship(): void {
    console.log("Order shipped!");
  }
}
class ValidationHandler extends MyAbstractHandler {
  handle(order: Order): string | null {
    if (order.isValid()) {
      console.log("Order is Valid!");
      return super.handle(order);
    }
    return "Invalid : validation failed.";
  }
}
class DiscountHandler extends MyAbstractHandler {
  handle(order: Order): string | null {
    order.applyDiscount();
    return super.handle(order);
  }
}
class PaymentHandler extends MyAbstractHandler {
  handle(order: Order): string | null {
    if (order.processPayment()) {
      console.log("Transaction successfull!");
      return super.handle(order);
    }
    return "Payment : transaction unsuccessfull.";
  }
}
class ShipmentHandler extends MyAbstractHandler {
  handle(order: Order): string | null {
    order.ship();
    return super.handle(order);
  }
}

// USAGE
function myClientCode(handler: MyHandler) {
  const result = handler.handle(new Order());
  if (result) console.log(result);
}
const validationHandler = new ValidationHandler();
const discountHandler = new DiscountHandler();
const paymentHandler = new PaymentHandler();
const shipmentHandler = new ShipmentHandler();
validationHandler
  .setNext(discountHandler) // optional
  .setNext(paymentHandler)
  .setNext(shipmentHandler);
myClientCode(validationHandler);
