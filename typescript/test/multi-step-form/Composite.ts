import {
  ElementFactory,
  ElementType,
  SimpleButton,
  SubmitButton,
} from "./Element";
import { IUIElement } from "./UIElement";

export interface IComposite<T> {
  add(item: T): void;
  remove(item: T): void;
  get(): T[];
}

export class Tab extends IUIElement implements IComposite<IUIElement> {
  private elements: IUIElement[] = [];
  add(item: IUIElement): void {
    this.elements.push(item);
  }
  remove(item: IUIElement): void {
    this.elements = this.elements.filter((i) => i !== item);
  }
  get(): IUIElement[] {
    return this.elements;
  }
  hide(): void {
    document.getElementById(this.id)!.style.display = "none";
  }
  show(): void {
    document.getElementById(this.id)!.style.display = "flex";
  }
  render(hostId: string): void {
    const tabElement = document.createElement("div");
    tabElement.id = this.id;
    tabElement.innerHTML = `<h2>${this.title}</h2>`;
    document.getElementById(hostId)?.appendChild(tabElement);
    this.elements.forEach((element) => element.render(this.id));
  }
}

export class Form extends IUIElement implements IComposite<Tab> {
  private tabs: Tab[] = [];
  private state: number = 0;
  private hostId: string;
  private prevButton = ElementFactory.createElement(
    ElementType.BUTTON,
    "prev",
    "Prev"
  ) as SimpleButton;
  private nextButton = ElementFactory.createElement(
    ElementType.BUTTON,
    "next",
    "Next"
  ) as SimpleButton;
  private submitButton = ElementFactory.createElement(
    ElementType.SUBMIT_BUTTON,
    "submit",
    "Submit"
  ) as SubmitButton;
  constructor(public id: string, public title: string) {
    super(id, title);
    this.nextButton.callBackFunction = this.forwardAction;
    this.prevButton.callBackFunction = this.backwardAction;
    this.submitButton.callBackFunction = this.submitAction;
  }
  submitAction = (event: SubmitEvent): void => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formValues: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });
    console.log("Submitted!", formValues); // Log form values
  };
  forwardAction = (event: MouseEvent): void => {
    event.preventDefault();
    if (this.state + 1 < this.tabs.length) {
      this.state++;
      if (this.hostId) this.render(this.hostId);
    }
  };
  backwardAction = (event: MouseEvent): void => {
    event.preventDefault();
    if (this.state - 1 >= 0) {
      this.state--;
      if (this.hostId) this.render(this.hostId);
    } else console.log("Can't go back!");
  };
  add(item: Tab): void {
    this.tabs.push(item);
  }
  remove(item: Tab): void {
    this.tabs = this.tabs.filter((i) => i !== item);
  }
  get(): Tab[] {
    return this.tabs;
  }
  setTabs() {
    this.tabs.forEach((tab, index) => {
      if (index !== this.state) tab.hide();
      else tab.show();
    });
  }
  render(hostId: string): void {
    if (this.hostId) {
      this.setTabs();
    } else {
      this.hostId = hostId;
      const host = document.getElementById(hostId);

      // Rerender
      host!.innerHTML = "";
      const formElement = document.createElement("form");
      formElement.id = this.id;
      formElement.innerHTML = `<h1>${this.title}</h1>`;
      host?.appendChild(formElement);
      this.tabs.forEach((tab, index) => {
        tab.render(this.id);
      });
      this.setTabs();

      this.prevButton.render(this.id);
      this.nextButton.render(this.id);
      this.submitButton.render(this.id);
    }
    // attribute must be set after rerender
    if (this.state - 1 === -1) this.prevButton.disable();
    else this.prevButton.enable();
    if (this.state + 1 === this.tabs.length) {
      this.nextButton.hide();
      this.submitButton.show();
    } else {
      this.submitButton.hide();
      this.nextButton.show();
    }
  }
}
