interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  constructor(private imagePath: string) {
    this.loadImage();
  }
  loadImage() {
    console.log("Loading ", this.imagePath);
  }
  request(): void {
    console.log("Image Requested!");
  }
}

class MyProxy implements Subject {
  private realSubject: RealSubject | null = null;
  constructor(private imagePath: string) {}
  request(): void {
    if (!this.realSubject) {
      this.realSubject = new RealSubject(this.imagePath);
    }
    this.realSubject.request();
  }
}

// Usage
const proxy = new MyProxy("path/to/image.jpg");

proxy.request(); // Loads image and requests it
proxy.request(); // Directly requests the already loaded image
