class User {
  constructor(public name: string) {}
}
interface MyIteratorResult<T> {
  value: T | null;
  done: boolean;
}
interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hasNext(): boolean;
}
interface Collection<T> {
  createIterator(): MyIterator<T>;
}
class UserCollection implements Collection<User> {
  constructor(private users: User[]) {}
  getUsers(): User[] {
    return this.users;
  }
  createIterator(): MyIterator<User> {
    return new UserIterator(this);
  }
}
class UserIterator implements MyIterator<User> {
  private position: number = 0;
  constructor(private collections: UserCollection) {}
  next() {
    if (this.hasNext() === false) throw new Error("Iterator already at end!");
    return {
      value: this.collections.getUsers()[this.position++],
      done: this.hasNext() === false,
    };
  }
  hasNext(): boolean {
    return this.position < this.collections.getUsers().length;
  }
}

// Usage
const users: User[] = [
  new User("Kartik"),
  new User("Ayush"),
  new User("Saloni"),
  new User("Archit"),
];
const userCollection = new UserCollection(users);
console.log(userCollection.getUsers());

const userIterator = userCollection.createIterator();
while (userIterator.hasNext()) console.log(userIterator.next());
