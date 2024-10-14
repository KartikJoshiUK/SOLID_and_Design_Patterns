class Memento {
  constructor(private state: string) {}
  getState(): string {
    return this.state;
  }
}

class Originator {
  private state: string;
  setState(state: string): void {
    console.log(`Saving state to ${state}`);
    this.state = state;
  }
  createMemento(): Memento {
    console.log(`Creating memento with state: ${this.state}`);
    return new Memento(this.state);
  }
  restore(memento: Memento) {
    this.setState(memento.getState());
    console.log(`Restoring state to: ${this.state}`);
  }
}

class CareTaker {
  private mementos: Memento[] = [];
  add(memento: Memento): void {
    this.mementos.push(memento);
  }
  get(index: number): Memento {
    return this.mementos[index];
  }
}

const originator = new Originator();
const caretaker = new CareTaker();

originator.setState("State 1");
caretaker.add(originator.createMemento());
originator.setState("State 2");
caretaker.add(originator.createMemento());

originator.setState("State 3");
console.log("Current state: ", originator.createMemento().getState());

originator.restore(caretaker.get(0));
originator.restore(caretaker.get(1));
