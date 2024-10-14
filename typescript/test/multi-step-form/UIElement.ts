export abstract class IUIElement {
  constructor(public id: string, public title: string) {}
  addStyles(styles: Partial<CSSStyleDeclaration>) {
    const textInputElement = document.getElementById(this.id)!;
    if (styles) {
      for (const [key, value] of Object.entries(styles)) {
        if (value) {
          textInputElement.style[key as any] = value.toString();
          console.log(key, value.toString());
        }
      }
    }
  }
  abstract render(hostId: string): void;
}
