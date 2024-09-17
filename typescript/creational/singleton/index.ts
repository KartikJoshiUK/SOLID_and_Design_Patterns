class Singleton {
  private static instance: Singleton;
  private static _value: number;
  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }
  set value(value: number) {
    Singleton._value = value;
  }
  get value() {
    return Singleton._value;
  }
}

// const object = new Singleton() // Error -> Constructor is private
const object1: Singleton = Singleton.getInstance();
const object2: Singleton = Singleton.getInstance();

object1.value = 10;
console.log(object2.value);
console.log("Are both instances same? ", object1 === object2);
