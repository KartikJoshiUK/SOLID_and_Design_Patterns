interface Button {
  render(): void;
  onClick(f: Function): void;
}
class WindowsButton implements Button {
  render(): void {
    console.log("Rendering Windows Button");
  }
  onClick(f: Function): void {
    f();
    console.log("Windows Button Clicked");
  }
}
class MacOSButton implements Button {
  render(): void {
    console.log("Rendering Mac OS Button");
  }
  onClick(f: Function): void {
    f();
    console.log("Mac OS Button Clicked");
  }
}
interface Checkbox {
  render(): void;
  toggle(): void;
}
class WindowsCheckbox implements Checkbox {
  constructor(private button: Button) {}
  render(): void {
    console.log("Rendering Windows Checkbox");
  }
  toggle(): void {
    this.button.onClick(() => console.log("Windows checkbox toggled"));
  }
}
class MacOSCheckbox implements Checkbox {
  constructor(private button: Button) {}
  render(): void {
    console.log("Rendering MacOS Checkbox");
  }
  toggle(): void {
    this.button.onClick(() => console.log("MacOS checkbox toggled"));
  }
}
interface IWidgetFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}
class WindowsFactory implements IWidgetFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}
class MacOSFactory implements IWidgetFactory {
  createButton(): Button {
    return new MacOSButton();
  }
  createCheckbox(button: Button): Checkbox {
    return new MacOSCheckbox(button);
  }
}

function renderUI(widgetFactory: IWidgetFactory) {
  const button = widgetFactory.createButton();
  const checkbox = widgetFactory.createCheckbox(button);

  button.render();
  checkbox.render();
  checkbox.toggle();
  checkbox.toggle();
}
const windowsFactory = new WindowsFactory();
const macOSFactory = new MacOSFactory();
renderUI(macOSFactory);
