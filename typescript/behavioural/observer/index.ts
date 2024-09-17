interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  state: number;
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private _state: number = 0;
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
  get state() {
    return this._state;
  }
  set state(value: number) {
    this._state = value;
    this.notifyObservers();
  }
}

class ConcreteObserver implements Observer {
  constructor(private id: number) {}
  update(subject: Subject): void {
    console.log(
      `[notification to observer ${this.id}] A subject changed!`,
      subject.state
    );
  }
}

// USAGE
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2);
subject.addObserver(observer1);
subject.addObserver(observer2);
console.log("The subject state is", subject.state);
subject.state = 11;
subject.removeObserver(observer2);
subject.state = 21;
