interface FlyWeight {
  operation(extrinsicState: string): void;
}
class ConcreteFlyWeight implements FlyWeight {
  constructor(private intrinsicState: string) {}
  operation(extrinsicState: string): void {
    console.log(this.intrinsicState, extrinsicState);
  }
}

class FlyWeightFactory {
  private flyweights: { [key: string]: FlyWeight } = {};
  create(key: string): FlyWeight {
    if (!this.flyweights[key])
      this.flyweights[key] = new ConcreteFlyWeight(key);
    return this.flyweights[key];
  }
}

const factory = new FlyWeightFactory();
const A1 = factory.create("A");
const A2 = factory.create("A");
console.log(A1 === A2);
