// Mediator interface
interface Mediator {
  notify(colleague: Colleague, event: string): void;
}

// Colleague abstract class
abstract class Colleague {
  protected mediator: Mediator;

  constructor(mediator: Mediator, protected name: string) {
    this.mediator = mediator;
  }

  abstract send(event: string): void;
  abstract receive(event: string): void;
}

// Concrete Mediator class
class ConcreteMediator implements Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
  }

  notify(colleague: Colleague, event: string): void {
    for (let c of this.colleagues) {
      if (c !== colleague) {
        c.receive(event);
      }
    }
  }
}

// Concrete Colleague class
class ConcreteColleague extends Colleague {
  send(event: string): void {
    console.log(`${this.name} sends: ${event}`);
    this.mediator.notify(this, event);
  }

  receive(event: string): void {
    console.log(`${this.name} received: ${event}`);
  }
}

// Usage
const mediator = new ConcreteMediator();

const colleague1 = new ConcreteColleague(mediator, "colleague1");
const colleague2 = new ConcreteColleague(mediator, "colleague2");
const colleague3 = new ConcreteColleague(mediator, "colleague3");
mediator.addColleague(colleague1);
mediator.addColleague(colleague2);
mediator.addColleague(colleague3);

colleague1.send("Yo 1");
colleague2.send("Hello 2");
