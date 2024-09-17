abstract class CakeRecipe {
  public bakeCake(): void {
    this.preheatOven();
    this.mixIngredients();
    this.bake();
    this.coolDown();
    this.decorate();
  }
  protected abstract mixIngredients(): void;
  protected preheatOven(): void {
    console.log("Oven is preheated to 175 deg!");
  }
  protected bake(): void {
    console.log("Oven is baked!");
  }
  protected decorate(): void {
    console.log("Oven is decorated!");
  }
  protected coolDown(): void {
    console.log("Oven is cooled down!");
  }
}

class ChocolateCake extends CakeRecipe {
  protected decorate(): void {
    console.log("Cake decorated with chocolates");
  }
  mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, floor, eggs");
  }
}
class VanillaCake extends CakeRecipe {
  mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, floor, eggs");
  }
}

// USAGE
function bakeCake(cake: CakeRecipe) {
  cake.bakeCake();
}

console.log("Baking a chocolate cake...");
bakeCake(new ChocolateCake());
console.log("Baking a vanilla cake...");
bakeCake(new VanillaCake());
