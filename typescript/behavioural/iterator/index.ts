class ArrayIterator<T> {
  private position: number = 0;
  constructor(private collection: T[]) {}
  next(): T {
    if (!this.hasNext()) throw new Error("Iterator is at the end");
    return this.collection[this.position++];
  }
  hasNext(): boolean {
    return this.position < this.collection.length;
  }
  reset(): void {
    // optional
    this.position = 0;
  }
}

const array: number[] = [34, 35, 36, 67, 56];
const iterator = new ArrayIterator<number>(array);
while (iterator.hasNext()) {
  console.log(iterator.next());
}
console.log("All elements have been traversed!");
