// Correct: Subclass can replace superclass without altering behavior
class Bird {
  public fly(): void {
    console.log("Flying");
  }
}

class Sparrow extends Bird {
  // Inherits fly method from Bird
}

class Penguin extends Bird {
  public fly(): void {
    throw new Error("Penguins can't fly");
  }
}

// Wrong: Subclass breaks the behavior of the superclass
class Bird2 {
  public fly(): void {
    console.log("Flying");
  }
}

class Penguin2 extends Bird2 {
  // Penguin can't actually fly
  public fly(): void {
    throw new Error("Penguins can't fly");
  }
}
