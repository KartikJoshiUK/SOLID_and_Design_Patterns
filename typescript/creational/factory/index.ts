abstract class Car {
  // abstract because it can have a constructor and we don't have to write constructor in SubClasses multiple times
  constructor(public model: string, public year: string) {}
  abstract displayCarInfo(): void;
}
enum CarType {
  SEDAN = "sedan",
  SUV = "suv",
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log("This is a Sedan", this.model, this.year);
  }
}
class SUV extends Car {
  public displayCarInfo(): void {
    console.log("This is a SUV", this.model, this.year);
  }
}

class CarFactory {
  create(type: CarType, model: string, year: string): Car {
    switch (type) {
      case CarType.SEDAN:
        return new Sedan(model, year);
      case CarType.SUV:
        return new SUV(model, year);
      default:
        throw new Error("Car type is Invalid");
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.create(CarType.SEDAN, "Mahindra", "2003");
sedan.displayCarInfo();
const suv = carFactory.create(CarType.SUV, "Toyota", "2007");
suv.displayCarInfo();
