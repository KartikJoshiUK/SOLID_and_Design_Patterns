interface User {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  // its needed because there can be different Prototypes that works on different inputs and clones using different methods but they have common functions (clone(), getUser())
  clone(): Prototype;
  getUser(): User;
}

class ConcretePrototype implements Prototype {
  constructor(private user: User) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }
  public getUser(): User {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "Kartik",
  age: 21,
  email: "john@example.com",
});

const user2 = user1.clone();

console.log("Are both user same? ", user1 === user2);
