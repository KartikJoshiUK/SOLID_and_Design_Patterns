interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null;
  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }
  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "banana") return "Monkey : I'll eat the banana";
    return super.handle(request);
  }
}
class SquirrelHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "peanuts") return "Squirrel : I'll eat the peanuts";
    return super.handle(request);
  }
}
class DogHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "bone") return "Dog : I'll eat the bone";
    return super.handle(request);
  }
}

// Usage
function clientCode(handler: Handler) {
  const foods = ["peanuts", "banana", "pizza", "bone"];
  for (const food of foods) {
    console.log("Who wants to eat ", food, "?");
    const result = handler.handle(food);
    if (result) console.log(result);
    else console.log("Noone ate the ", food);
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(monkey).setNext(squirrel).setNext(dog);
clientCode(monkey);
