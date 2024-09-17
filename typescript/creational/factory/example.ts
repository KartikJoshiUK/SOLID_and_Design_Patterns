abstract class PaymentProcessor {
  constructor(protected amount: number) {}
  abstract processPayment(): void;
}
enum ProcessorType {
  PAYPAL,
  STRIPE,
}
class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log("Processing Paypal Payment: Rs ", this.amount);
  }
}
class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log("Processing Stripe Payment: Rs ", this.amount);
  }
}
class PaymentProcessorFactory {
  public createProcessor(type: ProcessorType, amount: number) {
    switch (type) {
      case ProcessorType.PAYPAL:
        return new PaypalProcessor(amount);
      case ProcessorType.STRIPE:
        return new StripeProcessor(amount);
      default:
        throw new Error("Invalid Payment Type");
    }
  }
}
const paymentProcessorFactory = new PaymentProcessorFactory();
const paypalProcessor: PaypalProcessor =
  paymentProcessorFactory.createProcessor(ProcessorType.PAYPAL, 100);
const stripeProcessor: StripeProcessor =
  paymentProcessorFactory.createProcessor(ProcessorType.STRIPE, 200);

paypalProcessor.processPayment();
stripeProcessor.processPayment();
