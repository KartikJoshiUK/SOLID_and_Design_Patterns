interface FilterStrategy {
  apply(image: string): void;
}

class GrayscaleStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applied grayscale filter to ${image}`);
  }
}
class SepiaStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applied sepia filter to ${image}`);
  }
}
class NegativeStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`Applied negative filter to ${image}`);
  }
}
class ImageProcessor {
  private _strategy: FilterStrategy;
  setFilterStrategy(strategy: FilterStrategy) {
    this._strategy = strategy;
  }
  applyFilter(image: string) {
    this._strategy.apply(image);
  }
}

const imageProcessor = new ImageProcessor();
imageProcessor.setFilterStrategy(new NegativeStrategy());
imageProcessor.applyFilter("nature.png");
imageProcessor.setFilterStrategy(new GrayscaleStrategy());
imageProcessor.applyFilter("human.png");
