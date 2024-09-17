class Grinder {
  grindBeans() {
    console.log("Grinding beans...");
  }
}
class Boiler {
  boilWater() {
    console.log("Boiling water...");
  }
}
class Brewer {
  brewCoffee() {
    console.log("Brewing coffee...");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}
  makeCoffee(): void {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("Coffeee is ready !");
  }
}

// Client Code
const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();
const coffeeMakerFacade = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMakerFacade.makeCoffee();
