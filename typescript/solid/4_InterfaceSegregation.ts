// Correct: Small, specific interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Employee implements Workable, Eatable {
  public work(): void {
    console.log("Working");
  }

  public eat(): void {
    console.log("Eating");
  }
}

// Wrong: Large interface forcing classes to implement unused methods
interface Worker2 {
  work(): void;
  eat(): void;
}

class Employee2 implements Worker2 {
  public work(): void {
    console.log("Working");
  }

  public eat(): void {
    console.log("Eating");
  }
}

class Robot implements Worker2 {
  public work(): void {
    console.log("Working");
  }

  public eat(): void {
    throw new Error("Robots don't eat");
  }
}
